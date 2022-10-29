const body = document.body
const arrow_target = document.querySelector('.arrow')
const answer = document.querySelector('.answer')
const question = document.querySelector('.question')

arrow_target.addEventListener('click', () => {
  // console.log('test');
  if(answer.classList.contains('hide')) {
    answer.classList.remove('hide')
    question.style.fontWeight = '900'
  } else {
  answer.classList.add('hide')
  question.style.fontWeight = 'normal'
  }
})