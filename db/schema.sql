DROP DATABASE IF EXISTS petbook_db;

CREATE Database petbook_db;

use petbook_db;

CREATE TABLE users(
  id INT(100) auto_increment NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  pass VARCHAR(255) NOT NULL,
  lastlogin_time TIMESTAMP,
  PRIMARY KEY(id)
);
