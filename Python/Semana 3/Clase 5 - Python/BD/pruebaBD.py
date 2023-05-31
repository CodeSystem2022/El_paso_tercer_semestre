import psycopg2 # Con esto nos conectamos a postgresql

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

#            sentencia = 'SELECT * FROM persona'         de esta manera capturamos todo.
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' # asi señalamos solo la informacion puntual que queremos.
            # a la seña %s se la conoce como PLACE HOLDER, a continuacion es reemplazada por una variable
            id_persona =  input('Digite el numero para el id_persona: ')
            # a la siguiente sentencia le pasamos el valor de id_persona como una cupla. Recordar que para ser leida como cupla tiene que llevar una coma.
            cursor.execute(sentencia, (id_persona,)) # De esta manera ejecutamos la sentencia
            # registros = cursor.fetchall()  Recuperamos todos los registros que seran una lista
            registros = cursor.fetchone()
            print(registros)
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
# cursor.close()                        este cierre es necesario al crear el cursor SIN WITH
# conexion.close()                      este cierre es necesario al crear el cursor SIN WITH

