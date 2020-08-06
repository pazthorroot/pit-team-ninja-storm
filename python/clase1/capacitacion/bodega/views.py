from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
  return HttpResponse("<h1> hola PIT </h1>")

def html(request):
  return render(request, 'bodega/index.html', {'bob':[9,8,7,6,5,4,3]})
