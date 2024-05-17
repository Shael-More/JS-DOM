const togglepassword = document.querySelector('#togglePassword')
const password = document.querySelector('#password')
const form = document.querySelector('form')

togglepassword.addEventListener('click', function() {
    const type = password.getAttribute('type') === 'text' ? 'password' : 'text'

    password.setAttribute('type', type)

    this.classlist.toggle('bi-eye')
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
})