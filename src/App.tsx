import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "./context/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default App;
