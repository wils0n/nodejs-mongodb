var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhosst:27017/course', function(err, db){
	if(err) throw err;

	//iterar en cada alumno que cumpla que tenga grade 100, con la ayuda de un cursor

	var query = {'grade': 100};

	var projection = {'student': 1, '_id': 0};

	var cursor = db.collection('grades').find(query).toArray(function(err, docs){
		if(err) throw err;

		docs.forEach(function(doc){
			console.dir(doc);
			console.dir(doc.student + "got a good grade");
		});

		db.close();

	});

});