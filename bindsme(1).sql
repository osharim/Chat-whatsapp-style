-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 28-08-2012 a las 04:11:39
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `bindsme`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chat`
--

CREATE TABLE IF NOT EXISTS `chat` (
  `id_chat` int(11) NOT NULL AUTO_INCREMENT,
  `id_user_writer` int(11) NOT NULL,
  `id_user_reader` int(11) NOT NULL,
  `msg` text COLLATE utf8_spanish_ci NOT NULL,
  `fecha` int(11) NOT NULL,
  PRIMARY KEY (`id_chat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `id_contact` int(11) NOT NULL AUTO_INCREMENT,
  `id_current_user` int(11) NOT NULL,
  `id_added_user` int(11) NOT NULL,
  PRIMARY KEY (`id_contact`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `group`
--

CREATE TABLE IF NOT EXISTS `group` (
  `id_group` int(11) NOT NULL AUTO_INCREMENT,
  `id_own_user` int(11) NOT NULL,
  `name_group` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` int(11) NOT NULL,
  PRIMARY KEY (`id_group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='el usuario crea grupos' AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notify`
--

CREATE TABLE IF NOT EXISTS `notify` (
  `id_notify` int(11) NOT NULL AUTO_INCREMENT,
  `id_chat` int(11) NOT NULL,
  `notified` int(1) NOT NULL,
  PRIMARY KEY (`id_notify`)
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `relationship_group`
--

CREATE TABLE IF NOT EXISTS `relationship_group` (
  `id_relationship_group` int(11) NOT NULL AUTO_INCREMENT,
  `id_group` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_relationship_group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(35) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` int(11) NOT NULL,
  `email` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `user_pic` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='usuarios' AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `fecha`, `email`, `user_pic`) VALUES
(1, 'omar', '73a00e10b9223edc807c3a96cc6a2077', 1345784327, 'oamr@df.cm', 'img/user.jpg'),
(4, 'sdf', 'd9729feb74992cc3482b350163a1a010', 1345784675, 'oamr@df.cm', 'img/user.jpg'),
(5, 'sdfsdf', 'd58e3582afa99040e27b92b13c8f2280', 1345784698, 'oamr@df.cm', 'img/user.jpg'),
(6, 'marile', '73a00e10b9223edc807c3a96cc6a2077', 1345784740, 'oamr@df.cm', 'img/user.jpg'),
(8, 'demo', '73a00e10b9223edc807c3a96cc6a2077', 1346106995, 'omar@gmail.com', 'img/user.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
