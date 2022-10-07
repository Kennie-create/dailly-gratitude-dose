const positiveAffirmations = [
  "I am in the right place at the right time, doing the right thing - Louise Hay",
  "Make way for the unprecedented and watch your reality rearrange yourself - Yrsa Daley-Ward",
  "You are loved just for being who you are, just for existing - Ram Dass",
  "Make way for the unprecedented and watch your reality rearrange yourself - Yrsa Daley-Ward",
  "Affirmation 5",
  "Affirmation 6",
  "Affirmation 7",
];

const today = new Date();
const day = today.getDate();

const Affirmations = () => {
  return <h1>{positiveAffirmations[day - 1]}</h1>;
};

export default Affirmations;

