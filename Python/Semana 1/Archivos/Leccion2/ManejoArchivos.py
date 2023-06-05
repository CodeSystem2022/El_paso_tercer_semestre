# context manajer
class ManejoArchivos:
    def __init__(self, nombre):
        self.nombre = nombre
        
    def __enter__ (self):
        print('Obtenemos el recurso'.center(50, '-'))
        self.nombre = open(self.nombre, 'r', encoding='utf8') # encapsulamos el codigo dentro del metodo
        return self.nombre
    
    def __exit__(self, tipo_exceptiom, valor_exception, traza_error):
        print('cerramos el recurso'.center(50, '_'))
        if self.nombre:
            self.nombre.close() # cerramos el archivo