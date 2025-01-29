
const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mt-[-120px] bg-green-400">
      <div className="bg-purple-200 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-white py-2 px-4 rounded hover:bg-green-500 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Already have an account? <a href="/Login" className="text-red-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
