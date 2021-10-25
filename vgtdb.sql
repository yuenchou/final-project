DROP DATABASE IF EXISTS `vgtdb`;
create database vgtdb default character set utf8;
use vgtdb;

-- --------------------------------------------------------

CREATE TABLE `member` (
  `vgtid` int(7) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `vgtname` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `account` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `truename` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `birthdate` date NOT NULL,
  `trueid` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` char(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `auth` int(1) DEFAULT 1,
  `vgtpoint` int(11) DEFAULT NULL,
  `vgtpassword` varchar(30) NOT NULL,
  `eval` int(1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `member` (`vgtid`, `vgtname`, `account`, `password`, `truename`, `birthdate`, `trueid`, `email`, `phone`, `auth`, `vgtpoint`, `vgtpassword`) VALUES
(1, 'BigDip', 'user1', 'user1', '郭仕隆', '1995-01-05', 'A125365610', 'BigDip@gmail.com', '0952123548', 1, 5668, 'vgtuser1'),
(2, 'HoleyMole', 'user2', 'user2', '林雅芬', '1983-11-15', 'G100700575', 'HoleyMole@gmail.com', '0912568523', 1, 12852, 'vgtuser2'),
(3, 'Protesian', 'user3', 'user3', '吳政秀', '1994-02-19', 'H121731508', 'Protesian@gmail.com', '0958563257', 1, 8235, 'vgtuser3'),
(4, 'Slyrack', 'user4', 'user4', '楊郁軍', '1996-12-11', 'J186273984', 'Slyrack@gmail.com', '0978958526', 1, 8268, 'vgtuser4'),
(5, 'GuardianG', 'user5', 'user5', '張宗穎', '1988-10-15', 'P152600211', 'GuardianG@gmail.com', '0964251387', 1, 7385, 'vgtuser5'),
(6, 'HeroIce', 'user6', 'user6', '林肇鑫', '1992-04-08', 'S114646949', 'HeroIce@gmail.com', '0987628133', 1, 9268, 'vgtuser6'),
(7, 'Raspin', 'user7', 'user7', '林子純', '2000-03-11', 'R193645183', 'Raspin@gmail.com', '0965495135', 1, 25638, 'vgtuser7'),
(8, 'Guiderope', 'user8', 'user8', '李宜萍', '1997-09-02', 'U136506071', 'Guiderope@gmail.com', '0976521485', 1, 6265, 'vgtuser8'),
(9, 'AstraGirl', 'user9', 'user9', '林玉陽', '1989-05-30', 'Z185039632', 'AstraGirl@gmail.com', '0914628855', 1, 500, 'vgtuser9'),
(10, 'Evomind', 'user10', 'user10', '陸韋珮', '1977-08-31', 'D165448753', 'Evomind@gmail.com', '0966523585', 1, 7586, 'vgtuser10'),
(11, '盧睿欣', 'mananger01', 'manager01', '盧睿欣', '2000-01-01', 'A123456789', 'manager@gmail.com', '0912345678', 2, 0, 'manager01'),
(12, '陳家逵', 'mananger02', 'manager02', '陳家逵', '2000-01-01', 'A123456789', 'manager@gmail.com', '0912345678', 2, 0, 'manager02'),
(13, '胡家勳', 'mananger03', 'manager03', '胡家勳', '2000-01-01', 'A123456789', 'manager@gmail.com', '0912345678', 2, 0, 'manager03'),
(14, '林承義', 'mananger04', 'manager04', '林承義', '2000-01-01', 'A123456789', 'manager@gmail.com', '0912345678', 2, 0, 'manager04'),
(15, '趙軒弘', 'mananger05', 'manager05', '趙軒弘', '2000-01-01', 'A123456789', 'manager@gmail.com', '0912345678', 2, 0, 'manager05'),
(16, '周育恩', 'mananger06', 'manager06', '周育恩', '2000-01-01', 'A123456789', 'manager@gmail.com', '0912345678', 2, 0, 'manager06');

-- --------------------------------------------------------

CREATE TABLE `product` (
  `vgtid` int(7) NOT NULL,
  `productid` int(7) UNSIGNED ZEROFILL NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `gamelist` varchar(16) NOT NULL,
  `gameserver` varchar(16) NOT NULL,
  `producttitle` varchar(128) NOT NULL,
  `productclass` varchar(16) NOT NULL,
  `productdesc` varchar(1024) NOT NULL,
  `productprice` int(6) NOT NULL,
  `productquant` int(4) NOT NULL,
  `productdate` datetime DEFAULT CURRENT_TIMESTAMP,
  `productimg` varchar(1024),
  `producttoorder` int(1) NOT NULL DEFAULT 1,
  FOREIGN KEY (vgtid) REFERENCES member(vgtid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `product` (`vgtid`, `gamelist`, `gameserver`, `producttitle`, `productclass`, `productdesc`, `productprice`, `productquant`, `productdate`, `productimg`, `producttoorder`) VALUES
(1, '楓之谷', '普力特', '幻獸退谷-22星神秘幻獸棒-34%魔46B（高攻全榮耀）', '道具', '【練功打王首選】 僅此一個，此單直接下單購買即可', 11000, 1, '2021-09-09 18:02:53', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img062_slglvi.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img063_i3hhd2.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img058_bytku0.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img024_k3rtmz.png', 2),
(1, '楓之谷', '艾麗亞', '26%魔13%智三排可用小資花狐扇', '道具', '有興趣可洽談  直下單的話先詢問賣家是否方便', 2659, 1, '2021-09-11 10:41:52', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img006_qnix3o.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img002_c3vptk.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img001_un0o5m.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img004_nxzkvd.png', 2),
(1, '楓之谷', '愛麗西亞', '27全滅龍次頂傑諾', '道具', '如題 誠收可議', 6382, 1, '2021-09-11 12:53:10', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img063_i3hhd2.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img003_zpi0ma.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img060_gluvbk.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img061_n0y2o7.png', 2),
(1, '楓之谷', '殺人鯨', '256陰陽師退谷 這個月永順 常駐2000萬 戰地7920 4子帳 不分期', '帳號', '如題 誠收可議', 35000, 1, '2021-09-12 14:44:20', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img058_bytku0.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img059_gnbmg4.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img057_v9ee3h.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img056_uaybkl.png', 2),
(1, '楓之谷', '優伊娜', '15億楓幣=531元【1:282.485萬】玩家自賣純', '遊戲幣', '下單前可先提問 謝謝', 531, 10, '2021-09-13 17:01:12', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img055_htvrsz.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img054_j2fqls.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img053_sgo3q4.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img051_xnxvbx.png', 2),
(1, '楓之谷', '琉德', '神秘冥界幽靈古代之弓 頂%BOSS頂%無視次頂%物攻 低價 出清 ', '道具', '開拓退谷 低價出清 可直下 先小窗', 3191, 1, '2021-09-13 17:41:31', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img052_f7xfyu.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img049_nuvlci.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img050_kir7rs.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img048_ixq7us.png', 1),
(1, '楓之谷', '普力特', '275夜使退谷', '帳號', '戰地8000 永瞬 永鍊 優質內潛', 88888, 1, '2021-09-14 01:55:02', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img044_kscrna.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img046_qxeyl2.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img047_iso64e.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img045_javi8g.png', 1),
(1, '楓之谷', '艾麗亞', '39%敏滅龍 罕見附加5%敏 頂% ', '道具', '可議 東西在殺人鯨。全服幫轉', 13859, 1, '2021-09-14 01:55:02', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281084/vgtProudct/img040_n1avv7.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281084/vgtProudct/img038_ccffng.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281084/vgtProudct/img034_gijo8b.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281084/vgtProudct/img035_lhr0ih.png', 1),
(1, '楓之谷', '殺人鯨', '3.2億楓幣=100元馬上交易 快還要更快', '遊戲幣', '馬上交易 單在人在 直接下標免提問 最少須購買500以上', 100, 74, '2021-09-16 13:55:20', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img013_zi1wtj.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img009_sw9zlg.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img007_m8zetu.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img011_zhffqf.png', 1),
(1, '楓之谷', '艾麗亞', '39%花狐扇 雙傳', '道具', '價錢 如單 可以直接下單', 66666, 1, '2021-09-16 12:25:52', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img033_venhqm.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281084/vgtProudct/img036_saqvbt.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281084/vgtProudct/img037_tqduxo.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img032_t2gakh.png', 1),
(2, '楓之谷', '普力特', '275夜使退谷', '帳號', '戰地8000 永瞬 永鍊 優質內潛', 88888, 1, '2021-09-17 11:25:42', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img031_gtfoe7.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img030_ft4ydq.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img029_zvtqks.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img028_upjsav.png', 1),
(2, '楓之谷', '愛麗西亞', '【霍霍】24H極速代練台灣優質代練團隊', '代練', '優質代練團隊 歡迎提問', 100, 723, '2021-09-17 21:20:52', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img027_w9ev3f.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img026_folgzm.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img025_jouah8.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img024_k3rtmz.png', 1),
(2, '楓之谷', '優伊娜', '252夜光拆賣5000戰地1100arc核心快滿多點妝多頭多臉覺醒3武', '帳號', '此單提問單 勿下單 以上實收皆可談 點裝皆正品 沒有打到有想要的字出可提問', 15957, 1, '2021-09-18 13:26:02', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img023_hyqczi.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img018_hpgfcd.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img020_dgduew.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img021_nngkpy.png', 1),
(2, '楓之谷', '殺人鯨', '時尚 藍兔 浪漫澎澎 髮夾', '道具', '浪漫澎澎髮夾 150元 藍兔髮夾 150元 以上皆不含刀 含刀需加150元 下標請先提問', 150, 2, '2021-09-19 14:35:52', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img022_ucsjmy.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img019_trzc8h.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img016_aqqe4y.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img017_wifq1t.png', 1),
(2, '楓之谷', '優伊娜', '15億楓幣=531元【1:282.485萬】玩家自賣純', '遊戲幣', '下單前可先提問 謝謝', 531, 10, '2021-09-20 12:11:35', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img017_wifq1t.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img015_xhyave.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img012_eyejwl.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img014_wc3x7s.png', 1),
(2, '楓之谷', '殺人鯨', '武功認證的名譽勳章', '道具', '58個1100T 以上報價皆含手續費', 1100, 10, '2021-09-20 14:55:20', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img013_zi1wtj.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img009_sw9zlg.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img007_m8zetu.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img011_zhffqf.png', 1),
(2, '楓之谷', '普力特', '傳說神秘雙手斧英雄主武副武含武公/雙B一物/雙物一B/不拆賣含刀', '道具','素質如圖 卷軸全X，皆含刀，不拆賣，單在商品在', 12500, 1, '2021-09-20 15:11:35', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img006_qnix3o.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img002_c3vptk.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img001_un0o5m.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img004_nxzkvd.png', 1),
(2, '楓之谷', '琉德', '愛睡貓椅子/月光的劍豪椅子', '道具', '1:638T 以上報價皆含手續費，有興趣可留言約時間', 638, 2, '2021-09-21 08:52:35', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img010_w7e0mp.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img008_yvgxey.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img005_qgphru.png', 1),
(2, '楓之谷', '愛麗西亞', '30%幸頂腰', '道具', '30%頂腰900', 531, 10, '2021-09-21 12:51:35', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img063_i3hhd2.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281087/vgtProudct/img003_zpi0ma.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img060_gluvbk.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img061_n0y2o7.png', 1),
(2, '楓之谷', '琉德', '(急售)退谷出清 可愛史烏 寵物 B傷 已永久', '道具', '三隻一起都B傷不含刀3191，有三件70物攻裝出剪就送，不拆賣', 3191, 1, '2021-09-21 13:31:55', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img058_bytku0.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img059_gnbmg4.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img057_v9ee3h.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img056_uaybkl.png', 1),
(3, '楓之谷', '艾麗亞', '戰女 未整 無透耳 含刀', '道具', '下單後隨時方便交易', 2500, 1, '2021-09-21 15:41:35', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img055_htvrsz.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img054_j2fqls.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281086/vgtProudct/img053_sgo3q4.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img051_xnxvbx.png', 1),
(3, '楓之谷', '殺人鯨', '退谷賣 L耳 LCD耳 露希妲耳環交換券', '道具', '下單前可先提問 謝謝', 531, 10, '2021-09-21 16:11:35', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img052_f7xfyu.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img049_nuvlci.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img050_kir7rs.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281085/vgtProudct/img048_ixq7us.png', 1),
(3, '楓之谷', '普力特', '雙傳天上次頂%敏22星2V4X白4含剪刀一弓箭手破風開拓精靈狂暴神射箭神', '道具', '物在優 轉車等事項可討論 25000實收含刀', 250000, 1, '2021-09-21 17:11:35', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img027_w9ev3f.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img026_folgzm.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img025_jouah8.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img024_k3rtmz.png', 1),
(3, '楓之谷', '殺人鯨', '退谷賣 L耳 LCD耳 露希妲耳環交換券', '道具', '下單前可先提問 謝謝', 531, 10, '2021-09-17 12:11:35', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img022_ucsjmy.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img019_trzc8h.png', 1),
(4, '楓之谷', '艾麗亞', '39%花狐扇 雙傳', '道具', '價錢 如單 可以直接下單', 66666, 1, '2021-09-16 12:25:52', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img033_venhqm.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281084/vgtProudct/img036_saqvbt.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281084/vgtProudct/img037_tqduxo.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img032_t2gakh.png', 1),
(4, '楓之谷', '普力特', '275夜使退谷', '帳號', '戰地8000 永瞬 永鍊 優質內潛', 88888, 1, '2021-09-17 11:25:42', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img031_gtfoe7.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img030_ft4ydq.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img029_zvtqks.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img028_upjsav.png', 1),
(4, '楓之谷', '愛麗西亞', '【霍霍】24H極速代練台灣優質代練團隊', '代練', '優質代練團隊 歡迎提問', 100, 723, '2021-09-17 21:20:52', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img027_w9ev3f.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281083/vgtProudct/img026_folgzm.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img025_jouah8.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img024_k3rtmz.png', 1),
(5, '楓之谷', '優伊娜', '252夜光拆賣5000戰地1100arc核心快滿多點妝多頭多臉覺醒3武', '帳號', '此單提問單 勿下單 以上實收皆可談 點裝皆正品 沒有打到有想要的字出可提問', 15957, 1, '2021-09-18 13:26:02', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img023_hyqczi.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img018_hpgfcd.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img020_dgduew.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img021_nngkpy.png', 1),
(5, '楓之谷', '殺人鯨', '時尚 藍兔 浪漫澎澎 髮夾', '道具', '浪漫澎澎髮夾 150元 藍兔髮夾 150元 以上皆不含刀 含刀需加150元 下標請先提問', 150, 2, '2021-09-19 14:35:52', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img022_ucsjmy.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img019_trzc8h.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281082/vgtProudct/img016_aqqe4y.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img017_wifq1t.png', 1),
(5, '楓之谷', '優伊娜', '15億楓幣=531元【1:282.485萬】玩家自賣純', '遊戲幣', '下單前可先提問 謝謝', 531, 10, '2021-09-20 12:11:35', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img017_wifq1t.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img015_xhyave.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img012_eyejwl.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img014_wc3x7s.png', 1),
(5, '楓之谷', '殺人鯨', '武功認證的名譽勳章', '道具', '58個1100T 以上報價皆含手續費', 1100, 10, '2021-09-20 14:55:20', 'https://res.cloudinary.com/domzm9awh/image/upload/v1633281081/vgtProudct/img013_zi1wtj.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img009_sw9zlg.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img007_m8zetu.png, https://res.cloudinary.com/domzm9awh/image/upload/v1633281080/vgtProudct/img011_zhffqf.png', 1);


-- --------------------------------------------------------

CREATE TABLE `productcmmt` (
  `cmmtid` int(7) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `productid` int(7) ZEROFILL NOT NULL,
  `vgtid` int(7) NOT NULL,
  `cmmtauth` int(1) NOT NULL,
  `cmmtdesc` varchar(256) NOT NULL,
  `cmmtdate` datetime DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (productid) REFERENCES product(productid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `productcmmt` (`productid`, `vgtid`, `cmmtauth`, `cmmtdesc`, `cmmtdate`) VALUES
(0000001, 2, 1, '商品還在嗎?', '2021-09-15 07:16:43'),
(0000001, 1, 2, '單在物在', '2021-09-15 07:17:12'),
(0000002, 3, 1, '50收', '2021-09-15 07:17:28'),
(0000003, 4, 1, '50收', '2021-09-15 07:18:35'),
(0000004, 5, 1, '50收', '2021-09-15 07:18:35'),
(0000005, 6, 1, '50收', '2021-09-15 07:18:35'),
(0000006, 7, 1, '50收', '2021-09-15 07:18:35');

-- --------------------------------------------------------

CREATE TABLE `productcmmtreply` (
  `replyid` int(7) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `cmmtid` int(7) NOT NULL,
  `productid` int(7) ZEROFILL NOT NULL,
  `vgtid` int(7) NOT NULL,
  `replydesc` varchar(256) NOT NULL,
  `replydate` datetime DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cmmtid) REFERENCES productcmmt(cmmtid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
--
-- 傾印資料表的資料 `productcmmtreply`
--

INSERT INTO `productcmmtreply` (`replyid`, `cmmtid`, `productid`, `vgtid`, `replydesc`, `replydate`) VALUES
(1, 1, 0000001, 1, '剩最後一件唷！', '2021-10-04 02:07:31');

--
-- 已傾印資料表的索引
--