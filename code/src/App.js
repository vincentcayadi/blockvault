import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

// App.js
function Hero() {
  return (
    <>
        <section class="bg-nord6 select-none font-mono subpixel-antialiased">
            <div class="containter flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <div class="flex flex-1 flex-col items-center ig:items-start p-10 justify-start">
                <h2 class="text-nord1 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 w-full">
                    Keep your data secure
                </h2>
                <p class="text-nord2 text-lg text-center lg:text-left mb-6">
                    Store your data securely on the decentralised Blockchain network
                    using Blockvault.
                </p>
                <Link class="subpixel-antialiased px-4 py-2 font-semibold text-xl bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300" to="Dashboard">
                    Enter App
                </Link>
                </div>
            </div>
        </section>
    </>
    );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function Dashboard() {
  return (
    <>
        <h1>
            Hi
        </h1>
    </>
    );
}

export default App;