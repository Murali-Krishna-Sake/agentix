import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout.jsx';
import HomePage from './pages/Home.jsx';
import App from './App.jsx';
import PageUnderConstruction from './components/elements/PageUnderConstruction.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/bookmarks',
        element: <PageUnderConstruction />,
      },
      {
        path: '/collections',
        element: <PageUnderConstruction />,
      },
      {
        path: '/notifications',
        element: <PageUnderConstruction />,
      },
      {
        path: '/recent-threads',
        element: <PageUnderConstruction />,
      },
    ],
  },
]);

export default router;
