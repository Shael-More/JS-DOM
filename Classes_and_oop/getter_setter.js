class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }

    set email(val) {
        this._email = val
    } 

    get password() {
        return `${this._password}man`
    }

    set password(value) {
        this._password = value
    }
}


const hit = new User("h@hitman.ai", "abd")
console.log("Pass: ",hit.password);
console.log("Email: ",hit.email);