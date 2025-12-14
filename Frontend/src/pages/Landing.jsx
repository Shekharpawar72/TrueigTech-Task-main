// import { Link } from "react-router-dom";

// const Landing = () => (
//   <div className="min-h-screen bg-linear-to-r from-emerald-100 to-emerald-300 flex items-center">
//     <div className="max-w-5xl mx-auto px-6 text-center">
//       <h1 className="text-5xl font-extrabold mb-6">
//         Transform Your Fitness Journey
//       </h1>
//       <p className="text-lg text-gray-700 mb-8">
//         Join expert trainers, follow plans, and achieve your goals.
//       </p>

//       <Link
//         to="/signup"
//         className="bg-primary text-white px-8 py-4 rounded-lg text-lg"
//       >
//         Get Started
//       </Link>
//     </div>
//   </div>
// );

// export default Landing;


import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-amber-100">

  
     
      <section
        id="home"
        className="min-h-[80vh] flex items-center justify-center text-center px-6"
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-800">
            Transform Your Fitness Journey
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Join expert trainers, follow personalized plans, and achieve your
            fitness goals faster.
          </p>

          <Link
            to="/signup"
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-emerald-700 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="bg-white py-20 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            About FitLife
          </h2>
          <p className="text-gray-600 text-lg">
            FitLife is a modern fitness platform that connects you with
            professional trainers, structured workout plans, and progress
            tracking tools. Whether your goal is weight loss, muscle gain, or
            staying active — FitLife helps you stay consistent and motivated.
          </p>
        </div>
      </section>

      {/* ================= PLANS ================= */}
      <section
        id="plans"
        className="bg-emerald-50 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Our Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <p className="text-gray-600 mb-6">
                Beginner workouts and basic fitness guidance.
              </p>
              <p className="text-3xl font-bold text-emerald-600 mb-4">
                ₹499/month
              </p>
              <Link
                to="/signup"
                className="block bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700"
              >
                Choose Plan
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-emerald-600">
              <h3 className="text-xl font-bold mb-4">Pro</h3>
              <p className="text-gray-600 mb-6">
                Personalized plans with trainer support.
              </p>
              <p className="text-3xl font-bold text-emerald-600 mb-4">
                ₹999/month
              </p>
              <Link
                to="/signup"
                className="block bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700"
              >
                Choose Plan
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-4">Premium</h3>
              <p className="text-gray-600 mb-6">
                1-on-1 coaching, diet plans & full support.
              </p>
              <p className="text-3xl font-bold text-emerald-600 mb-4">
                ₹1499/month
              </p>
              <Link
                to="/signup"
                className="block bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700"
              >
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-emerald-700 text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} FitLife. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
