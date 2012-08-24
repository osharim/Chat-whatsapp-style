-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 24-08-2012 a las 20:36:36
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=18 ;

--
-- Volcado de datos para la tabla `chat`
--

INSERT INTO `chat` (`id_chat`, `id_user_writer`, `id_user_reader`, `msg`, `fecha`) VALUES
(1, 1, 2, 'Hola amor de mi vida buenos dias\n', 1345570568),
(2, 1, 2, 'apenas es un prototipo pero ya podremos conversar! :) te amo preciosa\n', 1345570583),
(3, 1, 2, 'Hola desde el iPod \n', 1345573028),
(4, 1, 2, 'A lo que salga se le suma 1 hora\n', 1345573160),
(5, 1, 2, 'ya llegue a casa\n', 1345587550),
(6, 1, 2, 'y ahora que sigue=\n', 1345587556),
(7, 1, 2, 'todo funciona bien , pero solo platico yo\n', 1345587566),
(8, 1, 2, 'hola\n', 1345588035),
(9, 1, 2, 'como estas preciosa\n', 1345588217),
(10, 1, 2, 'hola\n', 1345588447),
(11, 1, 2, 's\n', 1345591851),
(12, 1, 2, 'p\n', 1345595827),
(13, 1, 2, 'desde a\n', 1345611272),
(14, 1, 1, 'desde b\n', 1345795152),
(15, 1, 1, 'apenas es un prototipo pero ya podremos conversar! :) te amo preciosa , apenas es un prototipo pero ya podremos conversar! :) te amo preciosa \n', 1345835665),
(16, 1, 1, '<img src="http://www.forodefotos.com/attachments/naturaleza/12983d1281113830-fotos-de-paisaje-fotos-de-paisaje.jpg">\n', 1345842827),
(17, 1, 1, '<img src="http://www.journalduloft.com/wp-content/immobilier-loft/2010/08/wassabi-design-agency.jpg"\n>', 1345844150);

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
  `id_user_writer` int(11) NOT NULL,
  `id_user_reader` int(11) NOT NULL,
  `id_chat` int(11) NOT NULL,
  PRIMARY KEY (`id_notify`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci AUTO_INCREMENT=37 ;

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
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='usuarios' AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `fecha`, `email`) VALUES
(1, 'omar', '73a00e10b9223edc807c3a96cc6a2077', 1345784327, 'oamr@df.cm'),
(4, 'sdf', 'd9729feb74992cc3482b350163a1a010', 1345784675, 'oamr@df.cm'),
(5, 'sdfsdf', 'd58e3582afa99040e27b92b13c8f2280', 1345784698, 'oamr@df.cm'),
(6, 'marile', '73a00e10b9223edc807c3a96cc6a2077', 1345784740, 'oamr@df.cm');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
