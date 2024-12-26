import naruto from "../assets/1.jpg";
import minato from "../assets/2.jpg";
import sasuke from "../assets/3.jpg";
import kakashi from "../assets/4.jpg";
import itachi from "../assets/5.jpg";
import obito from "../assets/6.jpg";
import madara from "../assets/7.jpg";
import tsunade from "../assets/8.jpg";
import shikimaru from "../assets/9.jpg";
import gara from "../assets/10.jpg";
import orochimaru from "../assets/11.jpg";
import lee from "../assets/12.jpg";
import sakura from "../assets/13.jpg";
import jiraya from "../assets/14.jpg";
import guy from "../assets/15.jpg";
import hashirama from "../assets/16.jpg";
import tobirama from "../assets/17.jpg";
import pain from "../assets/18.jpg";

export type Character = {
  name: string;
  image: string;
  solved: boolean;
};

export const characterList: Character[] = [
  { name: "Naruto", image: naruto, solved: false },
  { name: "Minato", image: minato, solved: false },
  { name: "Sasuke", image: sasuke, solved: false },
  { name: "Kakashi", image: kakashi, solved: false },
  { name: "Itachi", image: itachi, solved: false },
  { name: "Obito", image: obito, solved: false },
  { name: "Madara", image: madara, solved: false },
  { name: "Tsunade", image: tsunade, solved: false },
  { name: "Shikimaru", image: shikimaru, solved: false },
  { name: "Gara", image: gara, solved: false },
  { name: "Orochimaru", image: orochimaru, solved: false },
  { name: "Lee", image: lee, solved: false },
  { name: "Sakura", image: sakura, solved: false },
  { name: "Jiraya", image: jiraya, solved: false },
  { name: "Guy", image: guy, solved: false },
  { name: "Hashirama", image: hashirama, solved: false },
  { name: "Tobirama", image: tobirama, solved: false },
  { name: "Pain", image: pain, solved: false },
];

export const getAllCharacters = () => {
  return shuffleArray([...characterList, ...characterList]);
};

const shuffleArray = (array: Character[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
