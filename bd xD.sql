CREATE TABLE usuarios (
  	id int NOT NULL PRIMARY KEY,
    nombre varchar(255),
    apellido varchar(255)
);

INSERT INTO usuarios (id, nombre, apellido)
VALUES (1, 'Ricardo', 'Arredondo');


CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'usuario'@'localhost';
