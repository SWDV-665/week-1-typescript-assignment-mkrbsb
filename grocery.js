var Grocery = /** @class */ (function () {
    function Grocery(_a) {
        var name = _a.name, cost = _a.cost, qty = _a.qty, aisle = _a.aisle;
        this.name = name;
        this.cost = cost;
        this.qty = qty;
        this.aisle = aisle;
    }
    return Grocery;
}());
function groceries(cart) {
    return cart.name + " " + "Cost: " + cart.cost + " " + "Qty: " + cart.qty + " " + "Aisle: " + cart.aisle;
}
var productList = [{ name: 'milk', cost: 3.99, qty: 2, aisle: 4 },
    { name: 'bread', cost: 2.99, qty: 1, aisle: 3 }, { name: 'eggs', cost: 1.50, qty: 1, aisle: 4 },
    { name: 'cereal', cost: 3.98, qty: 1, aisle: 2 }];
document.body.innerHTML += "<ul>";
productList.forEach(function (i) {
    document.body.innerHTML += "<li>" + "Name: " + i.name + " " + "Cost: " + String(i.cost) + " " + "Qty: " + i.qty + " " + "Aisle: " + i.aisle;
});
document.body.innerHTML += "</ul>";
