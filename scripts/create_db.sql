CREATE USER slip_dev_app;
GRANT ALL PRIVILEGES ON DATABASE slip TO slip_dev_app;
CREATE TABLE users (
    id VARCHAR(25) PRIMARY KEY,
    name VARCHAR(25)
);
INSERT INTO users (id, name) VALUES ('1', 'John Doe');