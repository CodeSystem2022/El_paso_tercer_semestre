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
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = ('Marcelo', 'Cuenca', 'mcuenca@onemail.com', 8)
            cursor.execute(sentencia, valores) # De esta manera ejecutamos la sentencia
            registros_actualizados = cursor.rowcount
            print(f'Los registros actualizados son: {registros_actualizados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
