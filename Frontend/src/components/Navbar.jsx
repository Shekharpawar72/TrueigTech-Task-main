import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-green-400">
        FitPlanHub
      </Link>

      <div className="flex items-center gap-6">
        {user?.role === "user" && (
          <>
            <Link to="/dashboard" className="hover:text-green-400">
              Plans
            </Link>
            <Link to="/trainers" className="hover:text-green-400">
              Trainers
            </Link>
          </>
        )}

        {user?.role === "trainer" && (
          <Link to="/trainer" className="hover:text-green-400">
            Dashboard
          </Link>
        )}

        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
