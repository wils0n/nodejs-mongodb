###Apuntes

En mongo db es muy importante mantener los datos favorable para que la aplicación los utilice.

Asi que piensa en los patrones de tus datos.

	¿Qué datos son utilizados en conjunto?
	¿Cuáles son usados mayormente?
	¿Cuáles son para escritura y cuáles son escritos todo el tiempo?

###Características de MongoDB:

* Documentos enriquecidos
	No solo son documentos tabulares, sino que puede almacenar arrays de elementos y otros documentos enteros

* Datos embebidos
	Es importante, ya que en MondoDB no soporta relaciones directamente y embeber documentos nos va a permitir relacionar datos de una forma rápida.

* No soporta Joins
	Por eso es necesario pensar en qué datos puede ser utilizados en conjunto y si es posible embeberlo (hay que tener siempre presente el límite de los 16 MB)

* No hay restricciones
	Es decir, no hay restricciones de clave foránea

* Operaciones atómicas
	No soporta transacciones, pero si operaciones atómicas, por eso es importante pensar en cómo organizar nuestros datos para soportar operaciones atómicas

* No existe esquemas declarados
	Pero si ess importante en saber cuál es la estructura de tus datos