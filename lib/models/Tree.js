const pool = require('../utils/pool');

module.exports = class Tree { 

    humanId;
    humanName;
    humanSex;
    humanSpouse;
    potOffspring;
    generation;
    parent;

    constructor(row) { 
      this.humanId = row.id;
      this.humanName = row.human_name;
      this.humanSex = row.human_sex;
      this.humanSpouse = row.human_spouse;
      this.potOffspring = row.pot_offspring;
      this.generation = row.generation;
      this.parent = row.parent;
    }

    static async insert({ 
      humanName,
      humanSex,
      humanSpouse,
      potOffspring,
      generation,
      parent,
    }) { 
      const { rows } = await pool.query(
        `
            INSERT INTO humans
            (
                id, 
                human_name,
                human_sex,
                human_spouse,
                pot_offspring,
                generation,
                parent) 
                VALUES($1, $2, $3, $4, $5, $6, $7)
                RETURNING *`, 
        [
          humanName,
          humanSex,
          humanSpouse,
          potOffspring,
          generation,
          parent
        ]

      );

      return new Tree(rows[0]);
    }

    static async find() { 
      const { rows } = await pool.query(`
        SELECT *
        FROM humans 
        `);

      return rows;
    }

};


