var userInput = "";
var score = 0;
var index = 0;
let time = 30;


var logos = [
  {
    brand: "Apple",
    logo: "logos/apple.png"
  }, {
    brand: "Nasa",
    logo: "logos/nasa.jpg"
  }, {
    brand: "Yellow Pages",
    logo: "logos/yellow-pages.gif"
  }, {
    brand: "Louis Vuitton",
    logo: "logos/lv.jpg"
  }, {
    brand: "Xbox",
    logo: "logos/xbox.jpg"
  }, {
    brand: "Target",
    logo: "logos/target.jpg"
  }, {
    brand: "Dominos",
    logo: "logos/dominos.gif"
  }, {
    brand: "Porsche",
    logo: "logos/porsche.png"
  }, {
    brand: "BP",
    logo: "logos/bp.jpg"
  }, {
    brand: "Microsoft",
    logo: "logos/microsoft.jpg"
  }, {
    brand: "Pepsi",
    logo: "logos/pepsi.png"
  }, {
    brand: "Reddit",
    logo: "logos/reddit.png"
  }, {
    brand: "Lexus",
    logo: "logos/lexus.jpg"
  }, {
    brand: "Versace",
    logo: "logos/versace.jpg"
  }, {
    brand: "Lays",
    logo: "logos/lays.jpg"
  }, {
    brand: "Firefox",
    logo: "logos/firefox.jpg"
  }, {
    brand: "Lambo",
    logo: "logos/lambo.jpg"
  }, {
    brand: "Nike",
    logo: "logos/nike.jpg"
  }, {
    brand: "Starbucks",
    logo: "logos/starbucks.jpg"
  }, {
    brand: "Blackberry",
    logo: "logos/blackberry.jpg"
  }, {
    brand: "Cartoon Network",
    logo: "logos/cartoon-network.jpg"
  }, {
    brand: "Jagermeister",
    logo: "logos/jagermeister.jpg"
  }, {
    brand: "Bridgestone",
    logo: "logos/bridgestone.jpg"
  }, {
    brand: "BMW",
    logo: "logos/bmw.jpg"
  }, {
    brand: "Best Buy",
    logo: "logos/bestbuy.gif"
  }, {
    brand: "Uber",
    logo: "logos/uber.jpg"
  }, {
    brand: "Bacardi",
    logo: "logos/bacardi.jpg"
  }, {
    brand: "Stella Artois",
    logo: "logos/stella-artois.png"
  }, {
    brand: "Quaker Oats",
    logo: "logos/quaker-oats.gif"
  }, {
    brand: "Subaru",
    logo: "logos/subaru.jpg"
  }
];
console.log(logos[index].logo);

console.log(logos)

let showCards = function() {

  for (let i = 0; i < logos.length; i++) {
    let imgElement = document.createElement('img')
    imgElement.src = logos[i].logo;
    console.log(imgElement);
    $('table').append(imgElement)
  }
  $('img').css({
    'height' : '80px',
    'width' : '100px',
    'border' : '1px solid black',
    'margin' : '5px',
    'padding' : '5px'
  });
  $('table').css({
    'border' : '5px solid black',

  })
}

showCards();


// Creating the Timer
const setTimer = () => {
  const timer = setInterval(function() {
    console.log(time);
    time--;

    if(time === 0) {
      clearInterval(timer);
      console.log('GAME OVER');
      $('#round').text('round ' + round);
    }
  }, 1000);
}
