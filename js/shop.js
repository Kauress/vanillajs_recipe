
// aray that will hold recipe object
const recipeArray = [];
const recipeObject = {
  name: "",
  ingredients:"",
  instructions: "",
  hours: 0,
  minutes: 0,
  image: "",
  category: ""
}

document.getElementById("add-button2").addEventListener("click", function() {

var form =  document.getElementById("my-form");
var recipe;
var formElement = form.elements;
for(var i = 0; i < formElement.length; i++){
  recipe= formElement[i];
  recipeObject.name = formElement[0].value;
  recipeObject.ingredients= formElement[1].value;
  recipeObject.instructions= formElement[2].value;
  recipeObject.hours= formElement[3].value;
  recipeObject.minutes= formElement[4].value;
  recipeObject.image= formElement[5].value
  recipeObject.category= formElement[6].value
}
recipeArray.push(JSON.stringify(recipeObject));
alert(recipeArray);
});
