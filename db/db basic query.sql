CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(45) UNIQUE,
    password VARCHAR(45) NOT NULL,
    age INT
);

CREATE TABLE user_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    nickname VARCHAR(20) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    point INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE address(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_info_id INT,
    city varchar(20),
    gu varchar(20),
    dong varchar(20),
    update_at DATETIME,
    FOREIGN KEY (user_info_id) REFERENCES user_info(id)
);

CREATE TABLE counselor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(45) UNIQUE,
    password VARCHAR(45) NOT NULL,
    field1 VARCHAR(45), 
    field2 VARCHAR(45),
    field3 VARCHAR(45),
    certification INT DEFAULT 0, #1,2,0 =인증 전
    career INT,
    accept ENUM ('승인','대기','거절') DEFAULT '대기', #승인여부
	work_time VARCHAR(45),
    min_price INT,
    contact ENUM ('대면','비대면') DEFAULT '비대면'
);

ALTER TABLE user_info
ADD COLUMN counselor_id INT,
ADD FOREIGN KEY (counselor_id) REFERENCES counselor(id);

CREATE TABLE request_form(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    req_at DATE,
    field VARCHAR(20),
    condition1 VARCHAR(20),
    condition2 VARCHAR(20),
    condition3 VARCHAR(20),
    min_price INT,
    max_price INT,
    prefer_time VARCHAR(20),
    special_issue VARCHAR(255),
    contact ENUM ('대면','비대면') DEFAULT '비대면',
    status ENUM ('대기','매칭완료') DEFAULT '대기',
    FOREIGN KEY (user_id) REFERENCES user(id)
);

/*
CREATE TABLE matching_list(
	id INT AUTO_INCREMENT PRIMARY KEY,
    
);

CREATE TABLE matching(
	id INT AUTO_INCREMENT PRIMARY KEY,
    req_id INT,
    
);
*/

CREATE TABLE counsel_detail(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    counselor_id INT,
    start_at DATETIME,
    end_time DATETIME,
    recent_at DATETIME,
    field VARCHAR(45),
	status ENUM('진행중','완료','중단') DEFAULT '진행중',
    FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (counselor_id) REFERENCES counselor(id)
);

CREATE TABLE point_table(
	id INT AUTO_INCREMENT PRIMARY KEY,
    money INT,
    point INT
);

INSERT INTO point_table VALUES (DEFAULT, 1000, 900);
INSERT INTO point_table VALUES (DEFAULT, 5000, 5000);
INSERT INTO point_table VALUES (DEFAULT, 10000, 11000);
INSERT INTO point_table VALUES (DEFAULT, 50000, 55000);

CREATE TABLE point_detail(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    counselor_id INT,
    point VARCHAR(10),
    source VARCHAR(20), #포인트 원인 : "충전","이벤트", "상담"
    charge_use_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (counselor_id) REFERENCES counselor(id)
);

CREATE TABLE payment(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    counselor_id INT,
    amount INT,
    point INT,
    method VARCHAR(20),
    status VARCHAR(20),
    pay_at DATETIME,
    refund_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (counselor_id) REFERENCES counselor(id)
);

################################################
#여기는 mongodb에서 사용될예정임. ERD 생성용 쿼리
CREATE TABLE chat_room(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    counselor_id INT,
    created_at DATE
);

CREATE TABLE chat_message(
	id INT AUTO_INCREMENT PRIMARY KEY,
    chat_room_id INT,
    message VARCHAR(255),
    send_at DATE
);
#######################################################
CREATE TABLE chat_log(
	id INT AUTO_INCREMENT PRIMARY KEY,
    chat_room_id INT,
    txtlog LONGTEXT,
	current_at DATETIME
);

CREATE TABLE chat_memo( #chat memo는 상담 기록지로 상담사만 사용할 수 있다.
	id INT AUTO_INCREMENT PRIMARY KEY,
    chat_room_id INT,
    counsel_detail_id INT,
    counselor_id INT,
    content VARCHAR(255),
	created_at DATETIME,
    FOREIGN KEY (counselor_id) REFERENCES counselor(id),
    FOREIGN KEY (counsel_detail_id) REFERENCES counsel_detail(id)
);

CREATE TABLE schedule(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    counselor_id INT,
	reserve_at DATETIME, #상담 예약 날짜
    update_at DATETIME, #마지막 수정 날짜
    FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (counselor_id) REFERENCES counselor(id)
);

CREATE TABLE review(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    counselor_id INT,
	rate INT,
    content VARCHAR(255),
    created_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (counselor_id) REFERENCES counselor(id)
);