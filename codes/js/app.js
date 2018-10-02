let userInput = "";
let score = 0;
let index = 0;
let counter = 1;
let userAnswers = [];
let time = 30;
let arrayLogo = ['Apple', 'Nasa', 'YellowPages', 'LouisV', 'Xbox', 'Target', 'Dominos', 'Porsche', 'BP', 'Microsoft', 'Pepsi', 'Reddit', 'Lexus', 'Versace', 'Lays', 'Firefox', 'Lambo', 'Nike', 'Starbucks',
'Blackberry', 'Subaru', 'CartoonNetwork', 'Jagermeister', 'Bridgestone', 'BMW', 'BestBuy', 'Uber', 'Bacardi', 'StellaArtois', 'QuakerOats' ];

//--When logo is clicked, modal pops up to answer question
for(let i = 0; i < arrayLogo.length; i++) {
$('#' + arrayLogo[i]).on('click', () => {

  let Answer = $('#' + arrayLogo[i]).attr('id');
  console.log(Answer);
  $('.answer').text(Answer);
  $('#' + Answer).remove();
})
}





// const logos = [
//   {
//     brand: "Apple",
//     logo: "logos/apple.png"
//   }, {
//     brand: "Nasa",
//     logo: "logos/nasa.jpg"
//   }, {
//     brand: "Yellow Pages",
//     logo: "logos/yellow-pages.gif"
//   }, {
//     brand: "Louis Vuitton",
//     logo: "logos/lv.jpg"
//   }, {
//     brand: "Xbox",
//     logo: "logos/xbox.jpg"
//   }, {
//     brand: "Target",
//     logo: "logos/target.jpg"
//   }, {
//     brand: "Dominos",
//     logo: "logos/dominos.gif"
//   }, {
//     brand: "Porsche",
//     logo: "logos/porsche.png"
//   }, {
//     brand: "BP",
//     logo: "logos/bp.jpg"
//   }, {
//     brand: "Microsoft",
//     logo: "logos/microsoft.jpg"
//   }, {
//     brand: "Pepsi",
//     logo: "logos/pepsi.png"
//   }, {
//     brand: "Reddit",
//     logo: "logos/reddit.png"
//   }, {
//     brand: "Lexus",
//     logo: "logos/lexus.jpg"
//   }, {
//     brand: "Versace",
//     logo: "logos/versace.jpg"
//   }, {
//     brand: "Lays",
//     logo: "logos/lays.jpg"
//   }, {
//     brand: "Firefox",
//     logo: "logos/firefox.jpg"
//   }, {
//     brand: "Lambo",
//     logo: "logos/lambo.jpg"
//   }, {
//     brand: "Nike",
//     logo: "logos/nike.jpg"
//   }, {
//     brand: "Starbucks",
//     logo: "logos/starbucks.jpg"
//   }, {
//     brand: "Blackberry",
//     logo: "logos/blackberry.jpg"
//   }, {
//     brand: "Subaru",
//     logo: "logos/subaru.jpg"
//   }, {
//     brand: "Cartoon Network",
//     logo: "logos/cartoon-network.jpg"
//   }, {
//     brand: "Jagermeister",
//     logo: "logos/jagermeister.jpg"
//   }, {
//     brand: "Bridgestone",
//     logo: "logos/bridgestone.jpg"
//   }, {
//     brand: "BMW",
//     logo: "logos/bmw.jpg"
//   }, {
//     brand: "Best Buy",
//     logo: "logos/bestbuy.gif"
//   }, {
//     brand: "Uber",
//     logo: "logos/uber.jpg"
//   }, {
//     brand: "Bacardi",
//     logo: "logos/bacardi.jpg"
//   }, {
//     brand: "Stella Artois",
//     logo: "logos/stella-artois.png"
//   }, {
//     brand: "Quaker Oats",
//     logo: "logos/quaker-oats.gif"
//   }
// ];
// console.log(logos[index].logo);
//
// console.log(logos)

// let showCards = function() {
//
//   for (let i = 0; i < logos.length; i++) {
//     let imgElement = document.createElement('img')
//     imgElement.src = logos[i].logo;
//     console.log(imgElement);
//     $('table').append(imgElement)
//   }
//   $('img').css({
//     'height' : '80px',
//     'width' : '100px',
//     'border' : '1px solid black',
//     'margin' : '5px',
//     'padding' : '5px'
//   });
//   $('table').css({
//     'border' : '5px solid black',
//     'max-width' : '800px',
//     'max-height' : '500px',
//     'float' : 'right',
//   })
// }
//
// showCards();

// $('.brandLogo').on('click', () => {
//   for (i=0;i<table.length;i++)
//   console.log(logos[i].brand)
// })

// Checking for Correct answers




// Creating the Timer
const setTimer = () => {
  const timer = setInterval(() => {
    console.log(time);

  $('#timer').text('Timer: ' + time + 's');
    //console.log(logTime);
    time--;

    if(time === 0) {
      clearInterval(timer);
      console.log('GAME OVER');
      // $('#timer').text('Timer: ' + time + 's');
    }
  }, 1000);
}

//--Clicking images
$('.startBtn').on('click', () => {
  setTimer();
  const userName = $('#userNameInput').val();
	$('#userDisplay').html('Welcome, ' + userName + '!');
});


$('.submitAnswer').on('click', () => {
  const logoName = $('.answers').val();
  console.log(logoName);
  checkCorrectAnswer;

  // if(logoName === ) {
  //   return true;
  // }
})
const checkCorrectAnswer = (Answer) => {
  if('Answer' === 'logoName') {
    console.log('Correct')
  } else {
    console.log('Wrong')
  }
}
