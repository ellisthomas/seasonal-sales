var productContainer = document.getElementById("productContainer");
var chooseSeason = document.getElementById("chooseSeason");
var productString = ""
var currentProduct;
var products = [];
var categoryString = ""
var currentCategory;
var categories = [];
var season = "";

//////////////////////////// PRODUCTS ////////////////////////////////////////////

function makeDom() {

    for (var i = 0; i < products.length; i++) {
        currentProduct = products[i];

        productString += `<div class="col-sm-6 col-md-4">`;
        productString += `<div class="thumbnail">`;
        productString += `<p>${currentProduct.id}</p>`;
        productString += `<p>${currentProduct.name}</p>`;
        productString += `<p>${currentProduct.price}</p>`;
        productString += `<p>${currentProduct.category_id}</p>`;

        if (products[i].category_season === season) {
            productString += `<p>${products[i].category_discPrice}</p>`;
        } else {
            productString += `<p>${products[i].price}</p>`
        }
        productString += `</div></div>`;

    }
    productContainer.innerHTML = productString;
}

//////////////////////////// CATEGORIES ////////////////////////////////////////////

function categoryDom(xhrData) {
    for (var j = 0; j < xhrData.categories.length; j++) {
        currentCategory = xhrData.categories[j];

        categoryString += `<div class="col-sm-6 col-md-4">`;
        categoryString += `<div class="thumbnail">`;
        categoryString += `<p>${currentCategory.id}</p>`;
        categoryString += `<p>${currentCategory.name}</p>`;
        categoryString += `<p>${currentCategory.season}</p>`;
        categoryString += `<p>${currentCategory.discount}</p>`;
        categoryString += `</div></div>`;

        if (currentCategory.id === currentProduct.category_id) {
            currentProduct.price = currentProduct.price - (currentProduct.price * currentCategory.discount); //put a line to write to DOM
        }

    }
    categoryContainer.innerHTML = categoryString;
}

function dataHandler(data) {
    products = data.products;
    products.forEach(function(products) {
        for (var i = 0; i < categories.length; i++) {
            console.log("what:::");
            if (products.category_id === categories[i].id) {
                products["category_name"] = categories[i].name;
                products["category_discount"] = categories[i].discount;
                products["category_season_discount"] = categories[i].season_discount;
                products["category_discount_price"] = categories[i].discount_price;
                var discountPrice = (1 - categories[i].discount) * products.price;
                products["category_discPrice"] = discountPrice.toFixed(2);

            }
        }
    })
    makeDom();
}



function executeThisCodeAfterFileLoaded() {
    var data = JSON.parse(this.responseText);
    dataHandler(data);
    // console.log("data", data);

}

function executeThisCodeAfterFileFails() {
    console.log("boooooo");
}

function executeCategoryCodeAfterFileLoaded() {
    var data = JSON.parse(this.responseText);
    categoryData(data);
}

function categoryData(data) {
    categories = data.categories;
}
// categoryDom(data);
// console.log("data", data);

function executeCategoryCodeAfterFileFails() {
    console.log("boooooo");
}
var myRequestCategory = new XMLHttpRequest();
myRequestCategory.addEventListener("load", executeCategoryCodeAfterFileLoaded);
myRequestCategory.addEventListener("error", executeCategoryCodeAfterFileFails);
myRequestCategory.open("GET", "categories.json");
myRequestCategory.send();

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "products.json");
myRequest.send();