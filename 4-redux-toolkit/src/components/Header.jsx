import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/slices/counterSlice";

const Header = () => {
  const dispatch = useDispatch();

  const { isDarkTheme } = useSelector((store) => store.counterReducer);
  return (
    <header className="p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <Link
          className={`fs-2 text-decoration-none ${
            isDarkTheme ? "text-white" : "text-dark"
          }`}
        >
          TOOLKIT
        </Link>

        <nav className="d-flex align-items-center gap-3">
          <NavLink
            className={`btn ${isDarkTheme ? "text-white" : "text-dark"} `}
            to={"/"}
          >
            Sayaç
          </NavLink>
          <NavLink
            className={`btn ${isDarkTheme ? "text-white" : "text-dark"} `}
            to={"/crud"}
          >
            CRUD
          </NavLink>
          <button
            className={`btn text-nowrap ${
              isDarkTheme ? "bg-white text-dark" : "bg-dark text-white"
            }`}
            onClick={() => dispatch(toggleTheme())}
          >
            Tema Değiş
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
