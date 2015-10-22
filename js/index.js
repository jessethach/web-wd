

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




new Condition ('Lupus','lupus');
new Condition ('Embarrassing Symptom','embarrassingsymptom');
new Condition ('Respiratory', 'respiratory');
new Condition ('Feet', 'feet');
new Condition ('Rash', 'rash');
new Condition ('Balding','bald');

// ,lupusFunction
// ,cancerFunction
// ,weirdgrowthFunction
// ,onfireFunction

var submitButton = document.getElementById("submitButton");



submitButton.addEventListener('click', function() {
  // this needs to call the function (second part of the condition) of the condition selected in the drop down box
  // console.log("This process is working if something is written below ...");
  var chosen = document.getElementById("conditionList");
  var chosenOne = chosen.options[chosen.selectedIndex].text;
  console.log(chosenOne);
  var chosenStowed = JSON.stringify(chosenOne);
  localStorage.setItem('condition',chosenStowed);
  window.location.href = "eval.html";
  // for loop, search in allConditions, find where chosenOne matches, then run the function ...
}); // end of submitButton





// localStorage stuff goes here


