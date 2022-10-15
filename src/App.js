import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/pages/Home";
import AdminPainel from "./components/pages/AdminPainel";
import NewUser from "./components/pages/NewUser";

import './styles/style.css'
import './styles/AdminPainel.css'


//import './js/newUser.js'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:userid/painel" element={<AdminPainel />} />
      <Route path="/newUser" element={<NewUser />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
