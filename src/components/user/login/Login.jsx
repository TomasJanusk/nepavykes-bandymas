import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  signInWithEmailAndPassword,
} from "../../../services/AuthServices";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
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
    signInWithEmailAndPassword(userData.email, userData.password);
  };

  return (
    <form className="form container" onSubmit={submitHandler}>
      <div className="form-group mt-3">
        <input
          type="text"
          placeholder="El pastas"
          name="email"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="password"
          placeholder="slaptazodis"
          name="password"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary">
          Prisijungti
        </button>
      </div>
      <div className="form-group mt-3">
        <p>
          neturite paskyros? <Link to="/register">Galite prisijungti</Link>
        </p>
      </div>
      <div className="form-group mt-3">
        <p>
          Pamirsote slaptazodi? <Link to="/reset">Atkurkite</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
