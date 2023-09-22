import "./App.css";
import { useState } from "react";
import Affirmations from "./Affirmations.jsx";
import Layout from "./Layout.jsx";
import React from "react";

const todaysDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  return `${month} ${day}${dayEnding(day)}, ${year}`;
};

const dayEnding = (day) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

function App() {
  const [welcomePage, setWelcomePage] = useState(true);

  function dailyDosePage() {
    setWelcomePage(false);
  }

  function returnToWelcomePage() {
    setWelcomePage(true);
  }

  if (welcomePage) {
    return (
      <React.Fragment>
        <div className="test-image">
          <img src="Images/new-flower.png" className="flower-image" alt="" />
        </div>

        <Layout>
          <h1> Your gratitude dose for {todaysDate()} </h1>
          <button onClick={dailyDosePage} className="button-font">
            {" "}
            Reveal{" "}
          </button>
        </Layout>
      </React.Fragment>
    );
  } else {
    return (
      <Layout>
        <Affirmations />
        <button onClick={returnToWelcomePage} className="button-font">
          {" "}
          Done{" "}
        </button>
      </Layout>
    );
  }
}

export default App;
