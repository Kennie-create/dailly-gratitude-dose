import "./App.css";
import { useState } from "react";
import Affirmations from "./Affirmations.jsx"

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
        <div class="title-and-button">
        <h1> Your daily dose of gratitude awaits </h1>
        <button onClick={dailyDosePage} class="button-font"> Open </button>
        </div>
      </main>
    );
  } else {
    return (
      <main class="full-height background-violet">
       <Affirmations/>
        <button onClick={returnToWelcomePage} class="button-font"> Finish </button>
      </main>
    );
  }


}

export default App;
