class User {
    constructor(first_name, last_name, email, password, userId) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.userId = userId;

    }
    save(users) {
        const fs = require("fs").promises;
        users.push(this);
        fs.writeFile("./data/users.json", JSON.stringify(users));
    }

}
module.exports = { User };