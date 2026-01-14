import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import Home from "@/pages/Home";
import LaserPage from "@/pages/Laser";

function App() {
    return (
        <Router>
            <SmoothScroll>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/laser" element={<LaserPage />} />
                </Routes>
            </SmoothScroll>
        </Router>
    );
}

export default App;
