//////////////////////////// PRODUCTS ////////////////////////////////////////////

var productContainer = document.getElementById("productContainer");

function makeDom(xhrData) {
	var productString = ""
	var currentProduct;
	for (var i = 0; i < xhrData.products.length; i++) {
		currentProduct = xhrData.products[i];

	productString += `<div class="col-sm-6 col-md-4">`;
	productString += `<div class="thumbnail">`;
	productString += `<p>${currentProduct.id}</p>`;
	productString += `<p>${currentProduct.name}</p>`;
	productString += `<p>${currentProduct.price}</p>`;
	productString += `<p>${currentProduct.category_id}</p>`;
	productString += `</div></div>`;
  
	}
		productContainer.innerHTML = productString;
}

function executeThisCodeAfterFileLoaded() {
	var data = JSON.parse(this.responseText);
	makeDom(data);
}

function executeThisCodeAfterFileFails() {
	console.log("boooooo");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "products.json");
myRequest.send();


//////////////////////////// CATEGORIES ////////////////////////////////////////////

var categoryContainer = document.getElementById("categoryContainer");

function categoryDom(xhrData) {
	var categoryString = ""
	var currentCategory;
	for (var j = 0; j < xhrData.categories.length; j++) {
		currentCategory = xhrData.categories[j];

	categoryString += `<div class="col-sm-6 col-md-4">`;
	categoryString += `<div class="thumbnail">`;
	categoryString += `<p>${currentCategory.id}</p>`;
	categoryString += `<p>${currentCategory.name}</p>`;
	categoryString += `<p>${currentCategory.season}</p>`;
	categoryString += `<p>${currentCategory.discount}</p>`;
	categoryString += `</div></div>`;
  
	}
		categoryContainer.innerHTML = categoryString;
}

function executeCategoryCodeAfterFileLoaded() {
	var data = JSON.parse(this.responseText);
	categoryDom(data);
	console.log("data", data);
}

function executeCategoryCodeAfterFileFails() {
	console.log("boooooo");
}


var myRequestCategory = new XMLHttpRequest();
myRequestCategory.addEventListener("load", executeCategoryCodeAfterFileLoaded);
myRequestCategory.addEventListener("error", executeCategoryCodeAfterFileFails);
myRequestCategory.open("GET", "categories.json");
myRequestCategory.send();
