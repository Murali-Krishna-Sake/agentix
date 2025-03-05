import { Link } from 'react-router-dom';
import { navigationConstants } from '../../constants/NavigationConstants';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">Agentix</h1>
      <button className="thread-btn">
        <span class="material-symbols-outlined">add</span> New Thread
      </button>
      <ul className="navigation-links">
        {navigationConstants.map((navItem) => {
          return (
            <Link to={navItem.path} key={navItem.title} className="list-item">
              {navItem.icon} {navItem.title}
            </Link>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
