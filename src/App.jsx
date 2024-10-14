function App() {
  return (
    <main className="max-w-4xl mx-auto py-20 min-h-screen">
      <header className="flex">
        <div className="mr-8">
          <h1 className="font-extrabold text-6xl">
            Look For <span className="text-orange-300 uppercase">Banger</span>
            Food
          </h1>
          <p className="mt-8 leading-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nam
            nisi id excepturi ab expedita nobis nesciunt quos unde nostrum.
          </p>
          <div className="mt-10">
            <input
              type="text"
              placeholder="Find a recipe..."
              className="py-3 px-4 text-xl shadow-sm border-none"
            />
            <button className="bg-green-600 py-3 px-4 text-white font-bold text-xl w-36 border-none rounded-full ml-2">
              Search
            </button>
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4CL_Q7wTnmibeYHQTq4rXb9VcQnM6fxKDA&s"
          className="w-[600px] cover rounded-3xl"
        />
      </header>
      <section className="mt-[100px]">
        <div className="w-[275px] cover rounded-3xl bg-white overflow-hidden  shadow-2xl shadow-gray-700">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCE-ZmH20TpGVBXpHOmZnhAIPUiW6JnXFvww&s"
              className="w-full h-[350px]"
            />
          </div>
        </div>
        <div className="p-2">
          <h1>title</h1>
        </div>
        <div>
          <p>healthy Eating</p>
          <p>30 mins</p>
        </div>
      </section>
    </main>
  )
}

export default App
