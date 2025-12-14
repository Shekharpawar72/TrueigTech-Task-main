import { useEffect, useState } from "react";
import API from "../api/axios";
import PlanCard from "../components/PlanCard";

const UserDashboard = () => {
  const [plans, setPlans] = useState([]);
  const [subscriptions, setSubscriptions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlansAndSubscriptions();
  }, []);

  // 🔹 Fetch all plans + subscription status
  const fetchPlansAndSubscriptions = async () => {
    try {
      setLoading(true);

      // 1️⃣ Fetch all plans
      const plansRes = await API.get("/plans");
      const plansData = plansRes.data;
      setPlans(plansData);

      // 2️⃣ Check subscription for each plan
      const subs = await Promise.all(
        plansData.map((plan) =>
          API.get(`/subscriptions/${plan._id}`)
        )
      );

      // 3️⃣ Convert to lookup object { planId: true/false }
      const subMap = {};
      plansData.forEach((plan, index) => {
        subMap[plan._id] = subs[index].data.subscribed;
      });

      setSubscriptions(subMap);
    } catch (error) {
      console.error("Error fetching plans:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Subscribe to plan
  const handleSubscribe = async (planId) => {
    try {
      await API.post("/subscriptions", { planId });
      alert("Subscription successful 🎉");

      // Refresh access control immediately
      setSubscriptions((prev) => ({
        ...prev,
        [planId]: true,
      }));
    } catch (error) {
      alert("Already subscribed or error occurred");
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">
        Loading plans...
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-secondary">
        Available Fitness Plans
      </h1>

      {plans.length === 0 ? (
        <p className="text-gray-500">No plans available</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard
              key={plan._id}
              plan={plan}
              subscribed={subscriptions[plan._id]}
              onSubscribe={handleSubscribe}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
