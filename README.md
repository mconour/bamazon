# bamazon
Challenge #1: Customer View (Minimum Requirement)

1.) The app prompts users with two messages

* The first should ask the user for the ID of the product the user would like to buy.
* The second message should ask how many units of the product the user would like to buy.

2.) Once the user has placed the order, the application should check if the store has enough of the product to meet the user's request.

* If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.


3.) However, if the store does have enough of the product, it'll fulfill the user's order.

* This means updating the SQL database to reflect the remaining quantity.

* Once the update goes through, show the user the total cost of the user's purchase.