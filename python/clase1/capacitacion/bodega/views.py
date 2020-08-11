from django.shortcuts import render
from django.http import HttpResponse
from .models import Producto

# Create your views here.
def index(request):
  return HttpResponse("<h1> hola PIT </h1>")

def html(request):
  return render(request, 'bodega/index.html', {'producto':Producto.objects.all()})

def producto_id(request, id):
  pro = Producto.objects.get(id_pro=id)
  return render(request, 'bodega/producto_id.html', {'producto': pro})
