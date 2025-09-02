import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavLink } from "react-router";
// import { Card, Navbar } from "vivaui";
import { Card } from "@vivaui/card";
import { Navbar } from "@vivaui/navbar";
// import "@vivaui/card/dist/index.css";
// import "@vivaui/navbar/dist/index.css";
 import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0);
  const notify = () => toast("Wow so easy!");

  return (
    <>
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
      <Navbar
        brand={<span className="font-bold text-xl mr-2">MyApp </span>}
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        rightSlot={
          <button className=" !bg-blue-600 text-white px-4 py-2 rounded ml-[5px]">
            Login
          </button>
        }
        className="shadow-md mb-7"
      />
      <Card
        title="Hello World"
        subtitle="This is a test card"
        elevation={2}
        size="md"
        className=" !bg-orange-500"
      >
        <p>Card body content goes here.</p>
      </Card>
      <div className="flex justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card flex flex-col">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <NavLink to="/onboarding" end>
        <button className=" hover:!bg-orange-600 active:!bg-orange-200 mt-2 rounded px-2 py-2 !bg-orange-400 text-white">
          {" "}
          Got to tooltip onboarding example{" "}
        </button>
      </NavLink>
    </>
  );
}

export default App;
