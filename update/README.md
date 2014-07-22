El método `update` tiene la siguiente forma:

	db.collection.update(
	   <query>,
	   <operator>,
	   {
	     upsert: <boolean>,
	     multi: <boolean>,
	     writeConcern: <document>
	   }
	)


upsert: Si es `true`, crea un nuevo documento cuando el criterio (query) no corresponde.
multi: Si es `true`, actualiza multiples documentos que correspondan al criterio del query
	
	Si:
	query = { };
	multi = true;

	actualizará a todos los documentos, con los datos del opeator

