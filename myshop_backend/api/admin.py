from django.contrib import admin
from .models import *
from nested_inline.admin import NestedStackedInline, NestedModelAdmin
from .forms import *

admin.site.register(User)
admin.site.register(ProductCategory)
admin.site.register(Brands)
admin.site.register(Attribute)
  
class ProductVariationImageInline(NestedStackedInline):
    model = ProductVariationImage
    extra = 1
    fk_name = 'product_variation'
    form = ProductVariationImageForm

class ProductVariationAttributeInline(NestedStackedInline):
    model = ProductVariationAttribute
    extra = 1
    fk_name = 'product_variation'

class ProductVariationInline(NestedStackedInline):
    model = ProductVariation
    extra = 1
    fk_name = 'product'
    form = AddProductForm
    inlines = [ProductVariationAttributeInline, ProductVariationImageInline]

@admin.register(Product)
class ProductAdmin(NestedModelAdmin):
    model = Product
    inlines = [ProductVariationInline]
