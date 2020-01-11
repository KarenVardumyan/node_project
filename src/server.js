const express = require('express');
const bodyParser = require('body-parser')
const Users = require('./models').Users;

const app = express();
app.use(bodyParser.json())

app.post('/users', function (req, res) {
    const user = new Users(req.body);
    user.save()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.status(409).send(error)
        })
});

app.use('/users/:id', function (req, res) {
    Users.findById(req.params.id, function (error, user) {
        if (error) {
            res.send(error)
        }
        res.send(user)
    });
});

app.use('/users', function (req, res) {
    Users.find({}, function (error, users) {
        if (error) {
            res.send(error)
        }
        res.send(users);
    });
});

app.use('/hello', function (req, res) {
    res.send('hello');
});

app.use(function (req, res) {
    res.status(404).send('Not found');
});

app.listen(3000);
console.log('Server listen at port 3000');
