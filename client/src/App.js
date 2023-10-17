import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Todopage from "./pages/Todopage";
import Header from "./components/Header";

function App() {
  return(
  <div className="App">
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Mainpage/>}></Route>
        <Route path="/mytodo" element={<Todopage/>}></Route>
      </Routes>
    </BrowserRouter>


  </div>
  );
}

export default App;
