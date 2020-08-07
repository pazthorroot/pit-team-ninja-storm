from django.contrib import admin
from .models import Marca, Producto
# Register your models here.
admin.site.register(Marca)
admin.site.register(Producto)

#####################
'''
crear un registro

>>> from almacen.models import Marca, Producto
>>> marca = Marca(nombre_mar='Diwod')
>>> marca.save()
>>> query = Marca.object.get(nombre_mar='Diwod')
>>> query.id_mar
4
>>> all = Producto.objects.all()
>>> all[0].marca_pro
>>> all[0].marca_pro.nombre_mar

'''
