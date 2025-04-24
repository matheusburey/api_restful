-- This is a sample migration.
CREATE TABLE IF NOT EXISTS users (
    id UUID primary key NOT NULL DEFAULT gen_random_uuid(),
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
  );

---- create above / drop below ----
DROP TABLE users;