const textBox = document.querySelector("input");
const label = document.querySelector("label");
const codeCrewString =
  "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";
const mayTheForceBeWithYou =
  "War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere. In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate. As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor...";
const freshPrince =
  "Now this is the story all about how my life got flipped-turned upside down, and I'd like to take a minute, just sit right there, I'll tell you how I became the prince of a town called Bel Air. In West Philadelphia, born and raised On the playground is where I spent most of my days. Chillin' out, maxin', relaxin all cool, And all shootin' some B-ball outside of the school.";
const strings = [codeCrewString, mayTheForceBeWithYou, freshPrince];
const button = document.querySelector("button");
let idx = 0;
let rand = Math.floor(Math.random() * strings.length);
textBox.addEventListener(
  "keydown",
  (handleKeyDown = (evt) => {
    if (idx < strings[rand].length) {
      label.innerText += `${strings[rand][idx]}`;
      idx++;
    }
  })
);
button.addEventListener(
  "click",
  (handleReset = (evt) => {
    label.innerText = "";
    textBox.innerText = "";
    rand;
  })
);
