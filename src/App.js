import "./App.css";
import { useState } from "react";
import Affirmations from "./Affirmations.jsx";
import Layout from "./Layout.jsx"

const todaysDate = () => {
  return ("today")
}

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
      <Layout>
        <h1> Your gratitude dose for {todaysDate()} </h1>
        <button onClick={dailyDosePage} className="button-font">
          {" "}
          Open{" "}
        </button>
      </Layout>
    );
  } else {
    return (
      <Layout>
       <Affirmations/>
        <button onClick={returnToWelcomePage} className="button-font"> Finish </button>
      </Layout>
    );
  }


}

export default App;
