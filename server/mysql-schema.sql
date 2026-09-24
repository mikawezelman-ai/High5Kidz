CREATE TABLE profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  avatar VARCHAR(255),
  level INT NOT NULL DEFAULT 1,
  xp INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE worlds (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  is_locked BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE missions (
  id VARCHAR(50) PRIMARY KEY,
  world_id VARCHAR(50),
  title VARCHAR(150) NOT NULL,
  description TEXT,
  xp_reward INT NOT NULL DEFAULT 10,
  sort_order INT NOT NULL DEFAULT 1,
  FOREIGN KEY (world_id) REFERENCES worlds(id) ON DELETE CASCADE
);

CREATE TABLE activities (
  id VARCHAR(50) PRIMARY KEY,
  mission_id VARCHAR(50),
  type VARCHAR(50) NOT NULL,
  question TEXT NOT NULL,
  answer VARCHAR(255) NOT NULL,
  options JSON,
  FOREIGN KEY (mission_id) REFERENCES missions(id) ON DELETE CASCADE
);

CREATE TABLE progress (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  mission_id VARCHAR(50) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  score INT,
  completed_at DATETIME,
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE,
  FOREIGN KEY (mission_id) REFERENCES missions(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_mission (user_id, mission_id)
);

CREATE TABLE badges (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  image VARCHAR(255)
);

CREATE TABLE user_badges (
  user_id INT NOT NULL,
  badge_id VARCHAR(50) NOT NULL,
  earned_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, badge_id),
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE,
  FOREIGN KEY (badge_id) REFERENCES badges(id) ON DELETE CASCADE
);

INSERT INTO worlds (id, name, description, is_locked) VALUES
  ('hartlandia', 'Hartlandia', 'Ontdek je emoties en leer erover praten.', FALSE),
  ('memoria', 'Memoria', 'Train je geheugen met leuke opdrachten.', TRUE),
  ('reflectoria', 'Reflectoria', 'Denk na over jezelf en anderen.', TRUE),
  ('imperfectionia', 'Imperfectionia', 'Leer dat fouten maken mag.', TRUE);

INSERT INTO missions (id, world_id, title, description, xp_reward, sort_order) VALUES
  ('hartlandia-1', 'hartlandia', 'Leer je emoties kennen', 'Voltooi opdrachten en verzamel badges.', 20, 1),
  ('hartlandia-2', 'hartlandia', 'Wat voel jij vandaag?', 'Herken emoties bij jezelf en anderen.', 20, 2),
  ('hartlandia-3', 'hartlandia', 'Rekenen met schelpen', 'Los sommen op met de schelpen van het strand.', 25, 3);