from psycopg2 import pool
# psycopg2 as bd (otra manera de impotar el psycopg2)
from logger_base import log
import sys


class Conexion:
    _DATABASE = 'test_bd'
    _USERNAME = 'postgres'
    _PASSWORD = '582433'
    _DB_PORT = '5432'
    _HOST = '127.0.0.1'
    _MIN_CON_ = 1
    _MAX_CON_ = 5
    _pool = None
    
    
    @classmethod
    def obtenerConexion(cls):
        pass
    
    
    @classmethod
    def obtenerCursor(cls):
        pass
    
    
    @classmethod
    def obtenerPool(cls):
        if cls._pool is None:
            try:
                cls._pool = pool.SimpleConnectionPool(
                    cls._MIN_CON_,
                    cls._MAX_CON_,
                    host = cls._HOST,
                    user = cls._USERNAME,
                    password = cls._PASSWORD,
                    port = cls._DB_PORT,
                    database = cls._DATABASE
                )
                log.debug(f'Creacion del pool exitosa: {cls._pool}')
                return cls._pool
            except Exception as e:
                log.error(f'Error al crear el pool de conexiones: {e}')
                sys.exit()
        
        
if __name__=='__main__':
    pass