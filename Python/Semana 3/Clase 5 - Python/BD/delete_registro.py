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
            sentencia = 'DELETE FROM persona WHERE id_persona=%s'
            entrada = input('Digite el numero de registro a eliminar: ')
            valores = (entrada,)  # Recordar que para que se lea como TUPLA debe tener una coma aunque sea un solo argumento
            cursor.execute(sentencia, valores) # De esta manera ejecutamos la sentencia
            registros_eliminados = cursor.rowcount
            print(f'Los registros eliminados son: {registros_eliminados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
