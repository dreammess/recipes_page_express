let ingredients = [];
let instructions = [];



document.addEventListener('DOMContentLoaded', function() {

	function arrayUpdate(myArray, input, list) {
		var li = document.createElement('li');
		myArray.push(input.value);
		li.innerHTML = input.value + "<button type='button' class='delete-button'>Delete</button>" 
		+ "<button type='button' class='edit-button'>Edit</button>";
		list.append(li);
		input.value = "";
	}


	// Handle updating the ingredients
    var ingredientButton = document.getElementById('ingredient-btn');
	var ingredientList = document.getElementById('ingredient-list');
	var ingredientInput = document.getElementById('ingredient-input');

	//Remove & Edit Button

	ingredientList.addEventListener('click', (e) => {
		if (e.target.className == 'delete-button') {
			let li = event.target.parentNode;
			ingredientList.removeChild(li);
			var liText = li.textContent.replace("DeleteEdit", "");
			ingredients = ingredients.filter(x => x !== liText);
		} else if (e.target.className == 'edit-button') {
			let li = event.target.parentNode;
			var liText = li.textContent.replace("DeleteEdit", "");
			li.innerHTML = "<input class='save-edit' value='" + liText + "'></input>";
			document.getElementsByClassName('save-edit')[0].addEventListener('keyup', (e) => {
				if (e.keyCode == 13) {
					ingredients = ingredients.map(x => (x == liText) ? e.target.value:x);
					console.log(e.target.value);
					li.innerHTML = e.target.value +
						"<button type='button' class='delete-button'>Delete</button>" +
						"<button type='button' class='edit-button'>Edit</button>";
				}
			});
		} 
	});


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
