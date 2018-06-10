from django.conf.urls import url, include
from. import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'about_me/', views.about_me, name = 'about_me'),
    url(r'interest/', views.interest, name = 'interest'),
    url(r'travel1/', views.travel1, name = 'travel1'),
    url(r'travel2/', views.travel2, name = 'travel2'),
    url(r'travel3/', views.travel3, name = 'travel3'),
]

