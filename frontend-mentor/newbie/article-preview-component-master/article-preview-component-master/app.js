const shareBtn = document.querySelectorAll('.window-btn')



shareBtn.forEach(share => {
  share.addEventListener('click', () => {
    if(share.parentElement.nextElementSibling.classList.contains('hide')) {
      share.parentElement.nextElementSibling.classList.remove('hide')
      share.parentElement.classList.add('hide')
    } else {
      share.parentElement.classList.remove('hide')
      share.parentElement.nextElementSibling.classList.add('hide')
    }
  })
})