import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageMoreProjects from "./Page/PageMoreProjects";
import Home from "./Page/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moreprojects" element={<PageMoreProjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
