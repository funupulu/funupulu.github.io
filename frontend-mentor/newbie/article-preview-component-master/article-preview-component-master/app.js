const shareBtn = Array.from(document.querySelectorAll('.window-btn'))



shareBtn.forEach(share => {
  share.addEventListener('click', () => {
 
   if(share.parentElement.classList.contains('hide')) {
    share.parentElement.classList.remove('hide')
   } else {
    share.parentElement.classList.add('hide')
    share.parentElement.nextElementSibling
   }
  })
})