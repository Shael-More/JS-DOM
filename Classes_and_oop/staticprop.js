class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }

    // static keyword helps to prevent the access of createId method
    static createId() {
        return `123`
    }

}

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email 
    }
}

const chai = new User("chai")

const tea = new Teacher("tea", "i@coke.com")

tea.logMe()