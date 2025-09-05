import { Map } from "./Map.jsx";
import { useNavigate } from "react-router-dom";
import "./Home-Page.css";
export function Home() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    const user =
      localStorage.getItem("username") || localStorage.getItem("email");
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div id="login-profile">
        <button id="login-profile-btn" onClick={handleProfileClick}>
          Login/Profile
        </button>
      </div>
      <Map />
    </>
  );
}
