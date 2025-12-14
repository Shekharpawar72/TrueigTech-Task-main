import { useState } from "react";
import API from "../api/axios";

const TrainerDashboard = () => {
  const [plan, setPlan] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
  });

  const createPlan = async () => {
    try {
      await API.post("/plans", plan,{
        ...plan,
        price:Number(plan.price),
      });
      alert("Plan created successfully!");

      setPlan({
        title: "",
        description: "",
        price: "",
        duration: "",
      });
    } catch (err) {
      alert("Error creating plan");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Create Plan</h2>

      <input
  className="input"
  placeholder="Title"
  value={plan.title}
  onChange={(e) => setPlan({ ...plan, title: e.target.value })}
/>

<input
  className="input"
  placeholder="Description"
  value={plan.description}
  onChange={(e) => setPlan({ ...plan, description: e.target.value })}
/>

<input
  className="input"
  type="number"
  placeholder="Price"
  value={plan.price}
  onChange={(e) => setPlan({ ...plan, price: e.target.value })}
/>

<input
  className="input"
  placeholder="Duration"
  value={plan.duration}
  onChange={(e) => setPlan({ ...plan, duration: e.target.value })}
/>


      <button className="btn w-full" onClick={createPlan}>Create Plan</button>
    </div>
  );
};

export default TrainerDashboard;
