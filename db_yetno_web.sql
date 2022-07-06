
-- Adminer 4.6.3 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(225) NOT NULL,
  `username` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE `users`;
INSERT INTO `users` (`id`, `name`, `username`, `password`) VALUES
(1,	'Admin',	'admin',	'admin');

DROP TABLE IF EXISTS `web_info`;
CREATE TABLE `web_info` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nama_info` varchar(225) NOT NULL,
  `value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE `web_info`;
INSERT INTO `web_info` (`id`, `nama_info`, `value`) VALUES
(1,	'web_nama',	'Zuka Store'),
(2,	'web_deskripsi',	'We are Indonesia\'s marketplace specialized in second-hand smartphones. Our mission is to rebuild trust in the second-hand smartphone market, with top quality yet affordable phones. We follow a meticulous selection and testing methodology to bring you the very best. And by buying from us, you\'re giving a second life to a device, thus helping to reduce electronic waste and protect the environment.');

-- 2022-07-06 23:38:13
