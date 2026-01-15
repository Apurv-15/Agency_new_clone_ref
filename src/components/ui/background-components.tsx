export const Component = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full relative bg-white overflow-hidden">
            {/* Soft Sky Blue Glow */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
            radial-gradient(circle at center, #E0F2FE 0%, transparent 80%)
          `,
                    opacity: 0.8,
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
