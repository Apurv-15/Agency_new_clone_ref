
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function Events() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white flex flex-col">
            <Navbar />
            <main className="flex-grow flex items-center justify-center">
                <h1 className="text-4xl font-bold tracking-wider text-neutral-400">EVENTS</h1>
            </main>
            <Footer />
        </div>
    );
}
