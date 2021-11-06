const express = require('express')
const faker = require('faker')

const app = express()
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}))

class User {
    constructor() {
        this.id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNum = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.number();
        this.name = faker.company.companyName();
        this.address = {
            street:faker.address.streetAddress(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode()
        }
    }
}

app.get('/api/users/new',(req,res) => {
    res.json(new User)
})

app.get('/api/companies/new',(req,res) => {
    res.json(new Company)
})

app.get('/api/user/company',(req,res) => {
    res.json([new User, new Company])
})

app.listen(port)