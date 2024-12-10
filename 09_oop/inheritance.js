class User {
    constructor(username) {
        this.username = username;
    }
    logMe(){
        console.log(`The username is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`New course was added by ${this.username}.`);
    }
}

const chai = new Teacher("chai", "chai@chai.com", "123asdf");
chai.addCourse();