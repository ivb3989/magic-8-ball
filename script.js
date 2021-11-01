document.body.innerHTML = `
  <header>
    <h1>Magic 8 Ball</h1>
  </header>
  <div class="wrapper">
    <div class="form">
      <p class="label">Ask a question and get an answer:</p>
      <input type="text" id="input" />
      <button id="button">
        Shake
      </button>
    </div>
    <div class="eight-ball">
      <div class="blur"></div>
      <div class="answer color">
        <p id="eight">8</p>
        <p id="answer"></p>
      </div>
    </div>
  </div>
`;
let options = [
  "It is certain", "Yes",
  "As I see it, yes", "Outlook not so good",
  "Signs point to yes", "My sources say no",
  "You may rely on it", "Very doubtful",
  "Better not tell you now", "Cannot predict now",
  "It is decidedly so", "Reply hazy, try again",
  "My reply is no", "Most likely",
  "Ask again later", "Concentrate and ask again",
  "Yes - definitely", "Don't count on it",
  "Outlook good",
];
button.addEventListener("click", function () {
  if (input.value.length < 1) {
    eight.innerText = "8";
    answer.innerText = "";
    eight.classList.add("shake");
    setTimeout(() => {
      eight.classList.remove("shake");
    }, 150);
  } else {
    eight.innerText = "";
    let num = Math.round(Math.random()*options.length);
    answer.innerText = options[num];
  }
});