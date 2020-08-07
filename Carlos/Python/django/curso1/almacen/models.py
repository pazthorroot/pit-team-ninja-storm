from django.db import models

# Create your models here.

class Marca(models.Model):
  id_mar = models.AutoField(primary_key=True)
  nombre_mar = models.CharField(max_length=50)

  def __str__(self):
    return self.nombre_mar

class Producto(models.Model):
  id_pro = models.AutoField(primary_key=True)
  marca_pro = models.ForeignKey(Marca, on_delete=models.CASCADE)
  nombre_pro = models.CharField(max_length=30)
  cantidad_pro = models.IntegerField()
  precio_pro = models.FloatField()
  existencia_pro = models.BooleanField()
  def __str__(self):
    return self.nombre_pro
