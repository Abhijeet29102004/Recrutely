CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT ,
  role TEXT NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(15),
  location VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE user_education (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  degree VARCHAR(100),
  institution VARCHAR(255),
  start_date DATE,
  end_date DATE,
  description TEXT
);


CREATE TABLE user_experience (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(100),
  company VARCHAR(255),
  start_date DATE,
  end_date DATE,
  description TEXT
);

CREATE TABLE user_skills (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  skill_name VARCHAR(100),
  UNIQUE (user_id, skill_name) 
);

CREATE TABLE user_documents (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  profile_photo_url TEXT,
  resume_url TEXT,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  work_mode VARCHAR(50),
  job_type VARCHAR(50),
  salary_min INTEGER,
  salary_max INTEGER,
  location VARCHAR(255),
  responsibilities TEXT,
  skills TEXT,
  perks TEXT,
  posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  company VARCHAR(100),
  recruiter_id INT
);

CREATE TABLE user_resumes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  resume_url TEXT NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  job_id INTEGER REFERENCES jobs(id),
  resume_url TEXT NOT NULL,
  personal_message TEXT,
  status TEXT DEFAULT 'Applied',
  applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recruiters (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  recruiter_name VARCHAR NOT NULL,
  recruiter_email VARCHAR NOT NULL,
  company_name VARCHAR,
  company_url VARCHAR,
  industry_type VARCHAR,
  company_size VARCHAR,
  recruiter_designation VARCHAR,
  recruiter_skills TEXT[],
  company_logo VARCHAR,
  company_description TEXT,
  phone_number VARCHAR,
  employer_id INT
);
