import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch update profile
    if (password !== confirmPassword) {
      alert("Password and Confirm Password Are Not Matched");
    } else {
      dispatch(updateUserProfile({ userId: user._id, name, email, password }));
    }
  };
  return (
    <>
      <Header />
      <div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>User Profile</h1>
          </div>
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (
                <MessageBox variant="danger">{errorUpdate}</MessageBox>
              )}
              {successUpdate && (
                <MessageBox variant="success">
                  Profile Updated Successfully
                </MessageBox>
              )}
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="taxt"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="taxt"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="taxt"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="taxt"
                  placeholder="Enter confirm password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div>
                <label />
                <button className="primary" type="submit">
                  Update
                </button>
              </div>
            </>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ProfileScreen;
