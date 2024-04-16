const express = require('express');
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
require('./db/conn');
const Register = require('./models/register');

const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set('view engine', 'hbs');

app.set('views', template_path);
hbs.registerPartials(partials_path);

app.get('/', (req, res) => {
    res.render('index1');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    try {
        const password = req.body.pass;
        const cpassword = req.body.cpass;

        if(password===cpassword){
            const registerEmployee = new Register({
                Username : req.body.Username,
                Email : req.body.Email,
                pass : password,
                cpass : cpassword
            })
           const registered = await registerEmployee.save();
           res.status(201).render(index1);

        }else{
            res.send("password is not matching")
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});