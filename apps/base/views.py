from django.shortcuts import render
from .models import *
# Create your views here.

def index(request):
    settings = Settings.objects.latest("id")
    qwerty = Qwerty.objects.all()
    images = Images.objects.latest("id")
    information = Information.objects.latest("id")
    return render(request,"index.html", locals())

