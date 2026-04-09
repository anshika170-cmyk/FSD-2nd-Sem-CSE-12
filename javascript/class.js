// Correct JSON string
let jsonString = '{"productName":"Laptop","price":1200,"instock":true}';

// Convert JSON string to object
let product = JSON.parse(jsonString);
console.log(product.productName);

// Convert object to JSON string
let newProduct = { productName: "Mouse", price: 1905, instock: false };
let newJsonString = JSON.stringify(newProduct);
console.log(newJsonString);

// Loop through object
let person = {
    name: "Charlie",
    age: 35,
    city: "New York"
};

let text = "";

for (let key in person) {
    text += key + " : " + person[key] + "\n";
}

console.log(text);