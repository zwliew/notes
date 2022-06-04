# Database Systems

## Courses

- [Database Systems (CMU 15-445)](https://15445.courses.cs.cmu.edu/fall2021/)
  - Covers basic-intermediate SQL in 2-3 lectures; covers introductory DB implementation in the remaining lectures
- [Databases (Stanford Online)](https://online.stanford.edu/courses/soe-ydatabases-databases)
  - Covers relational algebra, relational design theory, and basic-advanced SQL constructs

## Books

- [Database System Concepts (Silberschatz et al, 7 ed)](https://db-book.com/)
  - Used by CMU 15-445
- [Readings in Database Systems (Bailis et al, 5 ed)](http://www.redbook.io/)

## Notes

### Transaction isolation levels

|Isolation Level|Dirty Read|Nonrepeatable Read|Phantom Read|Serialization Anomaly
|---|---|---|---|---|
|Read uncommitted|Allowed, but not in PG|Possible|Possible|Possible|
|Read committed|Not possible|Possible|Possible|Possible|
|Repeatable read|Not possible|Not possible|Allowed, but not in PG|Possible|
|Serializable|Not possible|Not possible|Not possible|Not possible|
