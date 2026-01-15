import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import Home from "@/pages/Home";
import LaserPage from "@/pages/Laser";
import About from "@/pages/About";
import Partners from "@/pages/Partners";

function App() {
    return (
        <Router>
            <SmoothScroll>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/laser" element={<LaserPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/partners" element={<Partners />} />
                </Routes>
            </SmoothScroll>
        </Router>
    );
}

export default App;
