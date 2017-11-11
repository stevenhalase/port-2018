$(document).ready(() => {
  // let logoSVG = SVG('logo-svg');
  // logoSVG.size(200);

  var CSStransforms = anime({
    targets: '.nav-logo',
    rotate: 360
  });

  var CSStransforms = anime({
    targets: '.hero-content svg',
    opacity: 1,
    marginTop: 0,
    delay: 250
  });

  var CSStransforms = anime({
    targets: '.hero-content p',
    opacity: 1
  });

  var infiniteLoopAlternate = anime({
    targets: '#name-svg text:last-of-type',
    fill: [
      { value: '#47c9e5', duration: 2000, delay: 1000 },
      { value: '#FFF', duration: 2000, delay: 1000 }
    ],
    easing: 'easeInQuad',
    loop: true,
  });

  $('.nav-menu-button').click(e => {
    $(e.target).toggleClass('open');
    $('.nav-menu-items').toggleClass('open');
  })
})