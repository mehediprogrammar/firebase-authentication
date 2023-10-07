import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <nav className="text-center">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Login
        </NavLink>
        
      </nav>
    </div>
  );
};

export default Navber;
