import { useState } from "react";
import * as service from "../../../services/clientsCrudServices";

const AddClient = () => {
  const [clientData, setClientData] = useState({
    company: "",
  });

  const handleChange = (e) => {
    setClientData({
      ...clientData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(clientData);
    service.addClient(clientData);
  };
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={submitHandler} className="form"></form>
        <div className="mb-3">
          <label type="text">Klientas</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={clientData.company}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Saugoti
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddClient;
