$(document).ready(() => {
  // let logoSVG = SVG('logo-svg');
  // logoSVG.size(200);

  var CSStransforms = anime({
    targets: '.nav-logo',
    rotate: 360
  });

  $('.nav-logo').hover(e => {
    var CSStransforms = anime({
      targets: '.nav-logo',
      rotate: 360 * (Math.floor(Math.random() * 3) + 1)
    });
  })

  var lineDrawing = anime({
    targets: "#name-svg .lines path:last-of-type",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuart',
    duration: 3000,
    delay: 1500,
    direction: 'alternate',
    loop: true
  });

  tippy(document.querySelectorAll('.portfolio-item-tech'));

  $('.nav-menu-button').click(e => {
    $(e.target).toggleClass('open');
    $('.nav-menu-items').toggleClass('open');
  })

  $('.portfolio-item').click(e => {
    $(e.target).find('.portfolio-item-modal').toggleClass('open');
  })

  $('.modal-close').click(e => {
    $(e.target).parents('.portfolio-item-modal').toggleClass('open');
  })
})