
// Retrieving selected condition from local storage
var stowedCondition = localStorage.getItem('condition');
var condition = JSON.parse(stowedCondition);
console.log('unpackaged localstorage item is: ' + condition);
var runMe = condition.replace(/\s+/g, '');
console.log('The runMe name is now: ' + runMe);

// Keep function Lupus as a template
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
	setTimeout(function()	{
		var wordsNode = document.createTextNode(what);
		where.appendChild(wordsNode);
		var linebreak = document.createElement("br");
		where.appendChild(linebreak);
	}, timer);
};	// end of PrintWords function

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
  var eval1space = document.getElementById('eval1');
  var eval2space = document.getElementById('eval2');
  var eval3space = document.getElementById('eval3');
    function EmbarrassingSymptom1()  {
      //console.log("Embarrassing Symptom has been triggered");
      var eval1space = document.getElementById('eval1');
      PrintImage(eval1space,'img/stern-doctor.jpg',0);
      var words = 'Hello there,';
      PrintWords(eval1space,words,2000);
      words = 'My name is Doctor Clayton and I\'ll be your online physician this afternoon.';
      PrintWords(eval1space,words,4000);
      words = 'I see you selected \"Embarrassing\" ... that\'s poorly named, there isn\'t anything to be embarrassed about.'
      PrintWords(eval1space,words,8000);
      words = 'I assure you that your privacy and comfort are my chief concerns. I\'m going to conduct a remote scan to see what we\'re up against here.'
      PrintWords(eval1space,words,13000);
      words = 'If you\'ll just hold still the scan will be starting in just a moment.'
      PrintWords(eval1space,words,18000);
    };  // end EmbarrassingSymptom1
    EmbarrassingSymptom1();
    function EmbarrassingSymptom2()  {
      var eval2space = document.getElementById('eval2');
      words = 'SCAN INITIALIZING ... '
      PrintWords(eval2space,words,20000);

      setTimeout(function() {
      var audio = new Audio('audio/Microwave.mp3');
      audio.play();
      }, 21000);

      PrintImage(eval2space,'img/FullCat.gif',23000);
      // this is to crash evalspace 2 so the gif stops playing
      setTimeout(function() {
        var myNode = document.getElementById('eval2');
        while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild);
        };
      }, 38000);     
    };   // end of EmbarrassingSymptom2
    EmbarrassingSymptom2();
    function EmbarrassingSymptom3()  {
      var eval3space = document.getElementById('eval3');
      words = 'Please give me a moment to look over this scan, I\'ll have your results shortly.';
      PrintWords(eval3space,words,40000);
    }; // end of EmbarrassingSymptom3()
    EmbarrassingSymptom3();
    // exit mechanism to result page
    function EmbarrassingSymptomExit()  {
      window.location.href = "results.html";
    }
    setTimeout(function() {
        EmbarrassingSymptomExit();
    }, 46000);
  };  // end of EmbarrassingSymptom









//respitory function declared
function Respiratory()  {
  var eval1space = document.getElementById('eval1');
  var eval2space = document.getElementById('eval2');
  var eval3space = document.getElementById('eval3');

    function RespiratoryPhaseOne()  {
      var words = 'Let us take a look at you...' ;
      var wordsNode = document.createTextNode(words);
      eval1space.appendChild(wordsNode);
    } // end of respitoryPhaseOne

    function RespiratoryPhaseTwo()  {
      var img = document.createElement("img");
      eval2space.appendChild(img);
      img.src = 'img/xray-lungs.jpg';
    } //end of respitoryPhaseThree

    function RespiratoryPhaseThree()  {
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
    RespiratoryPhaseOne();
}, 0);
setTimeout(function() {
    RespiratoryPhaseTwo();
}, 3000);
setTimeout(function() {
    RespiratoryPhaseThree();
    createButton();
}, 6000);
// setTimeout(function() {
//   LupusExit();
// }, 9000);
};  // end of Respiratory function


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

};  // end of rash function

function bald()  {
  console.log("bald Function has been triggered");
  var eval1space = document.getElementById('eval1');
  var eval2space = document.getElementById('eval2');
  var eval3space = document.getElementById('eval3');


  function baldPhaseOne()  {
      var words = 'Hello, I\'m Dr.Hackenbush, and I\'ll be your online physician.';
      var wordsNode = document.createTextNode(words);
      eval1space.appendChild(wordsNode);
    } // end of baldPhaseOne


    function baldPhaseTwo()  {
      var words = 'I understand you have a balding problem, please look at the ground while I do a scan to determine how severe the problem is.' ;
      var wordsNode = document.createTextNode(words);
      eval2space.appendChild(wordsNode);
    } // end of baldPhaseTwo



    function baldPhaseThree()  {
      var words = 'Oh wow, you weren\'t joking... Please wait while I come up with a solution.' ;
      var wordsNode = document.createTextNode(words);
      var img = document.createElement("img");
      eval3space.appendChild(img);
      eval3space.appendChild(wordsNode);
      img.src = ''; //-----------------------------------------LOADING GIF HERE
    } // end of baldPhaseTwo



    // function baldPhaseThree()  {
    //   var words = 'Oh wow, you weren\'t joking... Please wait while I come up with a solution.' ;
    //   var wordsNode = document.createTextNode(words);
    //   var img = document.createElement("img");
    //   eval3space.appendChild(img);
    //   img.src = '';
    // } // end of baldPhaseThree

    function baldExit()  {
      window.location.href = "results.html";
    }


  setTimeout(function() {
      baldPhaseOne();
  }, 0);
  setTimeout(function() {
      baldPhaseTwo();
  }, 3000);
  setTimeout(function() {
      baldPhaseThree();
  }, 6000);
  setTimeout(function() {
    baldExit();
  }, 13000);



};  // end of bald function



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
