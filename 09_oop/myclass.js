// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
// };

// const myUser = new User("Bijay", "bijay@email.com", "1245");
// console.log(myUser.encryptPassword());

/*-------using function in place of class ------*/
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

const tea = new User("tea","tea@tea.com","123");
console.log(tea.encryptPassword())