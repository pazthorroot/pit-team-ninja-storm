from django.shortcuts import render
from django.http import HttpResponse
from .models import Producto
# Create your views here.

def index(request):
  return HttpResponse("<h1>Hello Word</h1>")

def indexHtml(request):
  return render(request, 'almacen/index.html', {'producto':Producto.objects.all()})

def htmlId(request, id):
  value = id
  return render(request, 'almacen/producto_id.html', {'value':value})
