import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";

// styles
import style from "./App.module.css";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

export default function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/id-generator" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
