# Declarar Variables
nombre = 'valor'

ESTO_ES_CONSTANTE_DE_MENTIRA = "si, es de mentira"

_estoEsPrivado = "hey, atento que esta variable es privada"

holaSimple = 'mundo'
holaDoble = "mundo"
holaMulti = """hola
pepro
kslksl
laklka
"""
numero = '8'
pi = 3.14763763763
juicio = True
falso = False

# Listas
array = ['hyi', 2, "cachi"]

# tuplas
arrayInmutable = ('Daniel','el','cachi', True)
arrayInmutable.index(True)

# diccionarios
objetos = {
  "nombre": 'Daniel',
  "apodo": 'El Cachi',
  "edad": 18
}

# if
if numero is 8:
  print(numero)
  print(type(numero))
  print('cachi')
elif numero == '9':
  print(numero)
  print(type(numero))
  print('cachi el jaranero')
else:
  print(numero)
  print(type(numero))
  print('cachi nose')


# for
for dato in range(0,10,3):
  print(dato)

for index in range(len(array)):
  print(array[index])

for data in array:
  print(data)

for llave, valor in objetos.items():
  print(llave + ' - ' + str(valor))
  print('-----')

for llave in objetos:
  print(llave + ' - ' + str(objetos[llave]))
