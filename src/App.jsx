function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">Merizo</h1>

        <button className="bg-white text-black px-4 py-2 rounded-lg">
          Download
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-6 pt-16">

        <h1 className="text-5xl font-bold leading-tight">
          Split Expenses <br /> Smarter with AI
        </h1>

        <p className="text-gray-300 mt-6 max-w-md">
          Manage trips, rent, events and shared expenses
          easily with Merizo.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-blue-500 px-6 py-3 rounded-xl">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            Learn More
          </button>
        </div>

      </div>

    </div>
  );
}

export default App;