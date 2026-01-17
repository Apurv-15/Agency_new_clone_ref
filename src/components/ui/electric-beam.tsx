import React, { useEffect, useRef, useCallback } from 'react';
import { MotionValue } from 'framer-motion';

interface ElectricBeamProps {
    scrollYProgress: MotionValue<number>;
    color?: string;
    speed?: number;
    chaos?: number;
}

const ElectricBeam: React.FC<ElectricBeamProps> = ({
    scrollYProgress,
    color = '#8B5CF6',
    speed = 1,
    chaos = 0.5
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef(0);
    const lastFrameTimeRef = useRef(0);

    const random = useCallback((x: number): number => {
        return (Math.sin(x * 12.9898) * 43758.5453) % 1;
    }, []);

    const noise2D = useCallback(
        (x: number, y: number): number => {
            const i = Math.floor(x);
            const j = Math.floor(y);
            const fx = x - i;
            const fy = y - j;

            const a = random(i + j * 57);
            const b = random(i + 1 + j * 57);
            const c = random(i + (j + 1) * 57);
            const d = random(i + 1 + (j + 1) * 57);

            const ux = fx * fx * (3.0 - 2.0 * fx);
            const uy = fy * fy * (3.0 - 2.0 * fy);

            return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
        },
        [random]
    );

    const octavedNoise = useCallback(
        (x: number, time: number, seed: number): number => {
            let y = 0;
            let amplitude = 15 * chaos;
            let frequency = 1.5;

            for (let i = 0; i < 5; i++) {
                y += amplitude * noise2D(frequency * x + seed * 100, time * frequency * 0.4);
                frequency *= 2.1;
                amplitude *= 0.45;
            }

            return y;
        },
        [noise2D, chaos]
    );

    function hexToRgba(hex: string, alpha: number = 1): string {
        if (!hex) return `rgba(0,0,0,${alpha})`;
        let h = hex.replace('#', '');
        if (h.length === 3) {
            h = h.split('').map(c => c + c).join('');
        }
        const int = parseInt(h, 16);
        const r = (int >> 16) & 255;
        const g = (int >> 8) & 255;
        const b = int & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const updateSize = () => {
            const rect = container.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.scale(dpr, dpr);
        };

        updateSize();
        const resizeObserver = new ResizeObserver(updateSize);
        resizeObserver.observe(container);

        const draw = (currentTime: number) => {
            const deltaTime = (currentTime - lastFrameTimeRef.current) / 1000;
            timeRef.current += deltaTime * speed;
            lastFrameTimeRef.current = currentTime;

            const rect = container.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            const progress = scrollYProgress.get();
            const currentHeight = progress * rect.height;

            if (currentHeight <= 5) {
                requestAnimationFrame(draw);
                return;
            }

            const centerX = rect.width / 2;

            // Draw Core Electric Path (White)
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.lineWidth = 1.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            const samples = Math.floor(currentHeight / 5);
            for (let i = 0; i <= samples; i++) {
                const py = (i / samples) * currentHeight;
                const px = centerX + octavedNoise(i * 0.2, timeRef.current, 0);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.stroke();

            // Draw Glow Layers
            const layers = [
                { color: color, blur: 4, width: 3, opacity: 0.6 },
                { color: color, blur: 12, width: 6, opacity: 0.3 },
                { color: color, blur: 32, width: 12, opacity: 0.1 },
            ];

            layers.forEach(layer => {
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = hexToRgba(layer.color, layer.opacity);
                ctx.lineWidth = layer.width;
                ctx.filter = `blur(${layer.blur}px)`;

                for (let i = 0; i <= samples; i++) {
                    const py = (i / samples) * currentHeight;
                    const px = centerX + octavedNoise(i * 0.2, timeRef.current, 0);
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.stroke();
                ctx.restore();
            });

            // Draw Spark Head
            const headY = currentHeight;
            const headX = centerX + octavedNoise(samples * 0.2, timeRef.current, 0);

            // Inner Core
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(headX, headY, 3, 0, Math.PI * 2);
            ctx.fill();

            // Outer Glow
            ctx.shadowBlur = 20;
            ctx.shadowColor = color;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(headX, headY, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Lateral Spark Lines
            for (let i = 0; i < 3; i++) {
                const angle = (timeRef.current * 10 + i * (Math.PI * 2 / 3)) % (Math.PI * 2);
                const len = 15 + Math.sin(timeRef.current * 20 + i) * 10;
                ctx.beginPath();
                ctx.strokeStyle = hexToRgba("white", 0.8);
                ctx.lineWidth = 1;
                ctx.moveTo(headX, headY);
                ctx.lineTo(headX + Math.cos(angle) * len, headY + Math.sin(angle) * len);
                ctx.stroke();
            }

            requestAnimationFrame(draw);
        };

        const animId = requestAnimationFrame(draw);
        return () => {
            cancelAnimationFrame(animId);
            resizeObserver.disconnect();
        };
    }, [scrollYProgress, color, speed, octavedNoise]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none flex justify-center">
            <canvas ref={canvasRef} className="h-full" style={{ width: '80px' }} />
        </div>
    );
};

export default ElectricBeam;
