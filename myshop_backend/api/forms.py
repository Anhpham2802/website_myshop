from typing import Any
from nested_inline.admin import NestedStackedInline

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
    def is_multipart(self) -> Any:
        return True

