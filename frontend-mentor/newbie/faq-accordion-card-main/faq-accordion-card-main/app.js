const body = document.body
const arrow_target_one = document.querySelector('.arrow-1')
const arrow_target_two = document.querySelector('.arrow-2')
const answer_one = document.querySelector('.answer-1')
const answer_two = document.querySelector('.answer-2')
const questionOne = document.querySelector('.question-1')
const questionTwo = document.querySelector('.question-2')

arrow_target_one.addEventListener('click', () => {
  if(answer_one.classList.contains('hide')) {
    answer_one.classList.remove('hide')
  } else {
    answer_one.classList.add('hide')
  }
}
)

arrow_target_two.addEventListener('click', () => {
  if(answer_two.classList.contains('hide')) {
    answer_two.classList.remove('hide')
  } else {
    answer_two.classList.add('hide')
  }
}
)

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
// 