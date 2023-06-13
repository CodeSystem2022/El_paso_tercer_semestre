import psycopg2 as bd

conexion = bd.connect(user= 'postgres', password = '582433', host = '127.0.0.1', port = '5432', database = 'test_bd')
try:
    # conexion.autocommit = False # no es buena practica tener este codigo
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Maria', 'Esparza', 'mesparzamail.com')
    cursor.execute(sentencia, valores)
    # conexion.commit() # Hacemos el commit manualmente
    print('Termina la transacción')
except Exception as e:
    print(f'Ocurrió un error, se hizo un rollback: {e}')
finally:
    conexion.close()