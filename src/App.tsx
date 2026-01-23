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

import AboutUs from "@/pages/AboutUs";
import Projects from "@/pages/Projects";
import Events from "@/pages/Events";

function App() {
    return (
        <Router>
            <SmoothScroll>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/laser" element={<LaserPage />} />

                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/process" element={<Process />} />

                    <Route path="/contact" element={<Contact />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </SmoothScroll>
        </Router>
    );
}

export default App;
