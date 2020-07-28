export interface Node {
  value: number
  left?: Node
  right?: Node
}

export class Tree {
  root?: Node;

  add(value: number) {
    if (this.root) {
      this.addNode(this.root, value);
    } else {
      //this.root = {value};
      this.root = {
        value: value,
        left: undefined,
        right: undefined
      };
    }
  }

  addNode(node: Node, value: number) {
    if (value <= node.value) {
      if (node.left) {
        this.addNode(node.left, value);
      } else {
        node.left = {value};
      }
    } else {
      if(node.right) {
        this.addNode(node.right, value);
      } else {
        node.right = {value};
      }
    }
  }

  delete(value: number) {
    //TODO Tarea
  }
}
