CREATE TABLE Houses (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(30),
    address     VARCHAR(100),
    city        VARCHAR(100),
    state       VARCHAR(2),
    zip         INTEGER
);
ALTER TABLE Houses ADD img TEXT;
ALTER TABLE Houses ADD mortgage DECIMAL;
ALTER TABLE Houses ADD rent DECIMAL;
