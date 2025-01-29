
const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400 mt-[-120px]">
      <div className="bg-purple-200 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
        <form>
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
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-white py-2 px-4 rounded hover:bg-green-500 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Don't have an account? <a href="/Register" className="text-red-400 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;