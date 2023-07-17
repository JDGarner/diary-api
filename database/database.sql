DROP TABLE entries;
CREATE TABLE entries (
  id serial primary key,
  day text,
  date text,
  month text,
  content text,
  note text DEFAULT NULL,
  imageNote text DEFAULT NULL,
  imageURL text DEFAULT NULL,
  abridged boolean DEFAULT true
);
