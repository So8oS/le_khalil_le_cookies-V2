import "./App.css";
import { Navbar } from "./componants/navbar/navbar";
import { Homepage } from "./pages/homepage/homepage";
import { Footer } from "./componants/footer/footer";
import { Whoarewe } from "./pages/whoarewe/whoarewe";
import { Routes, Route } from "react-router-dom";
import { Cartdropdown } from "./componants/cartdropdown/cartdropdown";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/whoarewe" element={<Whoarewe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
