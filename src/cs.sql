-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.5.18-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 导出  表 fitness_bms.ams_admin 结构
CREATE TABLE IF NOT EXISTS `ams_admin` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '数据id',
  `username` varchar(50) DEFAULT NULL COMMENT '用户名',
  `password` char(64) DEFAULT NULL COMMENT '密码（密文）',
  `nickname` varchar(50) DEFAULT NULL COMMENT '昵称',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像URL',
  `phone` varchar(50) DEFAULT NULL COMMENT '手机号码',
  `email` varchar(50) DEFAULT NULL COMMENT '电子邮箱',
  `description` varchar(255) DEFAULT NULL COMMENT '简介',
  `enable` tinyint(3) unsigned DEFAULT 0 COMMENT '是否启用，1=启用，0=未启用',
  `last_login_ip` varchar(50) DEFAULT NULL COMMENT '最后登录IP地址（冗余）',
  `login_count` int(10) unsigned DEFAULT 0 COMMENT '累计登录次数（冗余）',
  `gmt_last_login` datetime DEFAULT NULL COMMENT '最后登录时间（冗余）',
  `gmt_create` datetime DEFAULT NULL COMMENT '数据创建时间',
  `gmt_modified` datetime DEFAULT NULL COMMENT '数据最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='管理员';

-- 正在导出表  fitness_bms.ams_admin 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `ams_admin` DISABLE KEYS */;
INSERT INTO `ams_admin` (`id`, `username`, `password`, `nickname`, `avatar`, `phone`, `email`, `description`, `enable`, `last_login_ip`, `login_count`, `gmt_last_login`, `gmt_create`, `gmt_modified`) VALUES
	(1, 'root', '$2a$10$N.ZOn9G6/YLFixAOPMg/h.z7pCu6v2XyFDtC4q.jeeGm/TEZyj15C', '系统管理员', 'https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', '13900139001', 'root@baidu.com', '最高权限的管理员', 1, NULL, 0, NULL, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(2, 'rose', '$2a$10$N.ZOn9G6/YLFixAOPMg/h.z7pCu6v2XyFDtC4q.jeeGm/TEZyj15C', '超级管理员', 'https://img0.baidu.com/it/u=1600969112,4145041554&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', '13900139002', 'super_admin@baidu.cn', '超级管理员，通常具有除了【管理管理员】以外的全部权限', 1, NULL, 0, NULL, '2022-07-08 11:30:44', '2022-07-08 11:30:44');
/*!40000 ALTER TABLE `ams_admin` ENABLE KEYS */;

-- 导出  表 fitness_bms.ams_admin_role 结构
CREATE TABLE IF NOT EXISTS `ams_admin_role` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '数据id',
  `admin_id` bigint(20) unsigned DEFAULT NULL COMMENT '管理员id',
  `role_id` bigint(20) unsigned DEFAULT NULL COMMENT '角色id',
  `gmt_create` datetime DEFAULT NULL COMMENT '数据创建时间',
  `gmt_modified` datetime DEFAULT NULL COMMENT '数据最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='管理员角色关联';

-- 正在导出表  fitness_bms.ams_admin_role 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `ams_admin_role` DISABLE KEYS */;
INSERT INTO `ams_admin_role` (`id`, `admin_id`, `role_id`, `gmt_create`, `gmt_modified`) VALUES
	(1, 1, 1, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(2, 2, 2, '2022-07-08 11:30:44', '2022-07-08 11:30:44');
/*!40000 ALTER TABLE `ams_admin_role` ENABLE KEYS */;

-- 导出  表 fitness_bms.ams_permission 结构
CREATE TABLE IF NOT EXISTS `ams_permission` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '数据id',
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `value` varchar(255) DEFAULT NULL COMMENT '值',
  `description` varchar(255) DEFAULT NULL COMMENT '简介',
  `sort` tinyint(3) unsigned DEFAULT 0 COMMENT '排序序号',
  `gmt_create` datetime DEFAULT NULL COMMENT '数据创建时间',
  `gmt_modified` datetime DEFAULT NULL COMMENT '数据最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='权限';

-- 正在导出表  fitness_bms.ams_permission 的数据：~7 rows (大约)
/*!40000 ALTER TABLE `ams_permission` DISABLE KEYS */;
INSERT INTO `ams_permission` (`id`, `name`, `value`, `description`, `sort`, `gmt_create`, `gmt_modified`) VALUES
	(1, '后台管理-管理员-读取', '/ams/admin/read', '读取管理员信息，含查看列表、查看详情，及其它查询操作', 255, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(2, '后台管理-管理员-添加', '/ams/admin/add-new', '添加管理员', 254, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(3, '后台管理-管理员-删除', '/ams/admin/delete', '删除管理员', 253, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(4, '后台管理-管理员-修改', '/ams/admin/update', '修改管理员信息，含修改密码、启用、禁用、修改基本资料，及其它修改操作', 252, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(25, '发文章', '/add/article', '文章发布', 251, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(26, '删文章', '/delete/article', '文章删除', 250, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(27, '改文章', '/update/article', '文章修改', 249, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(28, '文章类别的权限', '/articleCategory', '添加或者删除文章类别或修改', 243, '2022-07-08 11:30:44', '2022-07-08 11:30:44');
/*!40000 ALTER TABLE `ams_permission` ENABLE KEYS */;

-- 导出  表 fitness_bms.ams_role 结构
CREATE TABLE IF NOT EXISTS `ams_role` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '数据id',
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `description` varchar(255) DEFAULT NULL COMMENT '简介',
  `sort` tinyint(3) unsigned DEFAULT 0 COMMENT '排序序号',
  `gmt_create` datetime DEFAULT NULL COMMENT '数据创建时间',
  `gmt_modified` datetime DEFAULT NULL COMMENT '数据最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='角色';

-- 正在导出表  fitness_bms.ams_role 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `ams_role` DISABLE KEYS */;
INSERT INTO `ams_role` (`id`, `name`, `description`, `sort`, `gmt_create`, `gmt_modified`) VALUES
	(1, '系统管理员', '最高权限的管理员角色，应该关联所有权限', 255, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(2, '发文章的牛马管理员', '发发文章', 255, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(7, '啥也不是的管理员', '只能看，啥也干不了', 231, '2022-07-08 11:30:44', '2022-07-08 11:30:44');
/*!40000 ALTER TABLE `ams_role` ENABLE KEYS */;

-- 导出  表 fitness_bms.ams_role_permission 结构
CREATE TABLE IF NOT EXISTS `ams_role_permission` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '数据id',
  `role_id` bigint(20) unsigned DEFAULT NULL COMMENT '角色id',
  `permission_id` bigint(20) unsigned DEFAULT NULL COMMENT '权限id',
  `gmt_create` datetime DEFAULT NULL COMMENT '数据创建时间',
  `gmt_modified` datetime DEFAULT NULL COMMENT '数据最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='角色权限关联';

-- 正在导出表  fitness_bms.ams_role_permission 的数据：~9 rows (大约)
/*!40000 ALTER TABLE `ams_role_permission` DISABLE KEYS */;
INSERT INTO `ams_role_permission` (`id`, `role_id`, `permission_id`, `gmt_create`, `gmt_modified`) VALUES
	(1, 1, 1, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(2, 1, 2, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(3, 1, 3, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(4, 1, 4, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(5, 1, 25, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(6, 1, 26, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(7, 1, 27, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(8, 2, 25, '2022-07-08 11:30:44', '2022-07-08 11:30:44'),
	(65, 1, 28, '2022-07-08 11:30:44', '2022-07-08 11:30:44');
/*!40000 ALTER TABLE `ams_role_permission` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
