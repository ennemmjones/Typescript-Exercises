
// Mountains
interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [

    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310},
]

function findNameOfTallestMountain(mountains: Mountain[]): string {
    const maxMountain = mountains.reduce((p, c) => p.height > c.height ? p : c);
    return maxMountain.name;
}

let maxMountain = findNameOfTallestMountain(mountains);
console.log(maxMountain);


//Products
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {name: "Blue Candle", price: 60},
    {name: "Food", price: 100},
    {name: "Magical Shield", price: 130},
    {name: "Arrows", price: 80}
]

function calcAverageProductPrice(products: Product[]) {
var count=0,total=0;

function generateTotal(product: Product) {
  total += product.price;
  count ++;  
}

products.forEach(generateTotal);
let avg = total / count;
return avg;
}

let average = calcAverageProductPrice(products);

console.log(average);


//Inventory
interface InventoryItem {
    product: Product;
    quantity: number;

}
const inventory: InventoryItem[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20},
]

function calcInventoryValue(inventory: InventoryItem[])
{

let inventoryTotal = 0;
inventory.forEach(calcInventoryTotal);

function calcInventoryTotal(inventory: InventoryItem) {
inventoryTotal  += inventory.product.price * inventory.quantity;
}
return inventoryTotal
}
let inventoryTotal = calcInventoryValue(inventory);
console.log(inventoryTotal);