import { Link } from "react-router-dom";

import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const registerUser = { name, email, password };
    console.log(registerUser);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-32">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card card-body shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn text-white bg-[#FF3811]"
              />
            </div>
          </form>
          <p className="text-center my-4">
            Already have an account?{" "}
            <Link className="text-[#FF3811] " to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
