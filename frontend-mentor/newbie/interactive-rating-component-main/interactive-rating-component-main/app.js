const body = document.body
const submit = body.querySelectorAll('submit')

submit.addEventListener('click', () => {
  submit.innerText = 'nice!'
} )