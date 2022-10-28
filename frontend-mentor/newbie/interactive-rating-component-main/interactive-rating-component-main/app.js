const body = document.body

const submit_btn = body.querySelector('.submit')
const card_one = body.querySelector('.card-1')
const card_two = body.querySelector('.card-2')
const rating_btn = body.querySelectorAll('.rating-btn')
const score = document.querySelector('.score')
let stars_score = 3 //default

// console.log(rating_btn);

submit_btn.addEventListener('click', onSubmit)

function onSubmit() {
  card_one.classList.add('hide')
  score.textContent = stars_score
  card_two.classList.remove('hide')
  // console.log('submit click');
}

rating_btn.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick)
  })

function handleRatingBtnClick(event) {
  rating_btn.forEach(btn => {
    btn.classList.remove('active')
  })
  event.target.classList.add('active')
  // console.log('rating btn click')

  stars_score = event.target.textContent
  console.log(stars_score);
}