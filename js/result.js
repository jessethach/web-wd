// Retrieving selected condition from local storage
var stowedCondition = localStorage.getItem('condition');
var condition = JSON.parse(stowedCondition);
console.log('unpackaged localstorage item is: ' + condition);
var runMe = condition.replace(/\s+/g, '');
console.log('The runMe name is now: ' + runMe);

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
};  // end EmbarrassingSymptom function




























// this is where we need to actually call the function

function checkRunMe() {
  if (runMe == 'Lupus') {
  Lupus();
  }
  if (runMe == 'EmbarrassingSymptom')	{
	EmbarrassingSymptom();
  }

  if (runMe == 'Respiratory') {
  Respiratory();
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