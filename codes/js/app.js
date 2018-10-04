let userInput = "";
let score = 0;
let index = 0;
let counter = 1;
let userAnswers = [];
let time = 30;
var arrayOfIcons = ["logos/apple.png", "logos/nasa.jpg", "logos/firefox.jpg", "logos/nike.jpg", "logos/xbox.jpg", "logos/lays.jpg", "logos/dominos.gif", "logos/porsche.png", "logos/bp.jpg", "logos/microsoft.jpg", "logos/bacardi.jpg", "logos/bestbuy.gif", "logos/blackberry.jpg", "logos/bmw.jpg", "logos/bridgestone.jpg", "logos/jagermeister.jpg", "logos/lambo.jpg", "logos/lexus.jpg", "logos/pepsi.png",
  "logos/lv.jpg",
  "logos/cartoon-network.jpg", "logos/quaker-oats.gif", "logos/reddit.png", "logos/starbucks.jpg", "logos/stella-artois.png", "logos/subaru.jpg", "logos/target.jpg", "logos/uber.jpg", "logos/versace.jpg", "logos/yellow-pages.gif"
];

var correctAnswers = ["apple", "nasa", "firefox", "nike", "xbox", "lays", "dominos", "porsche", "bp", "microsoft", "bacardi", "bestbuy", "blackberry", "bmw", "bridgestone", "jagermeister", "lambo", "lexus", "pepsi",
  "louis vuitton", "cartoon network", "quaker oats", "reddit", "starbucks", "stella artois", "subaru", "target", "uber", "versace", "yellow pages"
];



function startGame() {
  document.getElementById("beforeGame").style.display = "none";
  document.getElementById("inGame").style.display = "inline";
  document.getElementById("guessbox").focus();
  $('#inGame').append('<img id="image" src=' + arrayOfIcons.shift() + '>');

}

function submit() {
  userAnswers.push(document.getElementById("guessbox").value.replace(/\s+/g, '').toLowerCase());
  if (arrayOfIcons.length === 0) {
    endGame();
  }
  document.getElementById("guessbox").value = "";
  document.getElementById("guessbox").focus();

  counter++;
  console.log(counter);

  $('#image').remove();
  $('#inGame').append('<img id="image" src=' + arrayOfIcons.splice(Math.floor(Math.random() * arrayOfIcons.length), 1) + '>');
}

function endGame() {
  var score = 0;
  var missedAnswers = [];
  for (var i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] == correctAnswers[i]) {
      score++;
    } else {
      missedAnswers.push(" " + correctAnswers[i]);
    }
  }
  document.getElementById("score").innerHTML = score + " / " + correctAnswers.length;
  if (score < correctAnswers.length) {
    document.getElementById("missed").innerHTML = "(In case you were wondering, you missed: " + missedAnswers + ")";
  }
  document.getElementById("inGame").style.display = "none";
  document.getElementById("afterGame").style.display = "inline";
}

document.getElementById("playBtn").onclick = function() {
  startGame()
};
document.getElementById("submitBtn").onclick = function() {
  submit();
};
document.getElementById("guessbox")
  .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      document.getElementById("submitBtn").click();
    }
  });


///////////////////////////////////////////////////////////
// Creating the Timer
const setTimer = () => {
  const timer = setInterval(() => {
    console.log(time);

    $('#timer').text('Timer: ' + time + 's');
    //console.log(logTime);
    time--;
    if (time < 10) {
      $('tag').css({
        "font-color": "red",
        "font-size": "75px"
      });
    }

    if (time === 0) {
      clearInterval(timer);
      alert('Good Game!!!');
      // $('#timer').text('Timer: ' + time + 's');
    }
  }, 1000);
}

//--Logging username and starting timer of game
$('#playBtn').on('click', () => {
  setTimer();
  const userName = $('#userNameInput').val();
  $('#userDisplay').html('Welcome, ' + userName + '!');
});
