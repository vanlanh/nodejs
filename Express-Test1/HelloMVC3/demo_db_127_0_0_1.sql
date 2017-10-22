-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2017 at 08:08 AM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo_db`
--
CREATE DATABASE IF NOT EXISTS `demo_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `demo_db`;

-- --------------------------------------------------------

--
-- Table structure for table `usertbl`
--

DROP TABLE IF EXISTS `usertbl`;
CREATE TABLE IF NOT EXISTS `usertbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(16) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'chua co du lieu',
  `firstname` varchar(16) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'chua co du lieu',
  `gender` int(11) NOT NULL COMMENT '0 = nam, 1 = nu',
  `birthday` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `usertbl`
--

INSERT INTO `usertbl` (`id`, `lastname`, `firstname`, `gender`, `birthday`) VALUES
(1, 'Nguyen Van', 'A', 1, 20),
(2, 'Nguyen Van', 'B', 1, 19),
(3, 'Nguyen Van', 'C', 1, 18),
(4, 'Nguyen Van', 'D', 1, 21),
(5, 'Nguyen Van', 'E', 1, 22),
(6, 'Tran Anh', 'Quoc', 0, 15),
(7, 'Lê Văn', 'Tèo', 0, 20),
(8, 'Nguyen Dang', 'Khoa', 0, 35),
(9, 'Ngyuyen Thi', 'Ngoc Anh', 1, 20);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
