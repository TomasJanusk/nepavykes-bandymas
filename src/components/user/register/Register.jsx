import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
} from "../../../services/AuthServices";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(
      userData.firstName,
      userData.email,
      userData.password
    );
  };
  return (
    <form className="form container" onSubmit={submitHandler}>
      <div className="form-group mt-3">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Vardas"
          name="firstName"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          onChange={handleChange}
          placeholder="El pastas"
          name="email"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="password"
          onChange={handleChange}
          placeholder="slaptazodis"
          name="password"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary">
          Registruotis
        </button>
      </div>
      <div className="form-group mt-3">
        <p>
          Turite paskyra? <Link to="/login">Galite prisijungti</Link>{" "}
        </p>
      </div>
    </form>
  );
};

export default Register;
