const inventory = {
  items: ["Knife", "Gas mask"],
  showItems() {
    return this.items;
  },
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
  },
};
console.table(inventory.showItems());
inventory.add("Medkit");
console.table(inventory.showItems());

const invokeInventoryAction = function (itemName, action {
  console.log(`Invoking action on ${itemName}`);
  action;
};

invokeInventoryAction("Medkit", inventory.add("Medkit"));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

/*invokeInventoryAction("Gas mask", inventory.remove);*/
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
