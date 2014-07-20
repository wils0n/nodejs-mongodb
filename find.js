var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhosst:27017/course', function(err, db){
	if(err) throw err;

	//mostrar todos los alumnos con nota 100, con toda su informacion

	var query = {'grade': 100};

	db.collection('grades').find(query).toArray(function(err, docs){
		if(err) throw err;

		console.dir(docs);
		db.close();
	})
});