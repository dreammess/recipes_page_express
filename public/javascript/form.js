let ingredients = [];
let instructions = [];



document.addEventListener('DOMContentLoaded', function() {

	function arrayUpdate(myArray, input, list) {
		var li = document.createElement('li');
		myArray.push(input.value);
		li.innerHTML = input.value;
		list.append(li);
		input.value = "";
	}


	// Handle updating the ingredients
    var ingredientButton = document.getElementById('ingredient-btn');
	var ingredientList = document.getElementById('ingredient-list');
	var ingredientInput = document.getElementById('ingredient-input');

	ingredientButton.addEventListener('click', () => {
		arrayUpdate(ingredients, ingredientInput, ingredientList);
	});

	ingredientInput.addEventListener('keyup', function (e) {
    	if (e.keyCode == 13) {
       		arrayUpdate(ingredients, ingredientInput, ingredientList); 	
    	}
	});


	// Handle updating the instructions
	var instructionButton = document.getElementById('instruction-btn');
	var instructionList = document.getElementById('instruction-list');
	var instructionInput = document.getElementById('instruction-input');

	instructionButton.addEventListener('click', () => {
		arrayUpdate(instructions, instructionInput, instructionList);
	});

	instructionInput.addEventListener('keyup', function (e) {
    	if (e.keyCode == 13) {
       		arrayUpdate(instructions, instructionInput, instructionList);
    	}
	});

}, false);


function validateForm() {
	ingredients = JSON.stringify(ingredients);
	instructions = JSON.stringify(instructions);
    document.forms["recipeForm"]["ingredients"].value = ingredients;
    document.forms["recipeForm"]["instructions"].value = instructions;
    document.getElementById("recipeForm").submit();
    // if (x == "") {
    //     alert("Name must be filled out");
    //     return false;
    // }
}
