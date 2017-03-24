# Seasonal-sales

## Requirements
>Build a web page that lists all of the products, the name of the department it's in, and the price. As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage. Products and categories should be broken up into two separate JSON files and should load both files via XHRs and store the contents in two different JavaScript variables in your code.

#### Code sample
```
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
```

### Screenshot
![seasonal-sales](https://raw.githubusercontent.com/ellisthomas/seasonal-sales/seasonal-sales/screenshot/Screen%20Shot%202017-03-23%20at%207.50.12%20PM.png)


How to run (Node must be installed on your machine):

```
git clone git@github.com:ellisthomas/seasonal-sales.git
cd seasonal-sales
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: http://localhost:8080

### Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap

###Contributors
[Ellis Thomas](https://github.com/ellisthomas)