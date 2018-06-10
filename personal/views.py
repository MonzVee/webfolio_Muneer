# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

# Create your views here.

def index(request):
    return render(request, 'personal/index.html')

def about_me(request):
    return render(request, 'personal/about_me.html')

def interest(request):
    return render(request, 'personal/interest.html')

def travel1(request):
    return render(request, 'personal/Travel1.html')

def travel2(request):
    return render(request, 'personal/Travel2.html')

def travel3(request):
    return render(request, 'personal/Travel3.html')
