import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
