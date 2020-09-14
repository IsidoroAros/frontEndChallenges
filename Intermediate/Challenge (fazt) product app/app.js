/*
Our product is going to be a class:

Attributes:
    - Name
    - Price
    - Release date
Methods:
    - Save product
    - List product
    - Get product by ID
*/

class product {
    constructor(name, price, year) {
        this.name = name; // The object will get it's attributes via constructor, this. (refers object)
        this.price = price;// atributes recieved via constructor parameters
        this.year = year;
    }

}

class UI {
    addProduct() { //method

    }
    deleteProduct() {

    }
    showMessage() {

    }
}

// DOM events

document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const year = document.getElementById("year").value;

       //console.log(name,price,year);

        console.log(new product(name, price, year)) /// my product recieves as parameters the attributes
                                                    /// captured on the function
        e.preventDefault();
})