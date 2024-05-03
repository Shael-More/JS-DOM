function User(email, pass) {
    this._email = email
    this._pass = pass


    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(val) {
            this._pass = val
        }
    })
    Object.defineProperty(this, "pass", {
        get: function() {
            return this.pass.toUpperCase()
        },
        set: function(val) {
            this._pass = val
        }
    })

}


const chai = new User("chai@fb.ai", "123")

console.log(chai.email);
