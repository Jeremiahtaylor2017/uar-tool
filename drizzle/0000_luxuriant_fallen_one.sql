CREATE TABLE `app_users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`first_name` text,
	`last_name` text,
	`controls_id` int,
	CONSTRAINT `app_users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `controls` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text,
	`date_uploaded` datetime,
	CONSTRAINT `controls_id` PRIMARY KEY(`id`)
);
