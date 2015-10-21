

var allConditions = [];

var Condition = function(listedCondition,conditionFunction) {
  this.listedCondition = listedCondition;
  this.conditionFunction = conditionFunction;
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




new Condition ('Lupus',lupusFunction);
new Condition ('Cancer',cancerFunction);
new Condition ('Weird Growth',weirdgrowthFunction);
new Condition ('On Fire',onfireFunction);




var submitButton = document.getElementById("submitButton");



submitButton.addEventListener('click', function() {
  // this needs to call the function (second part of the condition) of the condition selected in the drop down box
  // console.log("This process is working if something is written below ...");
  var chosen = document.getElementById("conditionList");
  var chosenOne = chosen.options[chosen.selectedIndex].text;
  console.log(chosenOne);
  // for loop, search in allConditions, find where chosenOne matches, then run the function ...

  for (var i = 0; i < allConditions.length; i++)  {
    if (chosenOne == allConditions[i].listedCondition)  {
      // this.removeEventListener('click', arguments.callee);
      localStorage.setItem('condition', allConditions[i].listedCondition);
      window.location.href = "eval.html";
    } // end of if statement
  } // end of for loop
}); // end of submitButton











