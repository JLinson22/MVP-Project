DELETE FROM users;
DELETE FROM posts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
    user_id serial,
    name text,
    age integer,
    gender varchar(6),
    location text
);

CREATE TABLE posts (
    post_id serial,
    user_id integer,
    content text,
    date_posted date
);

INSERT INTO users (name, age, gender, location) VALUES ('John Smith', 26, 'male', 'Austin, Texas');
INSERT INTO users (name, age, gender, location) VALUES ('Mike Norman', 28, 'male', 'New York, New York');
INSERT INTO users (name, age, gender, location) VALUES ('Dawn Patrick', 42, 'female', 'Los Angeles, California');
INSERT INTO users (name, age, gender, location) VALUES ('James Peterson', 19, 'male', 'Chicago, Illinois');
INSERT INTO users (name, age, gender, location) VALUES ('Abigail Malley', 36, 'female', 'Houston, Texas');
INSERT INTO users (name, age, gender, location) VALUES ('Sheryl Kennedy', 27, 'female', 'Pheonix, Arizona');
INSERT INTO users (name, age, gender, location) VALUES ('Vanessa Park', 34, 'female', 'Philadelphia, Pennsylvania');
INSERT INTO users (name, age, gender, location) VALUES ('Russell Gonzales', 33, 'male', 'San Antonia, Texas');
INSERT INTO users (name, age, gender, location) VALUES ('Adam Walters', 52, 'male', 'San Diego, California');
INSERT INTO users (name, age, gender, location) VALUES ('Mark Vance', 21, 'male', 'Dallas, Texas');
INSERT INTO users (name, age, gender, location) VALUES ('Jennifer Campbell', 38, 'female', 'San Jose, California');
INSERT INTO users (name, age, gender, location) VALUES ('Clayton Goodwin', 47, 'male', 'Jacksonville, Florida');
INSERT INTO users (name, age, gender, location) VALUES ('Jeffrey Sanchez', 29, 'male', 'Fort Worth, Texas');
INSERT INTO users (name, age, gender, location) VALUES ('Sherry White', 68, 'female', 'Columbus, Ohio');
INSERT INTO users (name, age, gender, location) VALUES ('Mark Davis', 25, 'male', 'Charlotte, North Carolina');

INSERT INTO posts (user_id, content, date_posted) VALUES (1, 'Just made my first sale!', '2023-01-20');
INSERT INTO posts (user_id, content, date_posted) VALUES (2, 'So glad to be here today!', '2023-01-22');
INSERT INTO posts (user_id, content, date_posted) VALUES (4, 'Faith in oneself is the best and safest course.', '2023-01-28');
INSERT INTO posts (user_id, content, date_posted) VALUES (5, 'After the first blush of sin comes its indifference.', '2023-01-12');
INSERT INTO posts (user_id, content, date_posted) VALUES (6, 'Were going to be OK because of the American people. They have more grit, determination and courage than you can imagine.', '2023-01-30');
INSERT INTO posts (user_id, content, date_posted) VALUES (7, 'The glory of gardening: hands in the dirt, head in the sun, heart with nature. To nurture a garden is to feed not just on the body, but the soul.', '2022-12-26');
INSERT INTO posts (user_id, content, date_posted) VALUES (8, 'I dont just try to be funny.', '2023-01-28');
INSERT INTO posts (user_id, content, date_posted) VALUES (9, 'I dont have the feeling of being motivated by anger, revenge or frustration.', '2023-01-05');
INSERT INTO posts (user_id, content, date_posted) VALUES (10, 'History repeats itself, first as tragedy, second as farce.', '2022-12-15');
INSERT INTO posts (user_id, content, date_posted) VALUES (11, 'If parents would only realize how they bore their children!', '2023-01-02');
INSERT INTO posts (user_id, content, date_posted) VALUES (12, 'Death comes to all, but great achievements build a monument which shall endure until the sun grows cold.', '2023-01-28');
INSERT INTO posts (user_id, content, date_posted) VALUES (13, 'The liberty of the individual is a necessary postulate of human progress.', '2023-01-12');
INSERT INTO posts (user_id, content, date_posted) VALUES (14, 'I will either be famous or infamous.', '2022-11-26');
INSERT INTO posts (user_id, content, date_posted) VALUES (15, 'Next in importance to freedom and justice is popular education, without which neither freedom nor justice can be permanently maintained.', '2023-01-26');
INSERT INTO posts (user_id, content, date_posted) VALUES (16, 'There is a brief moment when all there is in a mans mind and soul and spirit is reflected through his eyes, his hands, his attitude. This is the moment to record.', '2022-11-05');