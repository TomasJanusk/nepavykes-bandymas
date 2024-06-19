import { useEffect } from "react";
import { useState } from "react";
import * as service from "../../services/worksCrudServices";
import { useNavigate, link, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

const AddWork = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    date: "",
    company: "",
    service: "",
    description: "",
    from: "",
    to: "",
    uid: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      service.updateWork(id, formData);
    } else {
      service.addWork({
        ...formData,
        uid: user.uid,
      });
    }
    navigate("/");
  };

  useEffect(() => {
    id && service.getWorkById((item) => setFormData(item), id);
  }, [id]);

  return (
    <div className="card">
      <div className="card-header">
        <h2>Prideti atlikta darba</h2>
      </div>
      <div className="card-body">
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="date">Pasirinkite data: </label>
            <input
              type="date"
              name="date"
              className="form-control"
              onChange={handleChange}
              value={formData.date}
            />
          </div>
          <div className="mb-3">
            <select
              name="company"
              className="form-control"
              onChange={handleChange}
              value={formData.company}
            >
              <option selected disabled>
                --Pasirinkite klienta--
              </option>
              <option value="kb">Kilobaitas</option>
              <option value="it">IT sfera</option>
            </select>
          </div>
          <div className="mb-3">
            <select
              name="service"
              className="form-control"
              onChange={handleChange}
              value={formData.service}
            >
              <option selected disabled>
                --Pasirinkite paslauga--
              </option>
              <option value="dev">Development</option>
              <option value="ux">UX research</option>
            </select>
          </div>
          <div className="mb-3">
            <textarea
              name="description"
              className="form-control"
              placeholder="Darbo aprasymas"
              onChange={handleChange}
              value={formData.description}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="from">Nuo:</label>
            <input
              type="time"
              name="from"
              className="form-control"
              onChange={handleChange}
              value={formData.from}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="to">Iki:</label>
            <input
              type="time"
              name="to"
              className="form-control"
              onChange={handleChange}
              value={formData.to}
            />
          </div>
          <div className="mb-3">
            {id ? (
              <button type="submit" className="btn btn-primary">
                Atnaujinti
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Saugoti
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddWork;
