const TrainerCard = ({ trainer, followed, toggleFollow }) => (
  <div className="bg-white p-4 rounded shadow flex justify-between items-center">
    <span className="font-semibold">{trainer.name}</span>

    <button
      onClick={() => toggleFollow(trainer._id)}
      className={`px-4 py-1 rounded ${
        followed ? "bg-red-500" : "bg-primary"
      } text-white`}
    >
      {followed ? "Unfollow" : "Follow"}
    </button>
  </div>
);

export default TrainerCard;
