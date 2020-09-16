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
    addProduct(product) { /// method recieves const product to execute a function
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product  </strong>: ${product.name}
                <strong>Price  </strong>: ${product.price}
                <strong>Year  </strong>: ${product.year}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
        `;
        productList.appendChild(element); /// method addProduct appends a child (our element modified above)
    }
    resetForm(){
        document.getElementById('product-form').reset(); /// resets to blank space a determinated element
    }
    deleteProduct(element) {
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product removed','danger');
        }
    }
    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-3 mb-1`;
        div.appendChild(document.createTextNode(message)); // showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM events

document.getElementById('product-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    const producto = new product(name, price, year); /// my product recieves as parameters the attributes
    /// captured on the function
    
    const ui = new UI(); // creating a new UI instance and gives me a object with the defined methods (addProduct / deleteProduct / showMessage)
    
    if(name === '' || price === '' || year===''){
        ui.showMessage('Empty fields remaining', 'danger');
    }else{

        ui.addProduct(producto); // send to object.method and instances a class: product via addProduct method
        ui.resetForm();
        ui.showMessage('Product added succesfully', 'success');
        
        e.preventDefault(); // prevents refreshing on submit
    }
})

document.getElementById('product-list').addEventListener('click', function (e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})