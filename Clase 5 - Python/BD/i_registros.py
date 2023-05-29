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
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES(%s, %s, %s)'
            valores = ('Carlos', 'Lara', 'clara@onemail.com') # Esto es una TUPLA
            cursor.execute(sentencia, valores) # De esta manera ejecutamos la sentencia
            # conexion.commit() Esto se utiliza para guardar los cambios en la base de datos, pero el with en este caso lo hace automaticamente
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

