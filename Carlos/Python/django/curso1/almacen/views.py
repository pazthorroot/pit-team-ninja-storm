from django.shortcuts import render
from django.http import HttpResponse
from .models import Producto, Marca
# Create your views here.

def index(request):
  return HttpResponse("<h1>Hello Word</h1>")

def indexHtml(request):
  return render(request, 'almacen/index.html', {'producto':Producto.objects.all()})

def htmlId(request, id):
  value = id
  return render(request, 'almacen/producto_id.html', {'value':value})

def nuevo_pro(request):
  if request.method=='POST':
    nombre_pro = request.POST['nombre_pro']
    marca_pro = request.POST['marca_pro']
    cantidad_pro = request.POST['cantidad_pro']
    precio_pro = request.POST['precio_pro']
    existencia_pro = request.POST['existencia_pro']
    return render(request, 'almacen/save_pro.html',{
      "nombre_pro":nombre_pro,
      "marca_pro":marca_pro,
      "cantidad_pro":cantidad_pro,
      "precio_pro":precio_pro,
      "existencia_pro":existencia_pro,
    })
  return render(request, 'almacen/nuevo_pro.html', {'marcas':Marca.objects.all()})


