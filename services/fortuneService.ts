import { FortuneResponse } from "../types";

// Comprehensive list of fortunes for Offline Mode
const FORTUNES = [
  "Good news is coming your way.",
  "A lucky moment arrives soon.",
  "Trust your next wild idea.",
  "A small risk pays off big.",
  "You will meet a new ally today.",
  "Today brings unexpected clarity.",
  "Your patience is about to reward you.",
  "Something you lost will be found.",
  "A pleasant surprise is waiting for you.",
  "Your creativity will solve a problem.",
  "An old friend will contact you.",
  "Happiness is just around the corner.",
  "Your hard work will soon pay off.",
  "A new perspective will bring peace.",
  "Adventure is in your near future.",
  "The best is yet to come.",
  "Believe in yourself and others will too.",
  "You are capable of great things.",
  "A smile is your best accessory today.",
  "Don't be afraid to take the scenic route.",
  "Your kindness will lead to success.",
  "A thrilling opportunity is ahead.",
  "Listen to your intuition today.",
  "You will conquer your obstacles.",
  "Great things take time.",
  "Your energy attracts your tribe.",
  "Focus on the present moment.",
  "A dream you have will come true.",
  "You are stronger than you know.",
  "Simplicity is the key to happiness.",
  "Travel is in your future.",
  "You will make a difference.",
  "Accept the next invitation you get.",
  "Luck favors the prepared mind.",
  "Your talents will be recognized.",
  "Embrace change; it brings growth.",
  "A small act of kindness goes a long way.",
  "You are exactly where you need to be.",
  "New beginnings are on the horizon.",
  "Your potential is limitless.",
  "Seek balance in all things.",
  "Joy is found in the little things.",
  "You are loved more than you know.",
  "Forgive yourself and move forward.",
  "Your wisdom is growing daily.",
  "Success is a journey, not a destination.",
  "Share your light with the world.",
  "A financial bonus is possible.",
  "Romantic gestures are incoming.",
  "Peace begins with a smile.",
  "Your past does not define your future.",
  "A new friendship will bring joy.",
  "Trust the timing of your life.",
  "Your bold spirit will lead you far.",
  "Opportunity knocks when you least expect it.",
  "Kindness costs nothing but means everything."
];

export const generateFortune = async (): Promise<FortuneResponse> => {
  // Simulate a random selection from the local library
  const randomIndex = Math.floor(Math.random() * FORTUNES.length);
  
  return {
    text: FORTUNES[randomIndex],
    luckyNumbers: generateLuckyNumbers()
  };
};

const generateLuckyNumbers = (): number[] => {
  const numbers: number[] = [];
  while (numbers.length < 5) {
    const num = Math.floor(Math.random() * 99) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers.sort((a, b) => a - b);
};