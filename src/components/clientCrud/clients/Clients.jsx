import ClientTable from "../clientTable/ClientTable";
import { Link } from "react-router-dom";


const Clients = () => {
  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-item btn btn-primary" to="/addclient">Prideti Klienta</Link>
        </li>
      </ul>
      <h2>Clients</h2>
      <ClientTable />
    </div>
  );
};
export default Clients;
