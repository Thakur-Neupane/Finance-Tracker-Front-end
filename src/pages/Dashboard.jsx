import { Container } from "react-bootstrap";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { AuthComp } from "../components/AuthComponent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = ({ loggedInUser }) => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!loggedInUser?._id) {
  //     return navigate("/");
  //   }
  // }, []);

  return (
    <AuthComp loggedInUser={loggedInUser}>
      {/* header  */}
      <TopNav loggedInUser={loggedInUser} />
      {/* main body  */}
      <Container className="main pt-2">
        <h4>Dashboard | Welcome back {loggedInUser?.name}</h4>
        <hr />
      </Container>{" "}
      {/* footer  */}
      <Footer />
    </AuthComp>
  );
};

export default Dashboard;
