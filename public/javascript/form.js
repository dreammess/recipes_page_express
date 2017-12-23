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
		instructions.push(instruction);
	},
	removeInstruction: function(instruction) {
		instructions = instructions.filter(x => x !== instruction);
	},
	editInstruction: function(instruction, edit) {
		instructions = instructions.map(x => (x == instruction) ? edit:x);
	},
};


// View

document.addEventListener('DOMContentLoaded', function() {

// Ingredients

	// Handle updating the ingredients
    var ingredientButton = document.getElementById('ingredient-btn');
	var ingredientList = document.getElementById('ingredient-list');
	var ingredientInput = document.getElementById('ingredient-input');


	function updateIngredientView() {
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
		updateIngredientView();
	});

	ingredientInput.addEventListener('keyup', function (e) {
    	if (e.keyCode == 13) {
    		ingredient = ingredientInput.value;
       		kraken.addIngredient(ingredient);
       		updateIngredientView();
    	}
	});


	// Delete/Edit ingredient from view/model:
	ingredientList.addEventListener('click', (e) => {

		let li = event.target.parentNode;
		var ingredient = li.textContent.replace("DeleteEdit", "");

		if (e.target.className == 'delete-button') {
			kraken.removeIngredient(ingredient);
			updateIngredientView()
		} else if (e.target.className == 'edit-button') {
			li.innerHTML = "<input class='save-edit' value='" +
			ingredient + "'></input>";
			document.getElementsByClassName('save-edit')[0]
			.addEventListener('keyup', (e) => {
				if (e.keyCode == 13) {
					// BUG: if 2 items are the same, it will change both!
					var editedIngredient = e.target.value;
					kraken.editIngredient(ingredient, editedIngredient);
					updateIngredientView();
				}
			});
		} 
	});


///////////////////////////////////////////////////////////////////////////////

	// Handle updating the instructions
	var instructionButton = document.getElementById('instruction-btn');
	var instructionList = document.getElementById('instruction-list');
	var instructionInput = document.getElementById('instruction-input');


	function updateInstructionView() {
		// Clear list
		instructionList.innerHTML = "";
		for (let i = 0; i < kraken.getInstructions().length; i++) {
			// Update list to reflect new array
			var li = document.createElement('li');
			li.innerHTML = kraken.getInstructions()[i] +
			"<button type='button' class='delete-button'>Delete</button>" +
			"<button type='button' class='edit-button'>Edit</button>";
			instructionList.append(li);
			instructionInput.value = "";
		}
	}

	// Add items to view/model:
	instructionButton.addEventListener('click', () => {
		instruction = instructionInput.value;
		kraken.addInstruction(instruction);
		updateInstructionView();
	});

	instructionInput.addEventListener('keyup', function (e) {
    	if (e.keyCode == 13) {
    		instruction = instructionInput.value;
       		kraken.addInstruction(instruction);
       		updateInstructionView();
    	}
	});


	// Delete/edit instructions from view/model:
	instructionList.addEventListener('click', (e) => {

		let li = event.target.parentNode;
		var instruction = li.textContent.replace("DeleteEdit", "");

		if (e.target.className == 'delete-button') {
			kraken.removeInstruction(instruction);
			updateInstructionView()
		} else if (e.target.className == 'edit-button') {
			li.innerHTML = "<input class='save-edit' value='" +
			instruction + "'></input>";
			document.getElementsByClassName('save-edit')[0]
			.addEventListener('keyup', (e) => {
				if (e.keyCode == 13) {
					// BUG: if 2 items are the same, it will change both!
					var editedInstruction = e.target.value;
					kraken.editInstruction(instruction, editedInstruction);
					updateInstructionView();
				}
			});
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

