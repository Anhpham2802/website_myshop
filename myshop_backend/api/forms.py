from typing import Any
from nested_inline.admin import NestedStackedInline
from .models import *

class ProductVariationImageForm(NestedStackedInline.form):
    def is_multipart(self) -> Any:
        return True
    
    def clean(self) -> dict[str, Any]:
        # if image deleted, delete image from storage
        if self.cleaned_data.get('DELETE'):
            try:
                self.cleaned_data['image'].delete(save=False)
            except:
                pass

        return super().clean()

class AddProductForm(NestedStackedInline.form):
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)
        self.fields['images'].queryset = ProductVariationImage.objects.filter(product_variation=self.instance)

    def is_multipart(self) -> Any:
        return True

