const express = require('express');
const bodyParser = require('body-parser')
const Users = require('./models').Users;
const cors = require('cors');

const EventEmitter = require('events').EventEmitter;
const data = new EventEmitter();

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.post('/users', function (req, res) {
    const user = new Users(req.body);
    user.save()
        .then((result) => {
            res.send(result);
            data.emit('change');
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

function getUsers(req, res) {

    data.on('change', function() {
        Users.find({}, function (error, users) {
            if (error) {
                res.write(error)
            }
            res.write(`data: Test Message -- ${users}\n\n`);
        });
    })

    req.on('close', () => {
        console.log('Connection is closed')
        data.removeAllListeners()
    });
}

app.use('/users', function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });
    res.write('\n\n');
    getUsers(req, res);
});

app.use(function (req, res) {
    res.status(404).send('Not found');
});

app.listen(3000);
console.log('Server listen at port 3000');
