CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS types (
    id SERIAL PRIMARY KEY,
    category TEXT,
    img TEXT
);

CREATE TABLE IF NOT EXISTS expenses (
    id SERIAL PRIMARY KEY,
    users_id INTEGER,
    types_id INTEGER,
    description TEXT,
    amount FLOAT(8),
    create_date timestamp DEFAULT CURRENT_TIMESTAMP
);