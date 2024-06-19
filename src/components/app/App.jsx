import Header from "../header/Header";
import Works from "../works/Works";
import AddWork from "../addWork/AddWork";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../user/login/Login";
import Register from "../user/register/Register";
import Reset from "../user/reset/Reset";
import AddClient from "../clientCrud/addClient/AddClient";
import ClientTable from "../clientCrud/clientTable/ClientTable";
import Clients from "../clientCrud/clients/Clients";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Works />} />
          <Route path="/add-work" element={<AddWork />} />
          <Route path="/update/:id" element={<AddWork />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/addclient" element={<AddClient />} />
          <Route path="/clienttable" element={<ClientTable />} />
          <Route path="/clients" element={<Clients/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
