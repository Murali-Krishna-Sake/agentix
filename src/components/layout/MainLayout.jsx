import { Outlet } from 'react-router-dom';
import Sidebar from '../elements/Sidebar';

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
