/*!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.11.8-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: dashboard
-- ------------------------------------------------------
-- Server version	11.6.2-MariaDB-ubu2404

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `dashboard`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `dashboard` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;

USE `dashboard`;

--
-- Table structure for table `sso_connections`
--

DROP TABLE IF EXISTS `sso_connections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sso_connections` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `token` text DEFAULT NULL,
  `expiration` datetime DEFAULT NULL,
  `lifespan` bigint(20) unsigned DEFAULT NULL,
  `refresh_link` text DEFAULT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `service_id` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sso_connections`
--

LOCK TABLES `sso_connections` WRITE;
/*!40000 ALTER TABLE `sso_connections` DISABLE KEYS */;
/*!40000 ALTER TABLE `sso_connections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sso_oauth`
--

DROP TABLE IF EXISTS `sso_oauth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sso_oauth` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `provider_name` text DEFAULT NULL,
  `client_id` text NOT NULL,
  `client_secret` text NOT NULL,
  `provider_scope` text DEFAULT NULL,
  `authorisation_base_url` text NOT NULL,
  `token_grabber_base_url` text NOT NULL,
  `user_info_base_url` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sso_oauth_unique` (`client_id`) USING HASH,
  UNIQUE KEY `sso_oauth_unique_1` (`client_secret`) USING HASH,
  UNIQUE KEY `sso_oauth_unique_2` (`authorisation_base_url`) USING HASH,
  UNIQUE KEY `sso_oauth_unique_3` (`token_grabber_base_url`) USING HASH,
  UNIQUE KEY `sso_oauth_unique_4` (`user_info_base_url`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sso_oauth`
--

LOCK TABLES `sso_oauth` WRITE;
/*!40000 ALTER TABLE `sso_oauth` DISABLE KEYS */;
INSERT INTO `sso_oauth` VALUES
(1,'github','Ov23liRvtedfziS9zU4K','38de36ba9d589a8699b72ea739870cdbbeafbec2','user:email repo read:org','https://github.com/login/oauth/authorize','https://github.com/login/oauth/access_token','https://api.github.com/user/emails');
/*!40000 ALTER TABLE `sso_oauth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_widgets`
--

DROP TABLE IF EXISTS `user_widgets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_widgets` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `widget_id` bigint(20) unsigned NOT NULL,
  `token` text DEFAULT NULL,
  `widget_index` bigint(20) unsigned NOT NULL,
  `widget_option` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_widgets`
--

LOCK TABLES `user_widgets` WRITE;
/*!40000 ALTER TABLE `user_widgets` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_widgets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` text DEFAULT NULL,
  `email` text NOT NULL,
  `password` text DEFAULT NULL,
  `token` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_unique` (`email`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `widgets`
--

DROP TABLE IF EXISTS `widgets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `widgets` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `widget_name` text NOT NULL,
  `widget_link` text NOT NULL,
  `sso` tinyint(1) DEFAULT NULL,
  `api_key` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_widgets_unique` (`widget_name`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `widgets`
--

LOCK TABLES `widgets` WRITE;
/*!40000 ALTER TABLE `widgets` DISABLE KEYS */;
INSERT INTO `widgets` VALUES
(1,'weather','google.com',NULL,'63adefcfe6e903d050ae3e0bb194af35');
/*!40000 ALTER TABLE `widgets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-07  0:13:21
