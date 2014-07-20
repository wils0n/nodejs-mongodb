var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if(err) throw err;

    var grades = db.collection('grades');

    var cursor = grades.find({});
    //cursor.skip(1);
    //cursor.limit(4);
    //cursor.sort('grade', 1);
    
    //cursor.sort([['grade', 1], ['student', -1]]); //grade en forma ascendente y student en forma descendente, grade tiene prioridad sobre student, asi que se ejecutara primero, luego student

    var options = { 'skip' : 1,
                    'limit' : 4,
                    'sort' : [['grade', 1], ['student', -1]] };
    var cursor = grades.find({}, {}, options);  // primer argumento es el selector, segundo es la proyeccion y el tercero son las opciones
    //recordar que primero se ejecuta sort, luego skip y finalmente limit
    cursor.each(function(err, doc) {
        if(err) throw err;
        if(doc == null) {
            return db.close();
        }
        console.dir(doc);
    });
});
