import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import Home from "@/pages/Home";
import LaserPage from "@/pages/Laser";
import About from "@/pages/About";
import Partners from "@/pages/Partners";
import Dashboard from "@/pages/Dashboard";

function App() {
    return (
        <Router>
            <SmoothScroll>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/laser" element={<LaserPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </SmoothScroll>
        </Router>
    );
}

export default App;
