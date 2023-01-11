let quotes = [
  `"I'm not here to be perfect, I'm here to be real." - Lady Gaga`,
  `"I'm not interested in money. I just want to be wonderful." - Marilyn Monroe`,
  `"The only thing that feels better than winning is winning when nobody thought you could." - Hank Aaron`,
  `"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`,
  `"If you can dream it, you can do it." - Walt Disney`,
];
let button = document.getElementById('btn');
let output = document.getElementById('output')

button.addEventListener('click', () => {
  let randomquotes = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomquotes;

});
