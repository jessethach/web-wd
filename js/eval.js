
// Retrieving selected condition from local storage
var stowedCondition = localStorage.getItem('condition');
var condition = JSON.parse(stowedCondition);
console.log('unpackaged localstorage item is: ' + condition);
var runMe = condition.replace(/\s+/g, '');
console.log('The runMe name is now: ' + runMe);

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
    };
    setTimeout(function() {
        EmbarrassingSymptomExit();
    }, 46000);
  };  // end of EmbarrassingSymptom





//respitory function declared
function respiratory()  {
  var eval1space = document.getElementById('eval1');
  var eval2space = document.getElementById('eval2');
  var eval3space = document.getElementById('eval3');

  function respiratoryPhaseOne() {
    var eval1space = document.getElementById('eval1');
    var words = 'I see you\'re having some respiratory issues.';
    PrintWords(eval1space,words,0);
  }; //end of resiratoryPhaseOne
respiratoryPhaseOne();

  function respiratoryPhaseTwo() {
    var eval2space = document.getElementById('eval2');
    words = 'I will to need to preform a chest scan to determine the problem, please hold still.';
    PrintWords(eval2space,words,3000);
    PrintImage(eval2space,'img/xray-lungs.jpg',6000);
  };
respiratoryPhaseTwo();

  function createButton() {
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode("See Results");       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        eval3space.appendChild(btn);
            btn.addEventListener('click', function() {
            window.location.href = "results.html";
        });
      };

  function respiratoryPhaseThree() {
    var eval3space = document.getElementById('eval3');
    words = 'Please proceed to the results page while I review your scan.';
    PrintWords(eval3space,words,6000);
    setTimeout(function() {
      createButton();
    }, 6000);
  };
respiratoryPhaseThree();
};




//feet function declared
function feet()  {
  var eval1space = document.getElementById('eval1');
  var eval2space = document.getElementById('eval2');
  var eval3space = document.getElementById('eval3');

  function feetPhaseOne() {
    var eval1space = document.getElementById('eval1');
    var words = 'I see you have an issue with your feet, I\'ll need you to remove your shoes.';
    PrintWords(eval1space,words,0);
  }; //end of feetPhaseOne
  feetPhaseOne();

  function feetPhaseTwo() {
    var eval2space = document.getElementById('eval2');
    PrintImage(eval2space,'img/smelly.gif',3000);
  };
  feetPhaseTwo();

  function createButton() {
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode("See Results");       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        eval3space.appendChild(btn);
            btn.addEventListener('click', function() {
            window.location.href = "results.html";
        });
      };

  function feetPhaseThree() {
    var eval3space = document.getElementById('eval3');
    words = 'Wow... that is pungent.  Please put your shoes back on and proceed to the results page.'
    PrintWords(eval3space,words,6000);
    setTimeout(function() {
      createButton();
    }, 6000);
  };
feetPhaseThree();
}; //End of feet function




//rash function declared
function rash()  {
  var eval1space = document.getElementById('eval1');
  var eval2space = document.getElementById('eval2');
  var eval3space = document.getElementById('eval3');

  function rashPhaseOne() {
    var eval1space = document.getElementById('eval1');
    var words = 'Got a rash, huh? Does it look like this?';
    PrintWords(eval1space,words,0);
  }; //end of rashPhaseOne
  rashPhaseOne();

  function rashPhaseTwo() {
    var eval2space = document.getElementById('eval2');
    PrintImage(eval2space,'img/rash.png',3000);
  };
  rashPhaseTwo();

  function createButton() {
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode("See Results");       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        eval3space.appendChild(btn);
            btn.addEventListener('click', function() {
            window.location.href = "results.html";
        });
      };

   function rashPhaseThree() {
    var eval3space = document.getElementById('eval3');
    words = 'I\'ve come up with an interesting theory...';
    PrintWords(eval3space,words,6000);
    setTimeout(function() {
      createButton();
    }, 6000);
  };
rashPhaseThree();
}; //End of rash function




//rash function declared
function bald()  {
  console.log("bald Function has been triggered");
  var eval1space = document.getElementById('eval1');
  var eval2space = document.getElementById('eval2');
  var eval3space = document.getElementById('eval3');

  function baldPhaseOne() {
    var eval1space = document.getElementById('eval1');
    PrintImage(eval1space,'img/firstDoctor.png',0);
    var words = 'Hello, I\'m Dr.Hackenbush, and I\'ll be your online physician.';
    PrintWords(eval1space,words,2000);
    words = 'I understand you have a balding problem, please wait while I do a scan to determine how severe the problem is.';
    PrintWords(eval1space,words,4000);
   }; //end of baldingPhaseOne
   baldPhaseOne();

  function baldPhaseTwo() {
    var eval2space = document.getElementById('eval2');
    words = 'SCAN INITIALIZING ...';
    PrintWords(eval2space,words,6000)
    PrintImage(eval2space,'img/baldScan.gif',8000);
    words = 'Please wait while I review your scan.';
    PrintWords(eval2space,words,10000);
   }; //end of baldPhaseTwo
   baldPhaseTwo();

  function baldExit()  {
      window.location.href = "results.html";
    };
    setTimeout(function() {
        baldExit();
    }, 16000);
  };  // end of bald

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
