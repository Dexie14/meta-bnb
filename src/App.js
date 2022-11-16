import { Routes, Route} from "react-router-dom";
import Home from "./Page/Home/Home";
import Place from "./Page/Place/Place";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/place" element={<Place />} />
   </Routes>
   </>
  );
}

export default App;
