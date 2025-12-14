const PlanCard = ({ plan, subscribed, onSubscribe }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      {/* TITLE */}
      <h3 className="text-xl font-bold mb-1">{plan.title}</h3>

      {/* TRAINER NAME */}
      <p className="text-sm text-gray-500 mb-2">
        Trainer: <span className="font-medium">{plan.trainerId?.name}</span>
      </p>

      {/* PRICE */}
      <p className="text-lg font-semibold text-primary mb-3">
        ₹{plan.price}
      </p>

      {/* ACCESS CONTROLLED CONTENT */}
      {subscribed ? (
        <>
          {/* FULL DETAILS */}
          <p className="text-gray-700 mb-2">{plan.description}</p>

          <p className="text-sm text-gray-600 mb-4">
            Duration: {plan.duration}
          </p>

          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            ✅ Access Granted
          </span>
        </>
      ) : (
        <>
          {/* PREVIEW ONLY */}
          <p className="text-gray-400 italic mb-4">
            Subscribe to view full plan details
          </p>

          <button
            onClick={() => onSubscribe(plan._id)}
            className="btn w-full"
          >
            Subscribe
          </button>
        </>
      )}
    </div>
  );
};

export default PlanCard;
