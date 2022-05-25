from django.urls import path
from .views import *
from django.urls import register_converter
from config import converters

register_converter(converters.HangulSlugConverter, 'myslug')


app_name = 'shop'

urlpatterns = [
    path('', product_in_category, name='product_all'),
    path('<myslug:category_slug>/', product_in_category, name='product_in_category'),
    path('<int:id>/<product_slug>/', product_detail, name='product_detail'),
]