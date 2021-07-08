class Node { 
  constructor(element) { 
    this.element = element;
    this.next = null;

  }
}

class familyList { 
  constructor() { 
    this.length = 0;
    this.head = null;
  }

  add(element) { 
    const node = new Node(element);
    if(this.head) { 
      let current = this.head;
      while(current.next !== null) { 
        current = current.next;
      }
      current.next = node;
    } else { 
      this.head = node;
    }
    this.length++;
  }

  delete() { 

    if(this.head) { 
      const temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    } else { 
      return;
    }
    // let current = this.head;
    // while(current.next !== null) { 
    //     if(current.next.element === element) { 
    //         current.next = current.next.next;
    //         this.length--;
    //         return this;
    //     }
    //     current = current.next;
    // }
    // return;
  }
  size() { 
    return this.length;
  }
}

// const linkedList = new familyList();
// console.log(linkedList.add('yolo'))
// console.log(linkedList.add('jolo'))
// console.log(linkedList.delete());
// console.log(linkedList.delete());
// console.log(linkedList);

module.exports = { familyList, Node };
