CREATE TABLE students(
  id serial,
  full_name  character varying(50),
  alias character varying(50)
);

CREATE TABLE course_subjects(
  id serial,
  subject_name character varying(50),
  hard_prerequisite boolean,
  duration int
);

CREATE TABLE enrollments(
  enrollment_id serial,
  student character varying(50),
  course_subject character varying(50)
);

INSERT INTO students(full_name,alias)
VALUES
('Thor Odinson','God of Thunder'),
('Tony Starks','Iron Man'),
('Bruce Banner ','Hulk'),
('Natalia Allanovna Romanova','Black Widow'),
('Albert Francis Simmons','Spawn'),
('Clark Kent','Superman'),
('Selina Kyle','Catwoman'),
('Rock Volnutt ','Mega Man Trigger'),
('Edmond Honda','E. Honda'),
('Janus Prospero','Alice'),
('Yoshisaur Munchakoopas','Yoshi'),
('Samus Aran','Metroid Sammy'),
('Donkey Kong','DK'),
('Princess Peach Toadstool','Peach'),
('Princess Zelda Hyrule','Zelda'),
('Miles  Prower ','Tails'),
('Knuckles the Echidna','Knucklehead'),
('Eddie Hunter','Skate');

INSERT INTO course_subjects(subject_name,hard_prerequisite,duration)
VALUES
('Archaeology',true,2),
('Aerodynamics',true,2),
('Ancient History',true,3),
('Body Building',false,3),
('Ballet',false,2),
('Zoology',true,1),
('Fencing',false,1),
('Gymnastics',false,1),
('Criminology',true,2),
('Microbiology',false,1),
('Mycology',false,1),
('Machinery',true,1),
('Sumo Wrestling',false,2),
('Farming',true,2),
('Bounty Hunting',true,2),
('Artificial Intelligence',true,3),
('Skating',false,1);

INSERT INTO enrollments(student,course_subject)
VALUES
('Thor Odinson','Ancient History'),
('Tony Starks','Artificial Intelligence'),
('Bruce Banner ','Body Building'),
('Natalia Allanovna Romanova','Ballet'),
('Albert Francis Simmons','Criminology'),
('Clark Kent','Farming'),
('Selina Kyle','Zoology'),
('Rock Volnutt ','Machinery'),
('Edmond Honda','Sumo Wrestling'),
('Janus Prospero','Microbiology'),
('Yoshisaur Munchakoopas','Archaeology'),
('Samus Aran','Bounty Hunting'),
('Donkey Kong','Gymnastics'),
('Princess Peach Toadstool','Mycology'),
('Princess Zelda Hyrule','Fencing'),
('Miles  Prower ','Aerodynamics'),
('Eddie Hunter','Skating');
