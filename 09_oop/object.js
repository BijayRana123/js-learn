function createUser(username, score) {
    this.username = username;
    this.score = score;
};
createUser.prototype.increment = function () {
    this.score++;
};
createUser.prototype.printMe = function(){
    console.log(`Price of ${this.username} is ${this.score}`);
};

const chiya = new createUser("chiya", 50);
const lemontea = new createUser("lemontea", 25);
chiya.printMe();