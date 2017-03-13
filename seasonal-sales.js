//////////////////////////// PRODUCTS ////////////////////////////////////////////

var productContainer = document.getElementById("productContainer");

function makeDom(xhrData) {
	var productString =""
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


// var productContainer = document.getElementById("productContainer");
// var productString = ""
// var currentProduct;

// function makeDom(xhrData){

// 	for (var i = 0; i < xhrData.products.length; i++){
// 		currentProduct = xhrData.products[i];
// // console.log("products", xhrData.products);
// 		productString += `<div class="col-md-6 col-md-4">`;
// 		productString += `<div class="thumbnail">`;
// 		productString += `<p>${products.id}</p>`;
// 		productString += `<p>${currentProduct.name}</p>`;
// 		productString += `<p>${currentProduct.price}</p>`;
// 		productString += `<p>${currentProduct.category_id}</p>`;
// 		productString += `<div></div>`;

// 	}

// 	productContainer.innerHTML = productString;
// }

// function executeAfterProductFileLoaded(){
// 	var data = JSON.parse(this.responseText);
// 	makeDom(data);
// }

// function executeAfterProductFileFails(){
// 	alert("Error Code Failed");
// }

// var myRequest = new XMLHttpRequest();
// myRequest.addEventListener("load", executeAfterProductFileLoaded);
// myRequest.addEventListener("error", executeAfterProductFileFails);
// myRequest.open("GET", "products.json");
// myRequest.send();

//////////////////////////// CATEGORIES ////////////////////////////////////////////
// var categoriesContainer = document.getElementById("categoriesContainer");

// function categoryToDom(){
// 	var categoryString = "";
// 	var categories;
// }

// var myRequestCategory = new XMLHttpRequest();
// myRequestCategory.addEventListener("load", executeTheCategoryAfterFileLoaded);
// myRequestCategory.addEventListener("error", executeTheCategoryAlertAfterFileFails);
// myRequestCategory.open("GET", "categories.json");
// myRequestCategory.send();
