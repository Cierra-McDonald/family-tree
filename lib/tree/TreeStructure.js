const fs = require('fs');
const stringify = require('csv-stringify');
const ObjectsToCsv = require('objects-to-csv');
const { familyList } = require('./FamilyLinkedList');
const Human = require('./Human');


class FamilyTree { 
  constructor() { 
    this.tree = {},
    this.queue = new familyList();
     
  }

  createFamilyTree() { 
    const ogChild1 = new Human('Eve', 1, this.tree);
    const ogChild2 = new Human('Eve', 1, this.tree);
    const ogChild3 = new Human('Eve', 1, this.tree);
    this.queue.add(ogChild1);
    this.queue.add(ogChild2);
    this.queue.add(ogChild3);
    // console.log(this.queue)

    while(this.queue.size() > 0) { 
      const removeFirst = this.queue.delete();
      const parentName = removeFirst['element']['name'];
      // console.log(parentName, 'parentName');

      const generation = removeFirst['element']['generation'];
      // console.log(generation, 'generation')

      const potOffspring = removeFirst['element']['num_offspring'];
      // console.log(potOffspring, 'pot');

      const offspringArr = removeFirst['element']['offspring'];
      // console.log(generation)

      if(potOffspring > 0) { 
        for(let i = 0; i < potOffspring; i++) { 
          const kid = new Human(parentName, generation + 1, this.tree);
          if(kid.generation < 11) { 
            offspringArr.push(kid);
            this.queue.add(kid);  
          }
        }
        this.tree[parentName] = removeFirst;
      }
    }
 
    const keys = Object.values(this.tree);
    
    return keys;

  }
        
}

const myFamilyTree = new FamilyTree();
const data = myFamilyTree.createFamilyTree();
console.log(data, 'MY DATA MADE IT');

const sendToCSV = async () => { 
  const csv = new ObjectsToCsv(data);
  await csv.toDisk('./TreeData.csv');

};

console.log(sendToCSV());






module.exports = FamilyTree;
