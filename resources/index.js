const moods = [
"History has your back. Society stabs you in it. Use your talent like a weapon. Don't let convention confine you.", 
"Enjoy life today, go for a walk if necessary",
"Eat dessert before dinner. Wanting can be better than having", 
"Be angry if necessary today, but stop complaining! Just for today", 
"Unleash the beast within. Productivity, even in pajamas. Sketch boldly and paint with a big stick",
"The future is big, bright and shiny. Your balloon can't pop, but your Pop can balloon. Learn the difference between 'Camp' and 'Kitsch'.",
"If nothing else, be profilic. Choose to have as many styles as you do lovers. Make something worth impersonating",
"Go far to go far. Exaggerate the subtle. Share the unseen. Only an outsider sees inward.",
"Breathing is secondary - don't forget to think. A good manifesto is, foremost, legible. Reconsider your concept of small vs. big.",
"Go viral, not bacterical. A flattered client is a repeat client. Your personality can be as colourful as your canvas"];

function newMood() {
    let randomNumber = Math.floor(Math.random() * (moods.length));
    document.getElementById('moodDisplay').innerHTML = moods[randomNumber];
}

