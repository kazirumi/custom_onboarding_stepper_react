import { useEffect, useState } from "react";
import { usePreview } from "../hooks/usePreview";
import HighlightedCardWrapper from "../component/shared/HiglightedCardWrapper";
import Tooltip from "../component/shared/Tooltip";
import Overlay from "../component/shared/Overlay";
import bgImage from "../assets/heroSection.png";

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
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="inline-flex justify-center w-fit mx-auto">
          <HighlightedCardWrapper
            sectionName="first"
            tooltip={
              <Tooltip
                title="Spend like a hero"
                message="Browse games, visit their shops, and buy items with Gold"
                buttonText="Next"
                position="bottom-left"
                showArrow={true}
                onButtonClick={handleTooltipButtonClick}
                className=""
              />
            }
            className=" bg-red-500 flex mt-[200px]"
          >
            {/* <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a> */}
            <h1>Vite + React</h1>
          </HighlightedCardWrapper>
        </div>
        <div className="h-[700px]"></div>
        <HighlightedCardWrapper
          sectionName="second"
          tooltip={
            <Tooltip
              title="Spend like a hero"
              message="Browse games, visit their shops, and buy items with Gold"
              buttonText="Finish"
              position="top"
              showArrow={true}
              onButtonClick={() => {
                setIsHighlight(false);
                setHighlightSection("");
              }}
            />
          }
          className=" mx-auto !w-fit"
        >
          <div className="inline">
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
          </div>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </HighlightedCardWrapper>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div className="h-[500px]"></div>
        <Overlay isHighlight={isHighlight} />
      </div>
    </>
  );
}

export default App;
