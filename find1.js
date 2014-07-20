var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhosst:27017/course', function(err, db){
	if(err) throw err;

	//iterar en cada alumno que cumpla que tenga grade 100, con la ayuda de un cursor

	var query = {'grade': 100};

	var cursor = db.collection('grades').find(query);

	cursor.each.(function(err, doc){
		if (err) throw err;

		if(doc == null){
			return db.close()
		}

		console.log(doc.student+"got a good grade!");
	});

});