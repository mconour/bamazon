var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});


connection.connect();

var display = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("-----------------------------");
    console.log("      Welcome To Bamazon    ");
    console.log("-----------------------------");
    console.log("");
    console.log("Find below the Bamazon products list");
    console.log("");
      
    var table = new Table({
      head: ["Product Id", "Available Products", "Cost"],
      colWidths: [12, 50, 8],
      colAligns: ["center", "left", "right"],
      style: {
        head: ["teal"],
        compact: true
        // 'padding-right' : 1,
      }
    });

    for (var i = 0; i < res.length; i++) {
      table.push([res[i].id, res[i].products_name, res[i].price]);
    }

    console.log(table.toString());
    console.log("");
    shopping();
  }); //End Connection to products
};

var shopping = function() {
  inquirer
    .prompt({
      name: "productToBuy",
      type: "input",
      message: "Please enter the Product Id of the item you wish to purchase:"
    })
    .then(function(answer1) {
      var selection = answer1.productToBuy;
      connection.query("SELECT * FROM products WHERE Id=?", selection, function(
        err,
        res
      ) {
        if (err) throw err;
        if (res.length === 0) {
          console.log(
            "That product doesn't exist, Please enter a Product Id from the list above:"
          );

          shopping();
        } else {
          inquirer
            .prompt({
              name: "quantity",
              type: "input",
              message: "How many items would you like to purchase?"
            })
            .then(function(answer2) {
              var quantity = answer2.quantity;
              if (quantity > res[0].stock_quantity) {
                console.log(
                  "Our apologies, we only have " +
                    res[0].stock_quantity +
                    " items of the selected product."
                );
                shopping();
              } else {
                console.log("");
                console.log(res[0].products_name + " purchased");
                console.log(quantity + " qty @ $" + res[0].price);

                var newQuantity = res[0].stock_quantity - quantity;
                connection.query(
                  "Update products SET stock_quantity = " +
                    newQuantity +
                    " Where id = " +
                    res[0].id,
                  function(err, resUpdate) {
                    if (err) throw err;
                    console.log("");
                    console.log("Your order has been processed");
                    console.log("Thank you for shopping with Bamazon!");
                    console.log("");
                    connection.end();
                  }
                );
              }
            });
        }
      });
    });
};

display();
