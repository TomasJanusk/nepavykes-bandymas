import { useState } from "react";
import { auth, sendPasswordReset } from "../../../services/AuthServices";

const Reset = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    sendPasswordReset(email);
  };

  return (
    <div className="container">
      <h2 className="mt-3 text-center">atstatykite slaptazodi</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="el. pastas"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <button type="submit">siusti</button>
        </div>
      </form>
    </div>
  );
};

export default Reset;
