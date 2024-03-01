import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PageTop from "./Components/PageTop/PageTop";
import MyProjects from "./Components/MyProjects/MyProjects";
import PrincipalProjects from "./Components/PrincipalProjects/PrincipalProjects";
import MoreProjects from "./Components/MoreProjects/MoreProjects";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <PageTop />
        <MyProjects />
        <PrincipalProjects />
        <MoreProjects />
        <AboutMe />
        <Contacts />
      </BrowserRouter>
    </div>
  );
}

export default App;
