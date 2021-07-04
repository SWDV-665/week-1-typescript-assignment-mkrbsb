//Kelly Shea    

class Grocery {
    itemDetail: string;
    constructor({ name, cost, qty, aisle }: { name: string; cost: number; qty: number; aisle: number }) 
    {
      this.name = name;
      this.cost = cost;
      this.qty = qty;
      this.aisle = aisle;
    }
}

interface Product {
    name:string;
    cost:number;
    qty:number;
    aisle:number;  
}

function groceries(cart: Product) {
    return cart.name + " " + "Cost: " + cart.cost + " " + "Qty: " + cart.qty + " " + "Aisle: " + cart.aisle
}

let productList: Array<Product> = [{name: 'milk', cost: 3.99 , qty: 2, aisle: 4}, 
{name: 'bread', cost: 2.99, qty: 1, aisle: 3}, {name: 'eggs', cost: 1.50, qty: 1,  aisle: 4}, 
{name: 'cereal', cost: 3.98, qty: 1,  aisle: 2}];

document.body.innerHTML += "<ul>";
productList.forEach(function (i) {
    document.body.innerHTML += "<li>" + "Name: " + i.name + " " + "Cost: " + String(i.cost) + " " + "Qty: " + i.qty + " " + "Aisle: " + i.aisle;
});
document.body.innerHTML += "</ul>";

