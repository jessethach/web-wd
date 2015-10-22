

var allConditions = [];

var Condition = function(listedCondition) {
  this.listedCondition = listedCondition;
  //this.conditionFunction = conditionFunction;
  // location to append something
  var conditionListLocation = document.getElementById("conditionList");
  // create an element for the condition to be attached to, for a drop down list it is "option"
  var conditionOption = document.createElement("option");
  // create a text node to attach to the option
  var conditionName = document.createTextNode(listedCondition);
  conditionOption.appendChild(conditionName);
  conditionListLocation.appendChild(conditionOption);
  allConditions.push(this);
}


new Condition ('Lupus');
new Condition ('Embarrassing Symptom');
new Condition ('Respiratory');
new Condition ('Feet');
new Condition ('Rash');
new Condition ('Balding');


var submitButton = document.getElementById("frontSubmitButton");

submitButton.addEventListener('click', function() {
  var chosen = document.getElementById("conditionList");
  console.log(conditionList.value);
  if (conditionList.value == 'please select from the list below') {
    alert('You must select a condition to continue');
  } else  {
    var chosenOne = chosen.options[chosen.selectedIndex].text;
    console.log(chosenOne);
    var chosenStowed = JSON.stringify(chosenOne);
    localStorage.setItem('condition',chosenStowed);
    window.location.href = "eval.html";
  };
}); // end of submitButton

