import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { usePreview } from "../hooks/usePreview";
import HighlightedCardWrapper from "../component/shared/HiglightedCardWrapper";
import Tooltip from "../component/shared/Tooltip";
import Overlay from "../component/shared/Overlay";


function App() {
  const [count, setCount] = useState(0);

  const { isHighlight, setIsHighlight, setHighlightSection } = usePreview();

  useEffect(() => {
    setIsHighlight(true);
    setHighlightSection("first");
    return () => {};
  }, []);

//   function closeOverlay(value: boolean) {
//     setIsHighlight(value);
//   }

  const handleTooltipButtonClick = () => {
    console.log("Tooltip button clicked!");
    // You can add your logic here, like moving to next step
    setHighlightSection("second");
  };
  return (
    <>
      <HighlightedCardWrapper
        sectionName="first"
        tooltip={
          <Tooltip
            title="Welcome to React + Vite!"
            message="This is your development environment. Click on the logos above to learn more about these powerful tools for building modern web applications."
            buttonText="Next"
            position="left"
            showArrow={true}
            onButtonClick={handleTooltipButtonClick}
            className="top-[100px]"
          />
        }
      >
        <div className="flex justify-center">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </HighlightedCardWrapper>
      <div className="h-[700px]"></div>
      <HighlightedCardWrapper
        sectionName="second"
        tooltip={
          <Tooltip
            title="Welcome to React + Vite!"
            message="This is your development environment. Click on the logos above to learn more about these powerful tools for building modern web applications."
            buttonText="Finish"
            position="top"
            showArrow={true}
            onButtonClick={() => {
              setIsHighlight(false);
              setHighlightSection("");
            }}
          />
        }
      >
        <div className="card flex flex-col">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
           <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
           <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
           <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
           <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </HighlightedCardWrapper>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Overlay isHighlight={isHighlight} />
    </>
  );
}

export default App;
