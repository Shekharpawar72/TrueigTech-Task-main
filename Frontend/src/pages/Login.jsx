import { useState } from "react";
import API from "../api/axios";
import { useNavigate ,Link} from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    res.data.user.role === "trainer"
      ? navigate("/trainer")
      : navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-100">
      <form onSubmit={submit} className="bg-white p-8 rounded-xl w-96 shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input className="input" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input type="password" className="input" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>

        <button className="btn w-full">Login</button>
        {/* 🔹 Signup Link */}
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-emerald-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
