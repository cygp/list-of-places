// Add carousel cells by mustashe.js 
var carouselCell = document.getElementById('template-carousel-cell').innerHTML;
Mustache.parse(carouselCell);
var carouselItems = '';
var mainCarousel = document.querySelector('.main-carousel');
for (i = 0; i < carouselCellData.length; i++) {
	carouselItems += Mustache.render(carouselCell, carouselCellData[i]);
};
mainCarousel.insertAdjacentHTML('beforeend', carouselItems);
//init flickity
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

// restart function
var restart = document.querySelector('.restart');
 restart.addEventListener("click", function(event){
      flkty.select(0);
  });
// progress bar
var progressBar = document.querySelector('.progress-bar')
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// Initialize and add the map
window.initMap = function(){
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: carouselCellData[0]['coords']});
  // Loop creates markers for all coords
  for (i = 0; i < carouselCellData.length; i++) {
		var marker = new google.maps.Marker({
			position: carouselCellData[i]['coords'], 
			map: map
		});
	};
};
