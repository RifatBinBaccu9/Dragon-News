import { NavLink } from 'react-router-dom';
import user from '../../../../public/user.png';

const Navbar = () => {
    const linkes=<>
    <NavLink to={"/"}><li><a>Home</a></li></NavLink>
    <li><a>About</a></li>
    <li><a>Career</a></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {linkes}
      </ul>
    </div>
    <div></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {linkes}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <img src={user} alt="" />
    <NavLink to={"/login"}>
    <button className="text-white bg-black py-2 px-3 font-medium cursor-pointer">Login</button>
    </NavLink>
  </div>
</div>
        </div>
    );
};

export default Navbar;