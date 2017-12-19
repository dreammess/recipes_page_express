// Model
let ingredients = [];
let instructions = [];


// Controller
let kraken = {

	// Ingredients:
	getIngredients: function() {
		return ingredients;
	},
	addIngredient: function(ingredient) {
		ingredients.push(ingredient);
	},
	removeIngredient: function(ingredient) {
		ingredients = ingredients.filter(x => x !== ingredient);
	},
	editIngredient: function(ingredient, edit) {
		ingredients = ingredients.map(x => (x == ingredient) ? edit:x);
	},


	// Instructions:
	getInstructions: function() {
		return instructions;
	},
	addInstruction: function(instruction) {
	},
	removeInstruction: function() {
	},
	editInstruction: function() {
	},
};


// View
document.addEventListener('DOMContentLoaded', function() {


	// Handle updating the ingredients
    var ingredientButton = document.getElementById('ingredient-btn');
	var ingredientList = document.getElementById('ingredient-list');
	var ingredientInput = document.getElementById('ingredient-input');


	function updateView() {
		// Clear list
		ingredientList.innerHTML = "";
		for (let i = 0; i < kraken.getIngredients().length; i++) {
			// Update list to reflect new array
			var li = document.createElement('li');
			li.innerHTML = ingredients[i] +
			"<button type='button' class='delete-button'>Delete</button>" +
			"<button type='button' class='edit-button'>Edit</button>";
			ingredientList.append(li);
			ingredientInput.value = "";
		}
	}


	// Add items to view/model:
	ingredientButton.addEventListener('click', () => {
		ingredient = ingredientInput.value;
		kraken.addIngredient(ingredient);
		updateView();
	});

	ingredientInput.addEventListener('keyup', function (e) {
    	if (e.keyCode == 13) {
    		ingredient = ingredientInput.value;
       		kraken.addIngredient(ingredient);
       		updateView();
    	}
	});


	// Delete item from view/model:
	ingredientList.addEventListener('click', (e) => {

		// TODO: this isn't particularly elegant :( Maybe there's a better
		// way to get the ingredient text. Possibly mess around with the html
		// a bit. Lots of possibities here :)
		let li = event.target.parentNode;
		var ingredient = li.textContent.replace("DeleteEdit", "");

		if (e.target.className == 'delete-button') {
			kraken.removeIngredient(ingredient);
			updateView()
		} else if (e.target.className == 'edit-button') {
			li.innerHTML = "<input class='save-edit' value='" +
			ingredient + "'></input>";
			document.getElementsByClassName('save-edit')[0]
			.addEventListener('keyup', (e) => {
				if (e.keyCode == 13) {
					// BUG: if 2 items are the same, it will change both!
					var editedIngredient = e.target.value;
					kraken.editIngredient(ingredient, editedIngredient);
					updateView();
				}
			});
		} 
	});


///////////////////////////////////////////////////////////////////////////////

	function arrayUpdate(myArray, input, list) {
		var li = document.createElement('li');
		myArray.push(input.value);
		li.innerHTML = input.value + 
		"<button type='button' class='delete-button'>Delete</button>" + 
		"<button type='button' class='edit-button'>Edit</button>";
		list.append(li);
		input.value = "";
	}

	// Handle updating the instructions
	var instructionButton = document.getElementById('instruction-btn');
	var instructionList = document.getElementById('instruction-list');
	var instructionInput = document.getElementById('instruction-input');

	// Use the button(p tag) to accept input
	instructionButton.addEventListener('click', () => {
		arrayUpdate(instructions, instructionInput, instructionList);
	});

	// Use the enter key to accept input
	instructionInput.addEventListener('keyup', function (e) {
    	if (e.keyCode == 13) {
       		arrayUpdate(instructions, instructionInput, instructionList);
    	}
	});

}, false);


///////////////////////////////////////////////////////////////////////////////


// Bad name as it is not actually validating the form,
// but rather adding content to the invisible inputs.
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






//Remove & Edit Button

	// ingredientList.addEventListener('click', (e) => {
	// 	if (e.target.className == 'delete-button') {
	// 		let li = event.target.parentNode;
	// 		ingredientList.removeChild(li);
	// 		var liText = li.textContent.replace("DeleteEdit", "");
	// 		ingredients = ingredients.filter(x => x !== liText);
	// 	} else if (e.target.className == 'edit-button') {
	// 		let li = event.target.parentNode;
	// 		var liText = li.textContent.replace("DeleteEdit", "");
	// 		li.innerHTML = "<input class='save-edit' value='" + liText + "'></input>";
	// 		document.getElementsByClassName('save-edit')[0].addEventListener('keyup', (e) => {
	// 			if (e.keyCode == 13) {
	// 				// BUG: if 2 items are the same, it will change both
	// 				ingredients = ingredients.map(x => (x == liText) ? e.target.value:x);
	// 				console.log(e.target.value);
	// 				li.innerHTML = e.target.value +
	// 					"<button type='button' class='delete-button'>Delete</button>" +
	// 					"<button type='button' class='edit-button'>Edit</button>";
	// 			}
	// 		});
	// 	} 
	// });