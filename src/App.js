import "./App.css";
import { Navbar } from "./componants/navbar/navbar";
import { Homepage } from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
