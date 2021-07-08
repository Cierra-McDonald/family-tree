const { uniqueNamesGenerator, names } = require('unique-names-generator');
console.log('HELLLO');
class Human { 
  constructor(parent, generation, tree) { 
    this.name = this.generateName(tree),
    this.sex = this.generateSex(),
    this.spouse = this.generateSpouseName(),
    this.num_offspring = this.checkForOffspring(),
    this.offspring = [],
    this.generation = generation,
    this.parent = parent;
  }

  generateName(tree) {
    let name = uniqueNamesGenerator({ dictionaries: [names, names], length: 2, separator: '-' });
    while(name in tree) { 
      name = uniqueNamesGenerator({ dictionaries: [names, names], length: 2, separator: '-' });
            
    }
    return name;
  }

  generateSex() { 
    const sex = Math.floor(Math.random() * 2);
    if(sex % 2 === 0) { 
      return 'Female';
    }
    else { 
      return 'Male';
    }

  }

  generateSpouseName() { 
    const haveSpouse = Math.floor(Math.random() * 2);
    if(haveSpouse % 2 === 0) { 
      return uniqueNamesGenerator({ dictionaries: [names] });
    } else { 
      return null;
    }

  }

  checkForOffspring() { 
    let offspring;
    if(this.spouse === null) { 
      return 0;
    } else { 
      offspring = Math.floor(Math.random() * 5) + 1;

    }
    return offspring;
  }

  generateOffspring() { 

    for(let i = 0; i < this.num_offspring; i++) {
      console.log(this.offspring, 'NUMBER OF OFFSPIRNG');
      this.offspring.push(new Human());
    }
  }


}



module.exports = Human;
