from dominio.Pelicula import Pelicula
from servicio.CatalogoPeliculas import CatalogoPeliculas as cp
opcion = None
while opcion != 4:
    try:
        print('Opciones: ')
        print('1. Agregar Pelicula.')
        print('2. Listar Peliculas.')
        print('3. Eliminar Catalogo de Peliculas.')
        print('4. Salir.')
        opcion = int(input('Digite la opcion deseada: '))
        if opcion == 1:
            nombrePelicula = input('Digite el nombre de la pelicula: ')
            pelicula = Pelicula(nombrePelicula)
            cp.agregarPeliculas(pelicula)
        elif opcion == 2:
            cp.listarPeliculas()
        elif opcion == 3:
            cp.eliminarPeliculas()
    except Exception as e:
        print(f'Ha ocurrido un error: {e}')
        opcion = None
    else:
        print('Salimos del programa...')
