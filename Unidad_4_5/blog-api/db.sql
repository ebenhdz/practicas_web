CREATE TABLE comments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  author VARCHAR(255),
  memoji VARCHAR(20),
  date DATETIME,
  content TEXT
);

INSERT INTO comments (author, memoji, date, content) 
VALUES ('ebenhdz', 'Memoji-04.png', now(), 'Hola chicos y chicas');