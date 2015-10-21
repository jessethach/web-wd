
// this should be common to eval and results page
// first we get the item from local storage and call it stowedCondition
var stowedCondition = localStorage.getItem('condition');
// next we parse it to remove the stringify thing we did and call it condition
var condition = JSON.parse(stowedCondition);
// we check to see what the condition is called so looks like 'Eyes On Fire' or 'Lupus'
console.log('unpackaged localstorage item is: ' + condition);
// take all the spaces out of the condition so looks like 'EyesOnFire' or 'Lupus'
var runMe = condition.replace(/\s+/g, '');
// check to see what condition looks like without any spaces
console.log('The runMe name is now: ' + runMe);

// now search through localstorage the conditionIndex and check if lupus matches anything, if it does then run corresponding function

// window.onload = function() {
//  runMe+();
// }

// so we will get a condition called 'Eyes Falling Out'
// we want to run a function called EyesFallingOut

// so how to run a string as a function


function Lupus()  {
  console.log("Lupus Function has been triggered");
  var eval1space = document.getElementById('eval1');
  var eval2space = document.getElementById('eval2');
  var eval3space = document.getElementById('eval3');
  function LupusPhaseOne()  {
    var words = 'Behold I am the phase one function of Lupus';
    var wordsNode = document.createTextNode(words);
    eval1space.appendChild(wordsNode);
  } // end of LupusPhaseOne
  function LupusPhaseTwo()  {
    var words = 'And I am the very model of a modern major general';
    var wordsNode = document.createTextNode(words);
    eval2space.appendChild(wordsNode);
  } // end of LupusPhaseTwo
  function LupusPhaseThree()  {
    var img = document.createElement("img");
    eval3space.appendChild(img);
    img.src = '/home/jared/b34/web-wd/img/logo.png';
  } // end of LupusPhaseThree
  function LupusExit()  {
    window.location.href = "results.html";
  }
setTimeout(function() {
    LupusPhaseOne();
}, 0);
setTimeout(function() {
    LupusPhaseTwo();
}, 3000);
setTimeout(function() {
    LupusPhaseThree();
}, 6000);
setTimeout(function() {
  LupusExit();
}, 9000);
};  // end of Lupus function

function PrintWords(where,what,timer)	{
	this.where = where;
	this.what = what;
	this.timer = timer;
	settimeout(function()	{
		var wordsNode = document.createTextNode(what);
		where.appendChild(wordsNode);
		var linebreak = document.createElement("br");
		where.appendChild(linebreak);
	}, timer);
};	// end of PrintWords function

function EmbarrassingSymptom()  {
  console.log("Embarrassing Symptom has been triggered");
  var eval1space = document.getElementById('eval1');
  	setTimeout(function() {
	  	var words = 'Hello there!';
	  	PrintWords(eval1space,words);
	  	}, 2000);
  	setTimeout(function() {
	  	words = 'My name is Doctor Clayton, I\'ll be your online physician.';
	  	PrintWords(eval1space,words);
	  	}, 4000);
  	setTimeout(function() {
	  	words = 'My name is Doctor Clayton, I\'ll be your online physician.';
	  	PrintWords(eval1space,words);
	  	}, 8000);
  	setTimeout(function() {
	  	words = 'My name is Doctor Clayton, I\'ll be your online physician.';
	  	PrintWords(eval1space,words);
	  	}, 12000);

  function EmbarrassingSymptom2()  {
	    var words = 'And I am the very model of a modern major general';
	    var wordsNode = document.createTextNode(words);
	    eval2space.appendChild(wordsNode);
	  	} // end of EmbarrassingSymptomPhaseTwo
  function EmbarrassingSymptom3()  {
	    var img = document.createElement("img");
	    eval3space.appendChild(img);
	    img.src = '/home/jared/b34/web-wd/img/logo.png';
	  	} // end of EmbarrassingSymptomPhaseThree
  function EmbarrassingSymptomX()  {
	  	debugger;
	    window.location.href = "results.html";
	  	}

};  // end of EmbarrassingSymptom


if (runMe == 'Lupus') {
  Lupus();
}
if (runMe == 'EmbarrassingSymptom')	{
	EmbarrassingSymptom();
};

