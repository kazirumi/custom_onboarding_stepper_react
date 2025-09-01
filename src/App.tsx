import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Overlay from "./component/shared/Overlay";
import { usePreview } from "./hooks/usePreview";
import HighlightedCardWrapper from "./component/shared/HiglightedCardWrapper";

function App() {
  const [count, setCount] = useState(0);

  const { isHighlight, setIsHighlight, setHighlightSection } = usePreview();

  useEffect(() => {
    setIsHighlight(true);
    setHighlightSection('first');
    return () => {};
  }, []);

  function closeOverlay(value: boolean) {
    setIsHighlight(value);
  }
  return (
    <>
      <HighlightedCardWrapper sectionName="first">
        <div className="flex justify-center">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </HighlightedCardWrapper>
      <h1>Vite + React</h1>
      <div className="card z-[99999]">
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
      <Overlay isHighlight={isHighlight} setIsHighlight={closeOverlay} />
    </>
  );
}

export default App;
