-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2017 at 03:48 AM
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `usertbl`
--

INSERT INTO `usertbl` (`id`, `lastname`, `firstname`, `gender`, `birthday`) VALUES
(1, 'Nguyen Van', 'Anh', 0, 20),
(2, 'Nguyễn Văn', 'Bình', 0, 19),
(3, 'Nguyễn Văn', 'Cường', 0, 18),
(4, 'Nguyễn Văn', 'Dũng', 0, 21),
(5, 'Nguyen Thị', 'Uyên', 1, 22),
(6, 'Tran Anh', 'Quoc', 0, 21),
(7, 'Lê Văn', 'Tèo', 0, 20),
(8, 'Nguyen Dang', 'Khoa', 0, 35),
(11, 'Nguyen Van', 'Minh', 0, 25),
(12, 'Nguyen Van', 'Tai', 0, 23),
(13, 'Le Van', 'Tam', 0, 30),
(14, 'Le Anh', 'Tuan', 0, 41),
(15, 'Nguyen Thi', 'Huyen', 1, 32),
(17, 'Trần Thị', 'Ái', 1, 21),
(18, 'Nguyen Hong', 'Thiet', 0, 23),
(19, 'Ngô Đắc Quốc', 'Dũng', 0, 24),
(20, 'Lê Anh', 'Tuấn', 0, 45),
(21, 'Hoàng Thanh', 'Phương', 0, 23);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
