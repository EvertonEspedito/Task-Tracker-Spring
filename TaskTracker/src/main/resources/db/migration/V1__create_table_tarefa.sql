    CREATE TABLE tarefa (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(150) NOT NULL,
        descricao VARCHAR(255) NOT NULL,
        concluida BOOLEAN NOT NULL DEFAULT FALSE
    );
