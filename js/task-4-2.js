const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    this.items.push(itemName);
    return `Adding ${itemName} to inventory`;
  },
  remove(itemName) {
    this.items = this.items.filter((item) => item !== itemName);
    return `Removing ${itemName} from inventory`;
  },
};
const invokeInventoryAction = function (itemName, action) {
  const act = action(itemName);
  const msg = `Invoking action on ${itemName}`;
  return { act, msg };
};

const invokeAdd = invokeInventoryAction("Medkit", inventory.add("Medkit"));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

const Remove = invokeInventoryAction("Gas mask", inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
