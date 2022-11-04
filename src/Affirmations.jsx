const positiveAffirmations = [
  "I am in the right place at the right time, doing the right thing - Louise Hay",
  "Make way for the unprecedented and watch your reality rearrange yourself - Yrsa Daley-Ward",
  "You are loved just for being who you are, just for existing - Ram Dass",
  "I feed my spirit. I train my body. I focus my mind. This is my time - Unknown",
  "I am healing and strengthening every day - Unknown",
  "One day at a time...and life becomes sublime - Louise Hay",
  "Today I will be pleasantly surprised. I am free to make my own choices and decisions - Nicholas Mag",
  "I am not pushed by my problems, I am led by my dreams - Unknown",
  "Never attack. By attacking, all understanding is lost. Express love - Lynn Borenius Brown",
  "I breathe in love and flow with life - Louis L Hay",
  "I live in the present and am confident in the future - Unknown",
  "My growth is entwined with my positive state of mind - Jennifer Williamson",
  "I choose healthy, supportive, and nourishing reactions - Brook Noel",
  "Note to self: I am going to make you so proud - Unknown",
  "I reject all feelings of low self-esteem. I reject all feelings of low self-worth - Ashlynn Fields",
  "Happiness is a choice, and today I choose to be happy - Unknown",
  "What I have done today was the best I was able to do today. And for that, I am thankful - Unknown",
  "My positive attitude, confidence and hard work draws in new opportunities - Nicholas Mag",
  "I have made mistakes, but I will not let them define me - Unknown",
  "I choose to change my challenges to opportunities - Dr. Purushothaman",
  "When I open my heart, my mind is free - Ani Trime",
  "I can and I will - Unknown",
  "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make, makes you. Choose wisely - Roy Bennett",
  "Nothing can dim the light that shines from within - Maya Angelou",
  "Be happy with what you have while working for what you want - Helen Keller",
  "I see failures as stepping stones - Albert Einstein",
  "We must accept finite disappointment, but never lose infinite hope - Martin Luther King Jr",
  "Loving others is easy when I love and accept myself - Louise Hay",
  "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty - Maya Angelou",
  "Not everything that is faced can be changed, but nothing can be changed until it is faced - James Baldwin",
  "I approve of myself and love myself deeply and completely - Unknown",
];

const today = new Date();
const day = today.getDate();

const Affirmations = () => {
  return <h1>{positiveAffirmations[day - 1]}</h1>;
};

export default Affirmations;
