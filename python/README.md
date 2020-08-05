### Creación de entornos virtuales para desarrollo

#### Instalación de virtualenv
```pip install virtualenv```

#### Creacion de un entorno
```virtualenv <nombre de entorno>```


### Usar entrono creado
una vez creado el entorno se debe ingresar a el

luego para activar este, si ingresa el siguiente comando
``` source bin/activate ```

### Para desactivar entorno

```deactivate```

### Obtener librerías de un entorno

Con freeze se puede obtener las librerías instaladas de un entorno en python

para guarda esta se dejan en un archivo txt de la siguiente manera

```pip freeze > req.txt```

para la instalación de este archivo es:

```pip install -r req.txt```

## Django
### instalación
```pip install Django```

### creación de un proyecto en Django
```django-admin startproject <mysite>```

### arrancar Django en modo desarrollo
```python manage.py runserver```

### crear una aplicación en Django
```python manage.py startapp polls```

### migrar aplicacione

```python manage.py migrate```

### crear usuario de en administración

```python manage.py createsuperuser ```

