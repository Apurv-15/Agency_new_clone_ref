import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import Home from "@/pages/Home";
import LaserPage from "@/pages/Laser";

import Products from "@/pages/Products";
import Timeline from "@/pages/Timeline";
import Process from "@/pages/Process";
import Contact from "@/pages/Contact";
import Partners from "@/pages/Partners";
import Dashboard from "@/pages/Dashboard";

function App() {
    return (
        <Router>
            <SmoothScroll>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/laser" element={<LaserPage />} />

                    <Route path="/products" element={<Products />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </SmoothScroll>
        </Router>
    );
}

export default App;
