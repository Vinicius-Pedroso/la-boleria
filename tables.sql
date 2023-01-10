CREATE TABLE `cakes` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`price` DECIMAL NOT NULL,
	`image` varchar(255) NOT NULL,
	`description` TEXT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `clients` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`address` varchar(255) NOT NULL,
	`phone` varchar(15) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `orders` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`clientId` INT NOT NULL,
	`cakeId` INT NOT NULL,
	`quantity` INT NOT NULL,
	`createdAt` TIMESTAMP NOT NULL,
	`totalPrice` DECIMAL NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `orders` ADD CONSTRAINT `orders_fk0` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`);

ALTER TABLE `orders` ADD CONSTRAINT `orders_fk1` FOREIGN KEY (`cakeId`) REFERENCES `cakes`(`id`);



