from django.shortcuts import render
from django.http import HttpResponse
from .models import Producto, Marca

# Create your views here.
def index(request):
  return HttpResponse("<h1> hola PIT </h1>")

def html(request):
  return render(request, 'bodega/index.html', {'producto':Producto.objects.all()})

def producto_id(request, id):
  pro = Producto.objects.get(id_pro=id)
  return render(request, 'bodega/producto_id.html', {'producto': pro})

def nuevo_pro(request):
  marcas = Marca.objects.all()
  if request.method == 'POST':
    marca_pro = request.POST['marca_pro']
    nombre_pro = request.POST['nombre_pro']
    cantidad_pro = request.POST['cantidad_pro']
    precio_pro = request.POST['precio_pro']
    estado_pro = request.POST['estado_pro']
    marca = Marca.objects.get(id_mar=int(marca_pro))
    if estado_pro == 'on':
      estado_pro = True
    elif estado_pro == 'off':
      estado_pro = False
    nuevo_producto = Producto(marca_pro=marca,nombre_pro=nombre_pro,cantidad_pro=cantidad_pro,precio_pro=precio_pro,estado_pro=estado_pro)
    nuevo_producto.save()
    return render(request, 'bodega/index.html',  {'producto':Producto.objects.all()})

  return render(request, 'bodega/nuevo_pro.html', {'marcas':marcas})

def save_pro(request):
  marca_pro = request.GET['marca_pro']
  nombre_pro = request.GET['nombre_pro']
  cantidad_pro = request.GET['cantidad_pro']
  precio_pro = request.GET['precio_pro']
  estado_pro = request.GET['estado_pro']
  marca = Marca.objects.get(id_mar=int(marca_pro))
  if estado_pro == 'on':
    estado_pro = True
  elif estado_pro == 'off':
    estado_pro = False

  nuevo_producto = Producto(marca_pro=marca,nombre_pro=nombre_pro,cantidad_pro=cantidad_pro,precio_pro=precio_pro,estado_pro=estado_pro)
  nuevo_producto.save()
  return render(request, 'bodega/index.html',  {'producto':Producto.objects.all()})
