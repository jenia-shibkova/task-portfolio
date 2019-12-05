const buttonMobile = document.getElementById('mobile-button');
const buttonDesktop = document.getElementById('desktop-button');
const frame = document.getElementById('frame');


const onButtonClick = ({ target }) => {
  if (target.classList.contains('button__mobile')) {
    frame.width = 640;
    frame.height = 1551;

    target.classList.remove('active');
    buttonDesktop.classList.add('active');
  }

  if (target.classList.contains('button__desktop')) {
    frame.width = 1020;
    frame.height = 1848;

    target.classList.remove('active');
    buttonMobile.classList.add('active');
  }

};

document.addEventListener('click', onButtonClick);
