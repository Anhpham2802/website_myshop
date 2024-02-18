from django.contrib import admin
from .models import *
from nested_inline.admin import NestedStackedInline, NestedModelAdmin
from .forms import *

admin.site.register(User)
admin.site.register(ProductCategory)
admin.site.register(Brands)
admin.site.register(Attribute)
  
class ProductImageInline(NestedStackedInline):
    model = ProductImage
    extra = 1
    fk_name = 'product'
    form = ProductImageForm

class ProductAttributeInline(NestedStackedInline):
    model = ProductAttribute
    extra = 1
    fk_name = 'product'

@admin.register(Product)
class ProductAdmin(NestedModelAdmin):
    model = Product
    inlines = [ProductAttributeInline, ProductImageInline]
    form = ProductForm

    def get_object(self, request, object_id):
        self.obj = super().get_object(request, object_id)
        return self.obj
    
    # def formfield_for_manytomany(self, db_field, request, **kwargs):
    #     if db_field.name == "product_variations":
    #         kwargs["queryset"] = ProductVariation.objects.filter(product=self.obj)
    #     return super().formfield_for_manytomany(db_field, request, **kwargs)

    # def formfield_for_dbfield(self, db_field, request, **kwargs):
    #     if db_field.name == "main_variation":
    #         kwargs["queryset"] = ProductVariation.objects.filter(product=self.obj)
    #     return super().formfield_for_dbfield(db_field, request, **kwargs)
