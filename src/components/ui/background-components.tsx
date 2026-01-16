export const Component = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full relative bg-[#FBFBF9] overflow-hidden">
            {/* Elegant Sand/Gold Glow (Antara Style) */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 60% 40%, rgba(232, 216, 195, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 20% 60%, rgba(244, 241, 234, 0.6) 0%, transparent 60%)
          `,
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
