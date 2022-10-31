const body = document.body
const arrow_target = document.querySelectorAll('.arrow')
const answer = document.querySelectorAll('.answer')
const question = document.querySelectorAll('.question')

arrow_target.forEach(arrow => arrow.addEventListener('click', arrowDropDown ) )

function arrowDropDown () {
  if(answer.classList.contains('hide')) {
      answer.classList.remove('hide')
      question.style.fontWeight = '700'
      } else {
      answer.classList.add('hide')
      question.style.fontWeight = 'normal'
      }
}

// arrow_target.forEach('click', () => {
//   console.log('test');
// })

// arrow_target.addEventListener('click', () => {
//   // console.log('test');
//   if(answer.classList.contains('hide')) {
//     answer.classList.remove('hide')
//     question.style.fontWeight = '700'
//   } else {
//   answer.classList.add('hide')
//   question.style.fontWeight = 'normal'
//   }
// })