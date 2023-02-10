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
              <a href="#">Change</a>
            </div>
          </div>
          <div className="pwd-section">
            <div className="one-line">
              <HeadingThree title="Password" />
              <a href="#">Hide</a>
            </div>
            <div className="input-bloc-container">
              <div className="input-container">
                <label htmlFor="New password">New password</label>
                <input type="password" placeholder="********" />
              </div>
              <div className="input-container">
                <label htmlFor="Current password">Current password</label>
                <input type="password" placeholder="********" />
              </div>
            </div>
            <p>
              Can’t remember your current password?{" "}
              <a href="#">Reset your password</a>
            </p>
            <button>Save password</button>
          </div>
          <div className="delete-section">
            <HeadingThree title="Delete account" />
            <p>
              Would you like to delete your account? This account contains 1388
              posts. Deleting your account will remove all the content
              associated with it.
            </p>
            <a href="#">I want to delete my account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
