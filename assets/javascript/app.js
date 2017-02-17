var game = {
  Timer: null,
  Correct: null,
  Incorrect: null,
  count: 30,

  timer: function() {
  	console.log('itsworking');
  $('.Time').text(this.count);
  if (this.count > 0) {
  		console.log(game.count);
  		this.count --;
  	} else {
  	clearInterval(this.counter);
  	}
  },
   counter: function() {
     //counter ended, do something here
   	return setInterval(function() {

     	game.timer();
  }, 1000);

 },

};

 $('#overlay button').on('click', function(event) {
  	$('#overlay').hide();
  
  });


 	game.counter();