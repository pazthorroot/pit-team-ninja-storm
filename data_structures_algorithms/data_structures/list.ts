export interface Node {
  value: number
  next?: Node
}

export class List {
  root?: Node;
  //lenght: number = 0;

  constructor() {
  }

  add(value: number) {
    const node: Node = {value}
    if (this.root === undefined) {
      this.root = node;
    } else {
      let aux = this.root;
      while (aux.next) {
        aux = aux.next;
      }
      aux.next = node;
    }
  }

  remove(value: number) {
    if (this.root === undefined) {
      return;
    } else if (this.root.value === value) {
      this.root = this.root.next;
    } else {
      let aux = this.root;
      while (aux.next && aux.next.value != value) {
        aux = aux.next;
      }
      if (aux.next) {
        aux.next = aux.next.next;
      }
    }
  }

  toString() {
    let result = "-> ";
    let aux = this.root;
    while (aux) {
      result += `[${aux.value}] -> `;
      aux = aux.next;
    }
    return result;
  }
}
