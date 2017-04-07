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

function dataHandler(data) {
    products = data.products;
    products.forEach(function(products) {
        for (var i = 0; i < categories.length; i++) {
            if (products.category_id === categories[i].id) {
                products["category_name"] = categories[i].name;
                products["category_discount"] = categories[i].discount;
                products["category_season_discount"] = categories[i].season_discount;
                products["category_discount_price"] = categories[i].discount_price;
                products["season_price"] = products.price - (products.price * categories[i].discount);
            }
        }
    });
    writeToDom("none");
}

function writeToDom(discountSeason) {
    var productBuilder = "";

    for (var j = 0; j < products.length; j++) {
        productBuilder += `<div class="col-sm-6 col-md-4">`;
        productBuilder += `<div class="thumbnail">`;
        productBuilder += `<div id="productName">${products[j].name}</div>`;
        productBuilder += `<div id="categoryName">${products[j].category_name}</div>`;
        if (discountSeason === products[j].category_season_discount) {
            productBuilder += `<div class="price">${products[j].season_price.toFixed(2)}</div>`;
        } else {
            productBuilder += `<div class="price">${products[j].price}</div>`;
        }
            productBuilder += `</div></div>`;
    }
    productContainer.innerHTML = productBuilder;
}

//////////////////////////// EVENT LISTENER ////////////////////////////////////////////

var dropDown = document.getElementById("chooseSeason");

dropDown.addEventListener("change", function(e){
    var seasonSelection = e.target.value;
    writeToDom(seasonSelection);
});


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
    categories = data.categories;
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