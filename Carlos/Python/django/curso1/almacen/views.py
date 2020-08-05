from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
  return HttpResponse("<h1>Hello Word</h1>")

def indexHtml(request):
  return render(request, 'almacen/index.html')
