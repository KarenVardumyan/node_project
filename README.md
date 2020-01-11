# node_project


## 1. Add new
curl -X POST http://localhost:3000/users -d '{ "name": "name", "surname": "surname" }' -H 'Content-Type: application/json'

## 2. Get all
curl -X GET http://localhost:3000/users

## 3. Get one by id
curl -X GET http://localhost:3000/users/5e19cdb5bf262c1cdd01c02b
