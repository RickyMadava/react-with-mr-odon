import "./App.css";
import { avatar, bell, logo, upload } from "./assets/svg";
import HeadingOne from "./components/header/HeadingOne";
import HeadingThree from "./components/header/HeadingThree";
import HeadingTwo from "./components/header/HeadingTwo";
import MainMenuBtn from "./components/navigation/MainMenuBtn";
import MainMenuSidebarBtn from "./components/navigation/MainMenuSidebarBtn";
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
      <div className="content-wrapper">
        {/* Left sidebar section */}
        <div className="sidebar-left">
          <HeadingOne title="Settings" />
          <MainMenuSidebarBtn text="Public profile" />
          <MainMenuSidebarBtn text="Account settings" active={true} />
          <MainMenuSidebarBtn text="Notifications" />
          <MainMenuSidebarBtn text="Pro Account" />
        </div>
        {/* Main section */}
        <div className="main-content">
          <HeadingTwo title="Account settings" />
          <div className="email-section">
            <HeadingThree title="Email adress" />
            <div className="one-line">
              <p>
                Your email adress is <span>emailis@private.com</span>
              </p>
              <button>Change</button>
            </div>
          </div>
          <div className="pwd-section">
            <div className="one-line">
              <HeadingThree title="Password" />
              <button>Hide</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
