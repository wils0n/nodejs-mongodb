MongoDB es muy flexible, porque podemos añadir claves y atributos sin necesidad de cambiar todo el documento existente.

En ocasiones por cuestiones de rendimiento vamos a duplicar algunos datos en el documento

	En conclusione haz lo contrario a los que hacias en base de datos relacionales -> DESNORMALIZA

ya que si separas en diferentes colecciones, vas a tener problemas en Mongodb, ya que aqui no se permiten las relaciones, por lo tanto tendrias que buscar primero en una coleccion, guardarlo en memoria, y hacer lo mismo para otras colecciones.

###Regla de ORO
Si te ves haciendo algo exactamente de la misma manera en que lo harías para un diseño relaciona, probablemente no estás tomando el mejor enfoque, siempre trata de embeber datos donde puedas.

Teniendo claro siempre que cada documento soporta un máximo de 16 MB, en estos casos si tienes que tenerlos en colecciones separadas