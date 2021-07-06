DROP TABLE IF EXISTS humans;
 

CREATE TABLE humans ( 
    id SERIAL PRIMARY KEY,
    human_name VARCHAR(200) NOT NULL,
    human_sex VARCHAR(100) NOT NULL,
    human_spouse VARCHAR(200),
    pot_offspring INTEGER NOT NULL,
    generation INTEGER NOT NULL,
    parent VARCHAR(200) NOT NULL
);

-- CREATE TABLE parents ( 
--     id SERIAL PRIMARY KEY,
--     parent_name VARCHAR(200) NOT NULL,
--     parent_sex VARCHAR(100) NOT NULL,
--     parent_spouse VARCHAR(200),
--     pot_offspring INTEGER NOT NULL CHECK (pot_offspring < 6 AND pot_offspring >= 0),
--     generation INTEGER NOT NULL CHECK (generation > 23),

-- );
