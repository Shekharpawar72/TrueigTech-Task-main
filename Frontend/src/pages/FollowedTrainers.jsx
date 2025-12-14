import { useEffect, useState } from "react";
import API from "../api/axios";
import TrainerCard from "../components/TrainerCard";

const FollowedTrainers = () => {
  const [allTrainers, setAllTrainers] = useState([]);
  const [followedTrainers, setFollowedTrainers] = useState([]);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      // 1️⃣ Fetch all plans to extract trainers
      const plansRes = await API.get("/plans");

      const uniqueTrainersMap = new Map();
      plansRes.data.forEach((plan) => {
        uniqueTrainersMap.set(plan.trainerId._id, plan.trainerId);
      });

      const trainersList = Array.from(uniqueTrainersMap.values());
      setAllTrainers(trainersList);

      // 2️⃣ Fetch current user (to get followed trainers)
      const userRes = await API.get("/users/me");

      const followedIds = userRes.data.followedTrainers || [];

      // 3️⃣ Filter followed trainers
      const followed = trainersList.filter((trainer) =>
        followedIds.includes(trainer._id)
      );

      setFollowedTrainers(followed);
    } catch (error) {
      console.error("Error fetching trainers", error);
    }
  };

  const toggleFollow = async (trainerId) => {
    try {
      await API.post(`/users/follow/${trainerId}`);
      await fetchTrainers(); // 
    } catch (error) {
      alert("Error updating follow status");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      
      <section>
        <h2 className="text-2xl font-bold mb-4">
          All Trainers
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {allTrainers.map((trainer) => (
            <TrainerCard
              key={trainer._id}
              trainer={trainer}
              followed={followedTrainers.some(
                (t) => t._id === trainer._id
              )}
              toggleFollow={toggleFollow}
            />
          ))}
        </div>
      </section>

      {/* 🔹 FOLLOWED TRAINERS */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          My Trainers
        </h2>

        {followedTrainers.length === 0 ? (
          <p className="text-gray-500">
            You are not following any trainers yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {followedTrainers.map((trainer) => (
              <TrainerCard
                key={trainer._id}
                trainer={trainer}
                followed={true}
                toggleFollow={toggleFollow}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default FollowedTrainers;
