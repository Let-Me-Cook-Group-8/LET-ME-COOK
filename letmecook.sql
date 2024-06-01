-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: letmecook
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `congthuc`
--

DROP TABLE IF EXISTS `congthuc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `congthuc` (
  `recipe_id` int NOT NULL AUTO_INCREMENT,
  `type_food` varchar(50) DEFAULT NULL,
  `name_food` varchar(50) DEFAULT NULL,
  `time_cook` int DEFAULT NULL,
  `image_url` varchar(300) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `main_ingredients` varchar(50) DEFAULT NULL,
  `nguyenlieu` varchar(500) DEFAULT NULL,
  `huongdan` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`recipe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `congthuc`
--

LOCK TABLES `congthuc` WRITE;
/*!40000 ALTER TABLE `congthuc` DISABLE KEYS */;
INSERT INTO `congthuc` VALUES (10,'Soups','Phở',60,'https://www.allrecipes.com/thmb/3UxcZ4tvi4WQEjm1q3PyEyfy5Fw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/57354-Beef-Pho-DDMFS-3x4-0615-49503be6698c4771a88400caa1c45795.jpg',5,'bò','2.5 kg xương bò; 1 thìa muối; thịt bò thăn: 500 gram; hành tây: 200gram; Bánh phở: 500gram; Gia vị: bộ ngọt,đường,muối,tiêu...','Chuẩn bị nguyên liệu: Thịt rửa sạch, sau đó ngâm vào nước lạnh khoảng 1 giờ để loại bỏ máu; Hành tây băm nhỏ; Đậu phụ cắt lát mỏng; Gừng lột vỏ, cắt lát; Rau sống rửa sạch, để ráo nước.\nNấu nước dùng: Đun sôi nước, sau đó cho thịt vào luộc sơ qua để loại bỏ bọt; Đổ nước mới vào nồi, đun sôi, thêm hành tây, gừng, lá quế, đinh hương, hạt tiêu và hạt nêm vào nồi; Hạ lửa, nấu trong khoảng 1-1,5 giờ cho nước dùng thơm và đậm đà; Nêm thêm muối nếu cần.\nChế biến đậu phụ: Đậu phụ chiên vàng hoặc đậu phụ luộc sơ qua.\nChế biến bún phở: Bún phở tráng qua nước sôi, để ráo nước và giữ ấm.\nChế biến rau sống: Rau sống cắt nhỏ, sắt kỹ.\nLấy thịt ra: Khi thịt đã mềm, lấy thịt ra để nguội, sau đó cắt thành từng lát mỏng.\nLấy nước dùng ra: Dùng chảo lọc để lấy nước dùng phở ra, bỏ đi các cặn.'),(11,'Suops','Phở gà',60,'https://www.allrecipes.com/thmb/yzmzoM__8NOzU_VQXj5BieZiiow=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4176753-e12f8919ab2b46b19e34674609688f0b.jpg',4,'gà','2.5 kg xương bò; 1 thìa muối; thịt bò thăn: 500 gram; hành tây: 200gram; Bánh phở: 500gram; Gia vị: bộ ngọt,đường,muối,tiêu...',NULL),(12,'Bánh mì','Bánh mì thịt heo quay',10,'https://www.allrecipes.com/thmb/gy_1D9SeGwv3MeJ6Rov_zbXT6Rw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/roasted-pork-banh-mi-vietnamese-sandwitch-ddmfs-3X4-0332-cfb4d2e149e7476ab2a2b4030c543f1b.jpg',5,'lợn','Thịt ba chỉ; Bột ngũ vị hương; Rượu trắng; Hành,tỏi băm; Nước cốt chanh; Gia vị; Dưa leo và rau sống ăn kèm','Chuẩn bị nguyên liệu: Thịt rửa sạch, sau đó ngâm vào nước lạnh khoảng 1 giờ để loại bỏ máu; Hành tây băm nhỏ; Đậu phụ cắt lát mỏng; Gừng lột vỏ, cắt lát; Rau sống rửa sạch, để ráo nước.\nNấu nước dùng: Đun sôi nước, sau đó cho thịt vào luộc sơ qua để loại bỏ bọt; Đổ nước mới vào nồi, đun sôi, thêm hành tây, gừng, lá quế, đinh hương, hạt tiêu và hạt nêm vào nồi; Hạ lửa, nấu trong khoảng 1-1,5 giờ cho nước dùng thơm và đậm đà; Nêm thêm muối nếu cần.\nChế biến đậu phụ: Đậu phụ chiên vàng hoặc đậu phụ luộc sơ qua.\nChế biến bún phở: Bún phở tráng qua nước sôi, để ráo nước và giữ ấm.\nChế biến rau sống: Rau sống cắt nhỏ, sắt kỹ.\nLấy thịt ra: Khi thịt đã mềm, lấy thịt ra để nguội, sau đó cắt thành từng lát mỏng.\nLấy nước dùng ra: Dùng chảo lọc để lấy nước dùng phở ra, bỏ đi các cặn.'),(13,'Bánh cuộn','Nem rán',15,'https://www.allrecipes.com/thmb/ZObxiibRXkDiaz0KDxJJquMLCiM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1920x691:1922x693):format(webp)/245343_AuthenticVietnameseSpringRolls_ddmf_01_4x3_JD_5538-f1bbd0a7f8924959a2498f19ed93bc95.jpg',5,'lợn','500g thịt heo quay; 5g miến dong; 10g mộc nhĩ, nấm hương; 1 củ cà rốt; 2 quả trứng gà; 20g giá đỗ; 10g hành lá; Bún ăn kèm; Gia vị,dầu ăn','Chuẩn bị nguyên liệu: Lấy bánh mì ra khỏi hộp, chuẩn bị các nguyên liệu như thịt bò, thịt gà hoặc thịt heo (tùy sở thích), rau sống như cà chua, dưa leo, hành tây, rau mầm, rau sống khác như rau cải, rau diếp, rau ngò, sốt mayonnaise, sốt ớt, muối, tiêu, dầu ăn.\nChế biến thịt: Nướng thịt bò hoặc gà trên bếp hoặc lò nướng cho thật chín vàng, sau đó cắt thành lát mỏng.\nChế biến rau sống: Rửa sạch các loại rau, cắt nhỏ hoặc băm nhỏ tùy thích.\nChuẩn bị bánh mì: Cắt bánh mì theo chiều dài, mở ra, xoa một lớp sốt mayonnaise hoặc sốt ớt lên mỗi mặt bánh mì.\nLắp ráp bánh mì: Đặt lát thịt đã nướng lên một mặt bánh mì, sau đó xếp các loại rau sống lên trên thịt, có thể thêm muối và tiêu tùy khẩu vị.\nHoàn thành: Đặt mặt bánh mì còn lại lên trên, nhẹ nhàng bóp lại để bánh mì đồng đều và thêm phần ngon miệng.\nThưởng thức: Cắt bánh mì ra thành từng phần nhỏ, bày ra đĩa, thưởng thức cùng với sốt mayonnaise hoặc sốt ớt, có thể kèm theo cà chua hoặc dưa leo.'),(14,'Kho','Thịt kho trứng',60,'https://www.allrecipes.com/thmb/PNAdrd_TamwSset2lZhnEoo9HQ8=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/8143898-74c72a375e424fbfbf6bf7a072661b21.jpg',4,'lợn','1kg thị ba chỉ; 30 quả trứng cút; 1.3-1.5 lít nước dừa tươi; 4-5 củ hành khô; 1/2 quả chanh tươi; Muối hạt; Gia vị','Chuẩn bị nguyên liệu:\n\nThịt ba chỉ rửa sạch, cắt thành từng miếng vuông khoảng 3-4 cm; Trứng luộc chín, bóc vỏ; Hành khô và tỏi băm nhỏ; Hành lá cắt khúc.\nƯớp thịt:\n\nƯớp thịt với 2 muỗng nước mắm, 1 muỗng đường, 1 muỗng hạt nêm, ít tiêu, và hành khô, tỏi băm; Trộn đều và để ngấm gia vị trong khoảng 30 phút.\nLàm nước màu (caramel):\n\nCho 2 muỗng đường vào chảo, đun nhỏ lửa cho đến khi đường tan chảy và chuyển sang màu cánh gián; Thêm một chút nước vào khuấy đều để tạo nước màu.\nNấu thịt:\n\nĐun nóng một ít dầu ăn trong nồi, cho hành khô và tỏi vào phi thơm; Cho thịt đã ướp vào đảo đều cho săn lại; Thêm nước màu vào đảo đều, tiếp tục đun cho thịt thấm màu.\nKho thịt:\n\nĐổ nước dừa vào nồi, sao cho ngập thịt; Nếu dùng nước dừa lon thì thêm nước lọc cho đủ; Thêm trứng đã luộc vào nồi; Đun sôi, sau đó hạ lửa nhỏ, kho từ 1-1,5 tiếng cho đến khi thịt mềm và nước sệt lại; Nêm lại gia vị cho vừa ăn, có thể thêm chút nước mắm hoặc đường nếu cần.\nHoàn thành:\n\nThêm hành lá cắt khúc vào nồi, đảo nhẹ; Tắt bếp và để món ăn ngấm gia vị thêm một chút trước khi dọn ra.\nThưởng thức:\n\nMúc thịt kho trứng ra đĩa, ăn kèm với cơm trắng và rau sống.'),(15,'Chiên rán','Bánh xèo',60,'https://www.allrecipes.com/thmb/Zou2_KJ2hUPTnxkLpai-rvyyYJE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Banh-Xeo-2000-a3340e73ebbc4dac950f3f0976718fce.jpg',4,'Hải sản',NULL,'Chuẩn bị nguyên liệu: Chuẩn bị gạo nếp, nước cốt dừa, bột nghệ, hành lá, rau sống như rau thơm, rau muống, giá đỗ, hành phi, tôm, thịt heo hoặc thịt ba chỉ, và bánh xèo tươi.\nChế biến nhân: Thái nhỏ thịt heo hoặc thịt ba chỉ, pha với ít nước mắm và đường, ướp khoảng 15-20 phút; Cắt tôm làm sạch, băm nhỏ; Hành lá cắt nhỏ.\nChế biến bánh xèo: Trộn bột gạo nếp với nước cốt dừa, thêm một ít bột nghệ để tạo màu và thơm; Nếu cần, thêm ít nước muối vào hỗn hợp.\nNướng bánh xèo: Đun nóng chảo, thêm một ít dầu ăn, sau đó cho một ít hành phi vào; Khi dầu nóng, cho một lớp bột xèo vào chảo, chuyển chảo để bột phủ đều, sau đó thêm nhân gồm thịt và tôm vào trên bề mặt bánh xèo.\nThêm rau: Khi bánh đã chín một nửa, thêm rau sống và hành lá lên trên bề mặt bánh xèo, sau đó gấp bánh xèo thành hình nửa tròn.\nNướng đến khi vàng ươm: Tiếp tục nướng bánh xèo cho đến khi mặt dưới vàng ươm và giòn, sau đó lật bánh để nướng mặt trên.\nHoàn thành: Khi bánh xèo đã vàng đều cả hai mặt, gấp bánh xèo lại và mang ra đĩa, dùng nóng kèm với nước mắm pha chua ngọt.\n'),(16,'Cơm','Cơm tấm sườn',30,'https://www.allrecipes.com/thmb/gdgJ3WCppAC55KxeN_pFdvyZ1Cs=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1631x0:1633x2):format(webp)/5209306-c59b9ca5beb1400ba040cae5f5253cec.jpg',5,'Lợn','300g gạo tẻ; 1kg sườn cốt lết; 3 nhánh sả; 8 tép tỏi; 2 củ hành khô; 1 quả ớt; Gia vị; Cơm trăng',NULL),(17,'Salad','Salad gà',30,'https://www.allrecipes.com/thmb/WLWWgtg4OJGD9KMlYA5_bLXacYI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(539x0:541x2):format(webp)/214225-Vietnamese-Chicken-Salad-Catkin_561188_original-1x1-1-30ba6bf75ccc441e91ccba9a11e670b3.jpg',3,'gà','Rau xà lách 100g; Cà chua bi 7-8 quả; 1/2 bắp cải tím; nước sốt mè rang; Gà luộc xé',NULL),(18,'Soups','Mì tôm trứng',10,'https://cdn-www.vinid.net/2020/10/8899be52-m%C3%AC-t%C3%B4m-tr%E1%BB%A9ng.jpg',5,'Mì','1 gói mì tô; 1 quả trừng gà; hành ngò; nước sôi',NULL),(19,'Suops','Canh cà chua trứng',30,'https://thucthan.com/media/2019/08/canh-ca-chua-trung/canh-ca-chua-trung.jpg',4,'Rau củ','Trứng gà: 3 quả; Cà chua: 5 quả; Hành lá Mùi ta (ngò rí); Hành khô: 3 củ; Gia vị: Nước mắm, bột ngọt, bột canh; Rau sống ăn kèm (nếu có)',NULL),(20,'Kho','Cá kho dưa',60,'https://cookbeo.com/media/2021/05/ca-chep-kho-dua/thumbnails/ca-chep-kho-dua-16x9-500.webp',3,'Hải sản','1,2kg cá chép; 4 bát ăn cơm dưa chua ~ 1 tô to; 300g thịt ba chỉ; 2-3 quả ớt tươi; 5-6 củ hành khô; 1 củ gừng; Gia vị: Nước mắm, nước tương (xì dầu), bột ngọt, đường, tiêu xay, dầu màu điều, nước hàng (nước màu)',NULL),(21,'Xào','Mực xào sả ớt',45,'https://cookbeo.com/media/2021/05/muc-xao-sa-ot/thumbnails/dia-muc-xao-sa-ot-1024.webp',4,'Hải sản','700g mực tươi; 1 củ gừng to; 6- tép tỏi; 2 quả ớt sừng; 1-2 quả ớt hiểm; 2-3 nhánh sả; 1 nhánh cần tây (nếu có); Muối hạt; Gia vị: Dầu hào, nước mắm, bột ngọt, đường, tiêu xay','Sơ chế mực\nCách sơ chế mực sạch trước khi chế biến món ăn\nMực rút riêng đầu, bỏ phần túi mực và màng nhầy nơi cuối đầu mực. Sau đó rút xương sống dọc lưng mực và nhẹ nhàng lột lớp da lụa có màu tím bên ngoài. Tiếp đến, bỏ mắt mực, đây là bộ phận khiến mực xào ra nước màu nên bạn cần chú ý.\n\nSau khi sơ chế mực sạch sẽ, cho mực vào tô, bóp cùng với muối hạt, rượu trắng và gừng giã nhuyễn để khử mùi tanh của mực. Cuối cùng, xả lại cho sạch rồi để mực thật ráo nước.\nMực ráo nước, bạn cắt riêng màng mực 2 bên, rồi dùng dao cắt dọc thân mực để thành 1 tảng thịt lớn. Khía những đường chéo nhau trên bề mặt miếng mực để tạo vân rồi cắt khúc. Lưu ý, không nên cắt mực thành miếng quá bé, khi xào bị quắt lại nên dễ tạo cảm giác bị vụn, nát.; Sơ chế các nguyên liệu khác\nSả bóc bỏ lớp bẹ già, rửa sạch, đầu sả đập dập rồi băm nhỏ, thân xả cắt lát chéo dài.\n\nỚt sừng rửa sạch, cắt lát chéo. Ớt hiểm và tỏi băm nhỏ. Gừng rửa sạch, băm nhỏ.\n\nCần tây ngâm rửa nước muối sạch sẽ, để ráo rồi thái rối.; Xào mực\nCho 2 thìa canh dầu ăn vào chảo, phi thơm tỏi, sả, gừng băm và ớt hiểm băm. Nếu muốn màu đẹp mắt, và có độ cay hơn, ở bước này bạn có thể cho thêm ít ớt bột.'),(22,'Xào','Thịt bò xào dưa chua',30,'https://cookbeo.com/media/2021/05/thit-bo-xao-dua-chua/thumbnails/chao-thit-bo-xao-dua-1024.webp',5,'bò','300g thịt bò 450g; dưa chua; 3-4 củ hành khô 2-3 tép tỏi, 1 đốt gừng; 2-3 quả cà chua ~ 300g; Hành lá 1 trái ớt tươi; Gia vị: Dầu hào, bột ngọt, hạt tiêu, bột canh, đường, bột nêm',NULL),(23,'Xào','Thị bò xào cần tây',30,'https://cookbeo.com/media/2021/05/thit-bo-xao-can-tay/thumbnails/thit-bo-xao-can-tay-16x9-1024.webp',4,'bò','250g thịt bò 3 nhánh cần tây 1 nhánh tỏi tây 150g hành tây 100g củ cà rốt 5-6 tép tỏi 1 đốt gừng 1 quả ớt sừng Muối hạt Gia vị: Dầu hào, bột ngọt, đường, hạt tiêu, bột nêm, bột canh','Sơ chế thịt bò\nThịt bò thái miếng mỏng, sau đó ướp cùng với 1 thìa cà phê dầu hào, 1/2 thìa cà phê bột nêm, 1/2 thìa cà phê bột canh, 1/2 thìa cà phê bột ngọt, 1/2 thìa cà phê đường để thịt bò giòn. Và để thịt bò không bị ra nước khi xào, cho thêm 1/2 thìa canh dầu ăn vào ướp cùng thịt. Thịt bò ướp ít nhất 15 phút để thịt thấm gia vị.; Sơ chế nguyên liệu khác Cần tây, tỏi tây cắt bỏ gốc, vạt bỏ những lá sâu, héo già, sau đó rửa rồi ngâm với nước muối khoảng 5 phút. Rồi xả lại với nước cho sạch, ráo thì cắt khúc dài 2 đốt ngón tay.; Cách làm thịt bò xào cần tây\nĐể làm cần tây xào thịt bò ngon thì nên xào riêng thịt bò và các nguyên liệu.\n\nĐầu tiên, cho 1 thìa canh dầu ăn vào chảo, nóng dầu thì cho 1 nửa số tỏi băm và gừng băm vào để phi thơm. Tiếp đến cho thịt bò vào để xào. Xào thịt bò ở lửa lớn, xào nhanh để thịt bò không bị dai. Xào đến khi thịt chín tái, chuyển sang màu hồng nhạt là được.Cho 2 thìa canh dầu ăn vào chảo vừa xào thịt bò, phi thơm nốt số tỏi, gừng băm còn lại.\n\nTiếp đến cho cà rốt vào xào.\n\nXào cà rốt ở lửa nhỏ vừa khoảng 1 phút, đến khi cà rốt chín tới thì cho hành tây vào xào.\n\nLúc này tăng nhiệt độ lên, xào hành tây 1 lúc đến khi hành tây chín tái thì cho cần, tỏi tây vào.\n\n\nĐảo đều và nêm gia vị vừa ăn, gồm có dầu hào, bột ngọt. Liều lượng gia vị bạn điều chỉnh sao cho hợp với khẩu vị. Ở đây, Cookbeo nêm thêm 1/2 thìa cà phê bột nêm, 1 thìa cà phê dầu hào, 1/2 thìa cà phê bột ngọt và 1 thìa cà phê nước mắm.\n\nSau khi nêm gia vị, xào thêm 10 giây rồi cho thịt bò vào, đảo thêm 10 giây ở lửa lớn, rắc ít hạt tiêu, trộn đều rồi tắt bếp.'),(24,'Xào','Sườn xào chua ngọt',30,'https://cookbeo.com/media/2020/06/906258170/thumbnails/mon-suon-xao-chua-ngot-mien-bac-1024.webp',5,'lợn','700g sườn thăn; 1-2 quả ớt 2 củ tỏi; Dầu màu điều; Dấm gạo; Nước màu cốt dừa; Muối hạt; Gia vị: Nước mắm, đường, bột ngọt, bột canh, hạt tiêu','Bước 1: Sơ chế sườn và ướp Sườn chặt miếng vừa ăn, rửa sạch rồi mang đi chần qua. Đun sôi 1 nồi nước với 1 nhúm muối hạt. Khi nước sôi thì cho sườn vào chần khoảng 2-3 phút rồi vớt ra và rửa thật kỹ dưới vòi nước. Bước làm này giúp sườn sạch, khi nấu không bị lẫn xương lợn cợn và tiết ra nhiều bọt bẩn. Ngoài ra, việc rửa sườn dưới vòi nước cũng giúp miếng sườn mềm hơn.; Bước 2: Nấu sườn xào chua ngọt Cho nồi sườn đã ướp gia vị lên bếp, đậy kín nắp vung và nấu ở nhiệt độ nhỏ. Cách làm sườn xào chua ngọt thông thường sẽ là chiên sườn, nhưng nếu làm không khéo sẽ khiến cho miếng sườn bị chiên non quá hoặc cháy quá, khi ăn sườn dễ bị cứng và khô. Trong khi đó, cách nấu sườn xào chua ngọt này sau khi ướp, chỉ cần để sườn om liu riu ở nhiệt độ nhỏ, không cần chiên hay để nhiệt độ lớn. Bởi sườn cũng giống như thịt gà, chín hơi nên cứ đậy kín vung và nấu trong khoảng 25 phút là sườn sẽ mềm và róc xương.'),(25,'Nướng','Má heo nướng',60,'https://cookbeo.com/media/2023/12/ma-heo-nuong/thumbnails/ma-heo-nuong-16x9-1024.webp',5,'lợn','750g má heo; 2 nhánh sả, 2 củ hành khô, 1 củ tỏi, 1 đốt gừng nhỏ; 2 quả ớt cay; Muối hạt; Gia vị ướp: bột nêm, bột ngọt, dầu hào, dầu màu điều, nước màu đường, nước mắm, nước tương xì dầu, tương ớt, tiêu xay, ngũ vị hương, dầu mè, rượu nấu ăn (nếu có); Nước sốt chấm: dầu mè, tương ớt, tương cà, đường, bơ thực vật; Rau sống, rau thơm, kim chi ăn kèm',NULL),(28,'Suops','Hủ tiếu',60,'https://th.bing.com/th/id/OIP.geNSt6WrdCUaHKp_QuzPrgHaEL?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',4,'lợn','250g thịt bò 3 nhánh cần tây 1 nhánh tỏi tây 150g hành tây 100g củ cà rốt 5-6 tép tỏi 1 đốt gừng 1 quả ớt sừng Muối hạt Gia vị: Dầu hào, bột ngọt, đường, hạt tiêu, bột nêm, bột canh',NULL),(29,'Canh','Canh kim chi hải sản',45,'https://cookbeo.com/media/2021/12/canh-kim-chi-hai-san/thumbnails/mon-canh-kim-chi-hai-san-1024.webp',5,'Hải sản','400g kim chi; ~ 1 bát tô lớn 300g tôm 300g mực; 50g moi biển khô (tép khô hoặc cá cơm khô); Hành boa rô (tỏi tây) 1 đốt gừng; Muối hạt 1-2 quả ớt cay (nếu ăn được nhiều cay); Dầu mè; Nước tương; Hạt tiêu; Các gia vị thông thường',NULL),(31,'Xào','thịt xào',30,'https://cookbeo.com/media/2020/10/thit-kho-tieu/thumbnails/thit-kho-tieu-16x9-1024.webp',5,'bò','Trứng gà: 3 quả; Cà chua: 5 quả; Hành lá Mùi ta (ngò rí); Hành khô: 3 củ; Gia vị: Nước mắm, bột ngọt, bột canh; Rau sống ăn kèm (nếu có)',NULL);
/*!40000 ALTER TABLE `congthuc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dinhduong`
--

DROP TABLE IF EXISTS `dinhduong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dinhduong` (
  `nutrition_id` int NOT NULL,
  `ingredients_id` char(5) DEFAULT NULL,
  `calories` int DEFAULT NULL,
  `protein` int DEFAULT NULL,
  `fat` int DEFAULT NULL,
  `recipe_id` int DEFAULT NULL,
  PRIMARY KEY (`nutrition_id`),
  KEY `recipe_id` (`recipe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dinhduong`
--

LOCK TABLES `dinhduong` WRITE;
/*!40000 ALTER TABLE `dinhduong` DISABLE KEYS */;
/*!40000 ALTER TABLE `dinhduong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `_password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'hieunguyen','nguyentaihieu004@gmail.com','329217749'),(2,'Hieu123','22520442@gm.uit.edu.vn','123456789'),(3,'Hieualoalo','22520442@gm.uit.edu.vn','123456789'),(4,'Hieu1234','22520442@gm.uit.edu.vn','0329217749'),(10,'hieu04','22520442@gm.uit.edu.vn','123456789'),(11,'hieu','22520442@gm.uit.edu.vn','123123'),(12,'hieu11','22520442@gm.uit.edu.vn','123123'),(13,'hieu112','nguyentaihieu004@gmail.com','1123123'),(14,'123','nguyentaihieu004@gmail.com','123'),(15,'1234','22520442@gm.uit.edu.vn','123123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-31 15:41:05
