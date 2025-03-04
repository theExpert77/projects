import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar myName="TextUtils" />;
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={<TextForm title="Enter the text to analyze below" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
