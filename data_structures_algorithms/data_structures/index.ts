// Data Structures
// A data structure is a particular way of organizing data in a computer so that it can be used effectively.

// Array
// An array is a collection of items stored at contiguous memory locations.
// https://www.geeksforgeeks.org/array-data-structure/

import {List} from "./list";
import {Tree} from "./tree";

const arreglo = new Array(10);
arreglo[0] = 0;
arreglo[5] = 5;
//console.log(arreglo);
//
//arreglo[15] = 15
//console.log(arreglo);

// Hashing
// Hashing is an important Data Structure which is designed to use a special function called the Hash function which is used to map a given value with a particular key for faster access of elements.
// https://www.geeksforgeeks.org/hashing-data-structure/

const hash = {
  "1-9": {
    name: "John Doe",
    born: "1967-09-24T09:05:12"
  },
  "2-7": {
    name: "Jane Doe",
    born: "1962-03-13T16:28:41"
  }
}
console.log(hash);

//const john = hash["1-9"];
//john.name = "Jason Bourne";
//
//console.log(hash);

// Linked List
// -----------
// A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.
// https://www.geeksforgeeks.org/data-structures/linked-list/

const list = new List();
for (const value of [2, 3, 5, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 49]) {
  list.add(value);
}
console.log(list.toString());
list.remove(49);
console.log(list.toString());

// Stack
// -----
// Stack is a linear data structure which follows a particular order in which the operations are performed.
// The order may be LIFO (Last In First Out) or FILO (First In Last Out).
// https://www.geeksforgeeks.org/stack-data-structure/

const stack = [];
for(const value of [2, 3, 5, 7, 11, 13, 17]) {
  stack.push(value)
}
console.log(stack.pop());
console.log(stack.pop());
for(const value of [19, 23, 29, 31, 37, 41, 43, 47]) {
  stack.push(value)
}
console.log(stack.pop());
console.log(stack.pop());

// Queue
// -----
// A Queue is a linear structure which follows a particular order in which the operations are performed.
// The order is First In First Out (FIFO).
// https://www.geeksforgeeks.org/queue-data-structure/

const queue = [];
for(const value of [2, 3, 5, 7, 11, 13, 17]) {
  queue.push(value)
}
console.log(queue.shift());
console.log(queue.shift());
for(const value of [19, 23, 29, 31, 37, 41, 43, 47]) {
  queue.push(value)
}
console.log(queue.shift());
console.log(queue.shift());

// Binary Tree
// -----------
// A tree whose elements have at most 2 children is called a binary tree.
// Since each element in a binary tree can have only 2 children, we typically name them the left and right child.
// https://www.geeksforgeeks.org/binary-tree-data-structure/

const tree = new Tree();
tree.add(17);
tree.add(7);
tree.add(19);
tree.add(9);
tree.add(29);

// Graph Data
// ----------
// A Graph is a non-linear data structure consisting of nodes and edges.
// The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.
// https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/

