import "./App.css";
import { avatar, bell, logo, upload } from "./assets/svg";
import MainMenuBtn from "./components/navigation/MainMenuBtn";
function App() {
  return (
    <div className="App">
      {/* Navbar section */}
      <div className="navbar-wrapper">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="main-menu">
          <MainMenuBtn text="Free designs" />
          <MainMenuBtn text="License" />
          <MainMenuBtn text="Articles" />
          <MainMenuBtn text="Contributors" />
          <MainMenuBtn text="About" />
        </div>
        <div className="components">
          <div className="components-btn-notification">
            <img src={bell} alt="Bell icon" />
            <div className="btn-notification">
              <div className="btn-notification-c1"></div>
              <div className="btn-notification-c2"></div>
            </div>
          </div>
          <div className="components-avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="components-btn-filled">
            <img src={upload} alt="Upload file icone" />
            Upload
          </div>
        </div>
      </div>
      {/* Left sidebar section */}
      {/* Main section */}
    </div>
  );
}

export default App;
