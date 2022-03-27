const socialBtn = document.getElementById('social-btn');
const mobileBtn = document.getElementById('mobile-btn');
const popupWrapper = document.getElementById('popup-wrapper');
const mobilePopup = document.getElementById('mobile-popup');
const btnArrow = document.getElementById('btn-arrow');
const mobileArrow = document.getElementById('mobile-arrow');

socialBtn.addEventListener('click', () => {
  // show or hide popup
  popupWrapper.classList.toggle('hide');
  // toggle 'active' styling on button
  socialBtn.classList.toggle('btn-active');
  btnArrow.classList.toggle('arrow-active');
})

mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('btn-active');
  mobileArrow.classList.toggle('arrow-active');
  mobilePopup.classList.toggle('mobile-popup-active');
})