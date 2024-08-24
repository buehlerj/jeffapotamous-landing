import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import LandingNavbar from './components/Landing/Landing';
import StarWarsLib from './components/StarWarsLib/StarWarsLib';
import GitHub from './components/GitHub/GitHub';
import HomeLab from './components/HomeLab/HomeLab';
import About from './components/About/About';
import Tech from './components/Tech/Tech';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Tooltip } from 'react-tooltip';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingNavbar />,
    errorElement: <div>404 Not Found</div>,
  },
  { path: '/starwarslib', element: <StarWarsLib /> },
  { path: '/github', element: <GitHub /> },
  { path: '/homelab', element: <HomeLab /> },
  { path: '/tech', element: <Tech /> },
  { path: '/about', element: <About /> },
]);

function App() {
  return (
    <>
      <Tooltip id="app-tooltip" />

      <div id="nav-side-bar">
        <a href="/">
          <FontAwesomeIcon icon={faHome} className="nav-side-bar-item" />
        </a>

        <a href="/starwarslib">
          <img
            src="/src/assets/books.png"
            className="nav-side-bar-item"
            data-tooltip-id="app-tooltip"
            data-tooltip-content="Star Wars Library"
          />
        </a>

        <a href="/github">
          <FontAwesomeIcon
            icon={faGithub}
            className="nav-side-bar-item"
            data-tooltip-id="app-tooltip"
            data-tooltip-content="Github"
          />
        </a>

        <a href="/homelab">
          <FontAwesomeIcon
            icon={faServer}
            className="nav-side-bar-item"
            data-tooltip-id="app-tooltip"
            data-tooltip-content="Home Lab"
          />
        </a>
        <a href="/tech">
          <FontAwesomeIcon
            icon={faComputer}
            className="nav-side-bar-item"
            data-tooltip-id="app-tooltip"
            data-tooltip-content="Tech Projects"
          />
        </a>

        <a href="/about">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="nav-side-bar-item"
            id="about-me-icon"
            data-tooltip-id="app-tooltip"
            data-tooltip-content="About"
          />
        </a>
      </div>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
