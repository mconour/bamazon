# Bamazon Store

Bamazon is a command-line storefront application that allows users to view and purchase products. This application is built using Node.js and MySQL. Users can browse a list of available products, select the item they want to purchase, and specify the quantity. The application will then calculate the total cost of the purchase and update the inventory.

## Getting Started

Before running the application, make sure you have Node.js and MySQL installed on your system. You'll also need to set up a MySQL database named "bamazon" and create a table called "products" with appropriate columns.

```bash
# Clone this repository
git clone <repository-url>

# Navigate to the project directory
cd bamazon

# Install dependencies
npm install
```

## Usage

To start the Bamazon application, run the following command:

```bash
node bamazonCustomer.js
```

The application will display a table of available products, and you can follow the prompts to make a purchase.

## Example

Here's an example of how the application works:

1. Select a product by entering the Product ID.
2. Enter the quantity of items you want to purchase.
3. If the selected quantity is available, the application will calculate the total cost and update the inventory.
4. Your order will be processed, and you'll receive a confirmation message.

<img src="screencast-bamazon.gif" />

## Built With

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [cli-table2](https://www.npmjs.com/package/cli-table2)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- The Bamazon project is inspired by online shopping experiences.
- Thanks to [Inquirer](https://www.npmjs.com/package/inquirer) and [cli-table2](https://www.npmjs.com/package/cli-table2) for making the CLI interface user-friendly.

---