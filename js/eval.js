
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

};  // end of Lupus function


//respitory function declared
function respitory()  {
  var eval1space = document.getElementById('eval1');
  var eval2space = document.getElementById('eval2');
  var eval3space = document.getElementById('eval3');

    function respitoryPhaseOne()  {
      var words = 'Let us take a look at you...' ;
      var wordsNode = document.createTextNode(words);
      eval1space.appendChild(wordsNode);
    } // end of respitoryPhaseOne

    function respitoryPhaseTwo()  {
      var img = document.createElement("img");
      eval2space.appendChild(img);
      img.src = 'img/xray-lungs.jpg';
    } //end of respitoryPhaseThree

    function respitoryPhaseThree()  {
      var words = 'Ouch... I bet you feel like a fish with no water, right?';
      var wordsNode = document.createTextNode(words);
      eval3space.appendChild(wordsNode);
    } //end of respitoryPhaseThree

    //create button with event listener that will take you to the next page
    function createButton() {
      var btn = document.createElement("BUTTON");        // Create a <button> element
      var t = document.createTextNode("See Results");       // Create a text node
      btn.appendChild(t);                                // Append the text to <button>
      eval3space.appendChild(btn);
          btn.addEventListener('click', function() {
          window.location.href = "results.html";
      });
    }

// Timing the respitory function
setTimeout(function() {
    respitoryPhaseOne();
}, 0);
setTimeout(function() {
    respitoryPhaseTwo();
}, 3000);
setTimeout(function() {
    respitoryPhaseThree();
    createButton();
}, 6000);
// setTimeout(function() {
//   LupusExit();
// }, 9000);

}; //End of respitory function


//feet function declared
function feet()  {
  var eval1space = document.getElementById('eval1');
  var eval2space = document.getElementById('eval2');
  var eval3space = document.getElementById('eval3');

    function feetPhaseOne()  {
      var words = 'Alright, let\'s get those shoes off...' ;
      var wordsNode = document.createTextNode(words);
      eval1space.appendChild(wordsNode);
    } // end of feetPhaseOne

    function feetPhaseTwo()  {
      var img = document.createElement("img");
      eval2space.appendChild(img);
      img.src = 'https://turnernbaallball.files.wordpress.com/2014/04/brooklyn-nets-bench.gif';
    } //end of feetPhaseThree

    function feetPhaseThree()  {
      var words = 'Wow... that is pungent';
      var wordsNode = document.createTextNode(words);
      eval3space.appendChild(wordsNode);
    } //end of feetPhaseThree

    function createButton() {
      var btn = document.createElement("BUTTON");        // Create a <button> element
      var t = document.createTextNode("See Results");       // Create a text node
      btn.appendChild(t);                                // Append the text to <button>
      eval3space.appendChild(btn);
          btn.addEventListener('click', function() {
          window.location.href = "results.html";
      });
    }

// Timing the feet function
setTimeout(function() {
    feetPhaseOne();
}, 0);
setTimeout(function() {
    feetPhaseTwo();
}, 3000);
setTimeout(function() {
    feetPhaseThree()
    createButton();
}, 6000);
// setTimeout(function() {
//   LupusExit();
// }, 9000);

}; //End of feet function



//respitory function declared
function rash()  {
  var eval1space = document.getElementById('eval1');
  var eval2space = document.getElementById('eval2');
  var eval3space = document.getElementById('eval3');

    function rashPhaseOne()  {
      var words = 'Got a rash, huh? Does it look like this?' ;
      var wordsNode = document.createTextNode(words);
      eval1space.appendChild(wordsNode);
    } // end of respitoryPhaseOne

    function rashPhaseTwo()  {
      var img = document.createElement("img");
      eval2space.appendChild(img);
      img.src = 'img/rash.png';
    } //end of respitoryPhaseThree

    function rashPhaseThree()  {
      var words = 'I\'ve come up with an interesting theory...';
      var wordsNode = document.createTextNode(words);
      eval3space.appendChild(wordsNode);
    } //end of respitoryPhaseThree

    function createButton() {
      var btn = document.createElement("BUTTON");        // Create a <button> element
      var t = document.createTextNode("See Results");       // Create a text node
      btn.appendChild(t);                                // Append the text to <button>
      eval3space.appendChild(btn);
          btn.addEventListener('click', function() {
          window.location.href = "results.html";
      });
    }

// Timing the respitory function
setTimeout(function() {
    rashPhaseOne();
}, 0);
setTimeout(function() {
    rashPhaseTwo();
}, 3000);
setTimeout(function() {
    rashPhaseThree();
    createButton();
}, 6000);
// setTimeout(function() {
//   LupusExit();
// }, 9000);

};




// this is where we need to actually call the function

function checkRunMe() {
  if (runMe == 'Lupus') {
  Lupus();
}
if (runMe == 'EmbarrassingSymptom')	{
	EmbarrassingSymptom();
  }

  if (runMe == 'Respitory') {
  respitory();
  }

  if (runMe == 'Feet') {
  feet();
  }

  if (runMe == 'Rash') {
  rash();
  }
};

checkRunMe();
