function isEven(n) {
	return n%2 == 0;
}

function factorial(n) {
	f = 1;
	for (i=1;i<=n;i++) {
		f *= i;
	}
	return f;
}

function kebabToSnake(str) {
	return str.replace('-','_');
}



function newMovie(title, rating, hasWatched) {
	var movie = {
		title: title,
		rating: rating,
		hasWatched: hasWatched
	};
	return movie;
}

var movies = [newMovie("In Bruges",5,true),
		  	  newMovie("Frozen",4.5,false),
		      newMovie("Mad Max Fury Road",5,true),
		      newMovie("Les Miserables",3.5,false)];

for (i=0;i<movies.length;i++) {
	var movie = movies[i];
	if (movie.hasWatched) {
		console.log("You have watched "+movie.title+" - "+movie.rating+" stars");
	}
	else {
		console.log("You have not watched "+movie.title+" - "+movie.rating+" stars");
	}
}

