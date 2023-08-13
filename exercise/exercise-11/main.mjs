import {Queue} from "./queue.mjs"
// const Queue = require("./queue.mjs");
const queue = new Queue();

queue.addOrder("Bakso");
queue.addOrder("Ayam Bakar");
queue.addOrder("Bebek Goreng");
console.info(queue.showOrder());
queue.processOrder();