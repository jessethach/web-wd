// Retrieving selected condition from local storage
var stowedCondition = localStorage.getItem('condition');
var condition = JSON.parse(stowedCondition);
console.log('unpackaged localstorage item is: ' + condition);
var runMe = condition.replace(/\s+/g, '');
console.log('The runMe name is now: ' + runMe);

// so revealCharity(6000) should bring up the charity info 6 seconds later
function revealCharity(timer) {
  this.timer = timer;
  function IDcrasher()  {
      var reveal = document.getElementById("hide");
      reveal.id = "show";
  };  // end of IDcrasher
  setTimeout(function() {
      IDcrasher();
  },timer);
};  // end of revealCharity



function PrintWords(where,what,timer) {
  this.where = where;
  this.what = what;
  this.timer = timer;
  setTimeout(function() {
    var wordsNode = document.createTextNode(what);
    where.appendChild(wordsNode);
    var linebreak = document.createElement("br");
    where.appendChild(linebreak);
  }, timer);
};  // end of PrintWords function

function PrintImage(where,what,timer) {
  this.where = where;
  this.what = what;
  this.timer = timer;
  setTimeout(function() {
    var imgElement = document.createElement('img');
    imgElement.src = what;
    where.appendChild(imgElement);
    var linebreak = document.createElement("br");
    where.appendChild(linebreak);
  }, timer);
};  // end of PrintImage function

function EmbarrassingSymptom()  {
      //console.log("Embarrassing Symptom has executed");
    var RightSpace = document.getElementById('resultRight');
    var LeftSpace = document.getElementById('resultLeft');
    var imgElement = document.createElement('img');
    imgElement.src = 'img/stern-doctor.jpg';
    LeftSpace.appendChild(imgElement);
    setTimeout(function() {
      var audio = new Audio('audio/MoneyPitLaughing.mp3');
      audio.play();
      }, 3000);
      var words = 'Oh dear that\'s certainly ...';
      PrintWords(RightSpace,words,0);
      words = 'I\'m uncertain if ... any ... ';
      PrintWords(RightSpace,words,2000);
      words = 'OMG That is crazy!!!';
      PrintWords(RightSpace,words,7000);
      words = 'Straight. To. Instagram!!';
      PrintWords(RightSpace,words,12000);
      words = 'I am so sorry but there really is nothing I can do to help you with THAT.';
      PrintWords(RightSpace,words,16000);
      words = 'I\'m not going to bill you for this session.';
      PrintWords(RightSpace,words,19000);
      words = 'Clearly you\'ve got enough problems!';
      PrintWords(RightSpace,words,21000);
      words = 'Please consider donating to Doctors Without Borders, their patients are mostly war refugees and the underprivledged ...';
      PrintWords(RightSpace,words,24000);
      words = 'People not quite as bad off as you!';
      PrintWords(RightSpace,words,27000);
      revealCharity(27000);
};  // end EmbarrassingSymptom function

function bald() {
  var RightSpace = document.getElementById('resultRight');
  var LeftSpace = document.getElementById('resultLeft');
  var imgElement = document.createElement('img');
  LeftSpace.appendChild(imgElement);
  var words = 'Oh wow, you weren\'t joking... This is very serious, and could be hazardous.';
  PrintWords(RightSpace,words,0);
  words = 'Your big shiny head could possibly blind random civilians.';
  PrintWords(RightSpace,words,2000);
  words = 'Please stay out of public for now, I\'m going to give you a very special prescription.';
  PrintWords(RightSpace,words,7000);
  PrintImage(LeftSpace,'img/hatPrescription.jpg',10000);
  words = 'May god have mercy on your soul...';
  PrintWords(RightSpace,words,12000);
  revealCharity(12000);
}; //end of bald function

function respiratory() {
  var RightSpace = document.getElementById('resultRight');
  var LeftSpace = document.getElementById('resultLeft');
  var imgElement = document.createElement('img');
  LeftSpace.appendChild(imgElement);
  var words = 'Oh wow, this is very serious.';
  PrintWords(RightSpace,words,1000);
  words = 'You seem to have gremlins.';
  PrintWords(RightSpace,words,2000);
  words = 'You\'ll need to take this prescription right away.';
  PrintImage(LeftSpace,'img/gremlinsPrescription.jpg',6000);
  PrintWords(RightSpace,words,4000);
  words = 'If you can\'t take the pills without water, you\'ll need to administer them through the other end...';
  PrintWords(RightSpace,words,8000);
  words = 'Good luck!';
  PrintWords(RightSpace,words,8000);
  revealCharity(8000);
}; //end of function




function rash() {
  var RightSpace = document.getElementById('resultRight');
  var LeftSpace = document.getElementById('resultLeft');
  var imgElement = document.createElement('img');
  LeftSpace.appendChild(imgElement);
  var words = 'I\'ve come up with an interesting theory...';
  PrintWords(RightSpace,words,2000);
  words = 'You\'ve contracted Spattergroit.';
  PrintWords(RightSpace,words,4000);
  words = 'Unfortunately there is only cure, and its not pleasant. I\'m writing the prescription now.';
  PrintWords(RightSpace,words,6000);
  PrintImage(LeftSpace,'img/spattergroitPrescription.jpg',8000);
  revealCharity(8000);
}; //end of rash function

function feet() {
  var RightSpace = document.getElementById('resultRight');
  var LeftSpace = document.getElementById('resultLeft');
  var imgElement = document.createElement('img');
  LeftSpace.appendChild(imgElement);
  var words = 'This is very serious. Your feet dont just stink, they\'re creating hazardous fumes.'
  PrintWords(RightSpace,words,2000);
  words = 'I\'ll need to write you a special prescription for this.';
  PrintWords(RightSpace,words,4000);
  PrintImage(LeftSpace,'img/feetPrescription.jpg',5000);
  words = 'Every day I\'ll need you to put these on your feet and secure them with tape.';
  PrintWords(RightSpace,words,6000);
  words = 'Good luck.';
  PrintWords(RightSpace,words,8000);
  revealCharity(8000);
}; //end of feet function


// this is where we need to actually call the function

function checkRunMe() {
  if (runMe == 'Lupus') {
  Lupus();
  }
  if (runMe == 'EmbarrassingSymptom')	{
	EmbarrassingSymptom();
  }

  if (runMe == 'Respiratory') {
  respiratory();
  }

  if (runMe == 'Feet') {
  feet();
  }

  if (runMe == 'Rash') {
  rash();
  }

  if (runMe == 'Balding') {
  bald();
	};

}; // end of checkRunMe

checkRunMe();
