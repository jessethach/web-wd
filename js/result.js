// Retrieving selected condition from local storage
var stowedCondition = localStorage.getItem('condition');
var condition = JSON.parse(stowedCondition);
console.log('unpackaged localstorage item is: ' + condition);
var runMe = condition.replace(/\s+/g, '');
console.log('The runMe name is now: ' + runMe);





























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