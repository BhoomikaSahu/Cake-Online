import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verified, setVerified] = useState(true);

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password));
      setVerified(false);
    }
  };
  useEffect(() => {
    if (userInfo && userInfo.verified) {
      setVerified(userInfo.verified);
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo, verified]);
  return (
    <>
      <Header />
      <div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Create Account</h1>
          </div>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="Enter confir password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <label />
            <button className="primary" type="submit">
              Register
            </button>
          </div>
          {!verified && (
            <MessageBox variant="success">
              An Email sent to your account please verify
            </MessageBox>
          )}
          <div>
            <label />
            <div>
              Already have an account?{" "}
              <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegisterScreen;
