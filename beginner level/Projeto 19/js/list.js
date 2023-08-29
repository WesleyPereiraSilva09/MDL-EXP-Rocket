// let list = prompt("Digite os itens da lista")
let items = [];

for (let item = 0; item < 10; item++) {
  itemName = prompt(`Digite o item ${item + 1}`);

  items[item] = itemName;
}

alert(items);
