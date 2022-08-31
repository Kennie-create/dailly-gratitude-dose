import "./App.css";
import { useState } from "react";

function App() {

  const [welcomePage, setWelcomePage] = useState(true);

  function dailyDosePage() {
    setWelcomePage(false);
  }

  function returnToWelcomePage(){
    setWelcomePage(true);
  }

  if (welcomePage) {
    return (
      <main class="full-height background-violet">
        <h1> Your daily dose of gratitude awaits </h1>
        <button onClick={dailyDosePage}> Reveal </button>
      </main>
    );
  } else {
    return (
      <main class="full-height background-violet">
        <h1>
          "I am in the right place at the right time, doing the right thing" -
          Louise Hay{" "}
        </h1>
        <button onClick={returnToWelcomePage}> Finish </button>
      </main>
    );
  }
}

export default App;
