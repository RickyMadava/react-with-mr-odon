import "./App.css";
import { avatar, bell, bellDark, logo, logoDark, upload } from "./assets/svg";
import HeadingOne from "./components/header/HeadingOne";
import HeadingThree from "./components/header/HeadingThree";
import HeadingTwo from "./components/header/HeadingTwo";
import MainMenuBtn from "./components/navigation/MainMenuBtn";
import MainMenuSidebarBtn from "./components/navigation/MainMenuSidebarBtn";
function App() {
  const toggleSwitch = document.querySelector(
    'input[type="checkbox"].theme-switch'
  );

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme:dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    toggleSwitch.checked = true;
  } else {
    document.documentElement.classList.remove("dark");
  }
  function switchTheme(e) {
    if (e.target.checked) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }
  if (toggleSwitch) {
    toggleSwitch.addEventListener("change", switchTheme, false);
  }
  return (
    <div className="bg-white dark:bg-slate-800">
      {/* Navbar section */}
      <div className="navbar-wrapper">
        <div className="logo block dark:hidden">
          <img src={logo} alt="Logo" />
        </div>
        <div className="logo hidden dark:block">
          <img src={logoDark} alt="Logo" />
        </div>
        <div className="main-menu">
          <MainMenuBtn text="Free designs" />
          <MainMenuBtn text="License" />
          <MainMenuBtn text="Articles" />
          <MainMenuBtn text="Contributors" />
          <MainMenuBtn text="About" />
        </div>
        <div className="flex items-center z-30">
          <svg
            className="h-6 w-6 mr-2 text-yellow-300 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <div className="relative inline-block w-10 select-none">
            <input
              type="checkbox"
              name="toggleTheme"
              id="toggleTheme"
              className="transition-transform transform translate-x-0 duration-500 theme-switch absolute block w-5 h-5 rounded-full bg-white appearance-none cursor-pointer mx-1 my-1"
            />
            <label
              htmlFor="toggleTheme"
              className="theme-switch-label block overflow-hidden w-14 h-7 rounded-full bg-yellow-300 cursor-pointer"
            ></label>
          </div>
          <svg
            className="h-6 w-6 ml-6 text-gray-900 dark:text-yellow-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
        <div className="components">
          <div className="components-btn-notification block dark:hidden">
            <img src={bell} alt="Bell icon" />
            <div className="btn-notification">
              <div className="btn-notification-c1"></div>
              <div className="btn-notification-c2"></div>
            </div>
          </div>
          <div className="components-btn-notification hidden dark:block">
            <img src={bellDark} alt="Bell icon" />
            <div className="btn-notification">
              <div className="btn-notification-c1"></div>
              <div className="btn-notification-c2"></div>
            </div>
          </div>
          <div className="components-avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="components-btn-filled dark:bg-slate-100 dark:text-gray-800">
            <img src={upload} alt="Upload file icone" />
            Upload
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        {/* Left sidebar section */}
        <div className="sidebar-left dark:border-l-2 dark:border-slate-700">
          <HeadingOne title="Settings" />
          <MainMenuSidebarBtn text="Public profile" />
          <MainMenuSidebarBtn text="Account settings" active={true} />
          <MainMenuSidebarBtn text="Notifications" />
          <MainMenuSidebarBtn text="Pro Account" />
        </div>
        {/* Main section */}
        <div className="main-content dark:text-slate-100">
          <HeadingTwo title="Account settings" />
          <div className="email-section dark:border-b-slate-700">
            <HeadingThree title="Email adress" />
            <div className="one-line">
              <p>
                Your email adress is <span>emailis@private.com</span>
              </p>
              <a href="#">Change</a>
            </div>
          </div>
          <div className="pwd-section dark:border-b-slate-700">
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
              Can???t remember your current password?{" "}
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
