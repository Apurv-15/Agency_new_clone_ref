import { useNavigate } from "react-router-dom";
import { LazyLoader } from "@/components/ui/lazy-loader";

export default function Home() {
    const navigate = useNavigate();

    const handleLoadComplete = () => {
        // Wait for the loader's exit animation to complete (approx 800ms) before navigating
        setTimeout(() => {
            navigate("/process");
        }, 800);
    };

    return (
        <>
            <LazyLoader onLoadComplete={handleLoadComplete} loadingDuration={3500} />
            {/* Placeholder background to show during the loader's fade-out */}
            <div className="min-h-screen bg-background" />
        </>
    );
}
