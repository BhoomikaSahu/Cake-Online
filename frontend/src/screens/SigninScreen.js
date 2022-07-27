import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const SigninScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(true);

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
    if (userInfo && !userInfo.verified) {
      setVerified(false);
    }
  };
  useEffect(() => {
    if (userInfo && userInfo.verified) {
      setVerified(userInfo.verified);
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo, verified]);

  // if(userInfo){
  //   console.log(userInfo.verified);
  // }

  return (
    <>
      <Header />
      <div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Sign In</h1>
          </div>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
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
            <label />
            <button className="primary" type="submit">
              Sign In
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
              New customer?{" "}
              <Link to={`/register?redirect=${redirect}`}>
                Create your account
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SigninScreen;
