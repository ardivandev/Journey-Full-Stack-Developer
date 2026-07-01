import { NavLink, Link, Outlet } from 'react-router-dom';
import '../styles/index.css';

function RootLayout() {
  return (
    <>
      <div>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? 'active' : isPending ? 'pending' : ''
          }
          style={{
            marginInline: '5px',
          }}
          to="/"
        >
          Home
        </NavLink>
        |
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? 'active' : isPending ? 'pending' : ''
          }
          style={{
            marginInline: '5px',
          }}
          to="/about"
        >
          About
        </NavLink>
        |
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? 'active' : isPending ? 'pending' : ''
          }
          style={{
            marginInline: '5px',
          }}
          to="/blog"
        >
          Blog
        </NavLink>
      </div>
      <p />
      <Outlet />
    </>
  );
}

export default RootLayout;
