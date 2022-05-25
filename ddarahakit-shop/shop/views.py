from django.shortcuts import render, get_object_or_404
from .models import *
from cart.forms import AddProductForm

from allauth.account.signals import user_signed_up
from django.dispatch import receiver


def product_in_category(request, category_slug=None):
    current_category = None
    categories = Category.objects.all()
    products = Product.objects.prefetch_related('productimage_set').filter(available_display=True)
    if category_slug:
        current_category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=current_category)

    return render(request, 'shop/list.html', {'current_category': current_category,
                                              'categories': categories,
                                              'products': products,
                                              })


def product_detail(request, id, product_slug=None):
    categories = Category.objects.all()
    product = get_object_or_404(Product, id=id, slug=product_slug)
    product_images = product.productimage_set.all()
    add_to_cart = AddProductForm(initial={'quantity': 1})
    sales = int((product.sale_price/product.price)*100)
    return render(request, 'shop/detail.html', {'product': product, 'product_images': product_images, 'categories': categories, 'add_to_cart': add_to_cart})


@receiver(user_signed_up)
def user_signed_up_(**kwargs):
    user = kwargs['user']
    extra_data = user.socialaccount_set.filter(provider='naver')[0].extra_data
    user.last_name = extra_data['name'][0:4]
    user.first_name = extra_data['name'][4:]
    user.save()
