DROP DATABASE IF EXISTS `pet_project`;
CREATE DATABASE `pet_project`;
USE `pet_project`;

CREATE TABLE `app_data` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `owner_name` VARCHAR( 255) NOT NULL,
  `pet_name` VARCHAR( 255 ) NOT NULL,
  `pet_breed` VARCHAR( 255) NOT NULL,
  `pet_age` VARCHAR( 255) NOT NULL,
  `pet_temperament` VARCHAR( 255) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` )
);
