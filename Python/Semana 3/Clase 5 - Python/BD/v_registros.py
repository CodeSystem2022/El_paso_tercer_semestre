import psycopg2                     # Con esto nos conectamos a postgresql

conexion = psycopg2.connect(
    user = 'postgres',
    password = 'Pochiyo2',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_bd'
)
# print(conexion)

# creamos un cursor CON WITH
try:                                # Este try-catch es necesario para el cierre de la conexion CON WITH
    with conexion:
        with conexion.cursor() as cursor:

# cursor = conexion.cursor()            cursor creado SIN WITH

#           sentencia = 'SELECT * FROM persona'                                   de esta manera capturamos todo.
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s'          # asi señalamos solo la informacion puntual que queremos.
            # a la seña %s se la conoce como PLACE HOLDER (parametro posicional), a continuacion es reemplazada por una variable
            # id_persona = input('Digite un numero para el id_persona)
            entrada = input('Digite los id_persona a buscar (separados por coma): ')
            llaves_primarias = (tuple(entrada.split(', ')),)                    # split elimina las comas, y tuple convierte los valores a tupla
            # a la siguiente sentencia le pasamos el valor de id_persona como una tupla. Recordar que para ser leida como cupla tiene que llevar una coma.
            cursor.execute(sentencia, llaves_primarias) # De esta manera ejecutamos la sentencia
            # registros = cursor.fetchall()  Recuperamos todos los registros que seran una lista
            # registros = cursor.fetchone()  Recuperamos solo un registro especificado
            registros = cursor.fetchall()
            for registro in registros:
                print(registro)
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
# cursor.close()                        este cierre es necesario al crear el cursor SIN WITH
# conexion.close()                      este cierre es necesario al crear el cursor SIN WITH

