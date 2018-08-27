var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
});
var restart = document.querySelector('.restart');
 restart.addEventListener("click", function(event){
      flkty.select(0);
  });
