const body = document.body
const span = body.querySelector('span')
const submit = body.querySelector('.submit')

span.addEventListener('click', () => {
  span.style.backgroundColor = 'orange'
})