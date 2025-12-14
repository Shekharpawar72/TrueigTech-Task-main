import { useState } from "react";
import API from "../api/axios";
import { useNavigate ,Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/auth/signup", form);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={submit} className="bg-white p-8 rounded-xl w-96 shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <input className="input" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input className="input" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input type="password" className="input" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>

        <select className="input" onChange={(e)=>setForm({...form,role:e.target.value})}>
          <option value="user">User</option>
          <option value="trainer">Trainer</option>
        </select>

        <button className="btn w-full">Create Account</button>

         {/* 🔹 Login Link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
