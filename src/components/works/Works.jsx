import WorksTable from "../workstable/WorksTable";
import { Link } from "react-router-dom";
import * as service from "../../services/worksCrudServices";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading) return;
    if (user) {
      service.getAllWorks((works) => {
        setWorks(works);
      }, user);
    }
  }, [user, loading]);

  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-item btn btn-primary" to="/add-work">
            Prideti atlikta darba
          </Link>
        </li>
      </ul>
      <h2>Works</h2>
      <WorksTable data={works} />
    </div>
  );
};
export default Works;
