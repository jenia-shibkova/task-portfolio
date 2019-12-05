const buttonMobile = document.getElementById('mobile-button');
const buttonDesktop = document.getElementById('desktop-button');
const frame = document.getElementById('frame');


const onButtonClick = ({ target }) => {
  if (target.classList.contains('button__mobile')) {
    frame.width = 375;
    frame.height = 9317;

    target.classList.remove('active');
    buttonDesktop.classList.add('active');
  }

  if (target.classList.contains('button__desktop')) {
    frame.width = 1349;
    frame.height = 10225;

    target.classList.remove('active');
    buttonMobile.classList.add('active');
  }

};

document.addEventListener('click', onButtonClick);
