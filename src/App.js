import "./App.css";
import { Navbar } from "./componants/navbar/navbar";
import { Homepage } from "./pages/homepage/homepage";
import { Footer } from "./componants/footer/footer";
import { WhoarewePage } from "./pages/whoarewePage/whoarewePage";
import { Routes, Route } from "react-router-dom";
import { Cartdropdown } from "./componants/cartdropdown/cartdropdown";
import { Contactus } from "./pages/contactus/contactus";
import { Signinpage } from "./pages/signinpage/signinpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/whoarewe" element={<WhoarewePage />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/Signinpage" element={<Signinpage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
