from typing import Any
from django.db import models
from django.contrib.auth.models import AbstractUser
from .storage_backends import AvatarStorage, ProductStorage
from django.conf import settings
import datetime
import os
from django.db.models.signals import pre_save
from django.dispatch import receiver

class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=100, unique=True)
    phone = models.CharField(max_length=10, unique=True, null=True, blank=True)
    avatar = models.FileField(storage=AvatarStorage(), null=True, blank=True, default=settings.DEFAULT_PROFILE_AVATAR)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self) -> str:
        return self.first_name + " " + self.last_name
    
    def save(self, *args, **kwargs):
        if self.avatar:
            # Delete old image when update
            try:
                old_avatar = User.objects.get(id=self.id)
                if old_avatar.avatar != self.avatar:
                    old_avatar.avatar.delete(save=False)
            except:
                pass

            now = datetime.datetime.now()
            print(now)
            timestamp = now.strftime("%d%m%Y_%H%M%S")
            self.updated_at = now
            # you can use timestamp as a parameter for url

            username = self.username
            file_ext = os.path.splitext(str(self.avatar.name))[-1]
            self.avatar.name = f"{username}/user_image_{timestamp}{file_ext}"
            self.avatar.storage.location = \
                f"{settings.AVATAR_LOCATION}"
        super().save(*args, **kwargs)

class ProductCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'Danh mục sản phẩm'
        verbose_name_plural = 'Danh mục sản phẩm'

    def __str__(self) -> str:
        return self.name
    
class Brands(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'Nhãn hàng'
        verbose_name_plural = 'Nhãn hàng'

    def __str__(self) -> str:
        return self.name
    
class ProductVariationImage(models.Model):
    product_variation = models.ForeignKey('ProductVariation', on_delete=models.CASCADE)
    image = models.FileField(storage=ProductStorage(), null=True, blank=True)

    class Meta:
        verbose_name = 'Ảnh sản phẩm'
        verbose_name_plural = 'Ảnh sản phẩm'

    def __str__(self) -> str:
        return self.image.name
    
    def save(self, *args, **kwargs):
        if self.image:
            now = datetime.datetime.now()
            timestamp = now.strftime("%d%m%Y_%H%M%S")
            self.updated_at = now
            # you can use timestamp as a parameter for url

            file_ext = os.path.splitext(str(self.image.name))[-1]
            self.image.name = f"{self.product_variation.product.id}/{self.product_variation.id}/product_image_{timestamp}{file_ext}"
            self.image.storage.location = \
                f"{settings.PRODUCT_LOCATION}"
        super().save(*args, **kwargs)

@receiver(pre_save, sender=ProductVariationImage)
def delete_file_on_change(sender, instance, **kwargs):
    try:
        old_instance = ProductVariationImage.objects.get(id=instance.id)
        if old_instance.image != instance.image:
            old_instance.image.delete(save=False)

    except ProductVariationImage.DoesNotExist:
        return

class Product(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brands, on_delete=models.CASCADE)
    numLikes = models.IntegerField(default=0)
    numReviews = models.IntegerField(default=0)
    avg_rating = models.FloatField(default=0)
    main_variation = models.OneToOneField('ProductVariation', on_delete=models.CASCADE, null=True, blank=True, related_name='main_variation')
    product_variations = models.ManyToManyField('ProductVariation', related_name='product_variations', blank=True, null=True)

    class Meta:
        verbose_name = 'Sản phẩm'
        verbose_name_plural = 'Sản phẩm'

    def __str__(self) -> str:
        return self.name

class Attribute(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.CharField(max_length=100, unique=True)

    class Meta:
        verbose_name = 'Thuộc tính'
        verbose_name_plural = 'Thuộc tính'

    def __str__(self) -> str:
        return self.name
    
class ProductVariation(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_variation')
    code = models.CharField(max_length=100, unique=True)
    origin_price = models.FloatField()
    discount_price = models.FloatField(null=True, blank=True)
    stock = models.IntegerField(default=0)
    sold = models.IntegerField(default=0)
    images = models.ManyToManyField(ProductVariationImage, related_name='images', blank=True, null=True)
    product_variation_attributes = models.ManyToManyField(Attribute, through='ProductVariationAttribute', related_name='product_variation_attributes', blank=True, null=True)
    class Meta:
        verbose_name = 'Biến thể sản phẩm'
        verbose_name_plural = 'Biến thể sản phẩm'

    def __str__(self) -> str:
        return f'{self.product.id} - {self.code}'
    
class ProductVariationAttribute(models.Model):
    product_variation = models.ForeignKey(ProductVariation, on_delete=models.CASCADE, related_name='product_variation_attribute', null=True, blank=True)
    attribute = models.ForeignKey(Attribute, on_delete=models.CASCADE, null=True, blank=True)
    value = models.CharField(max_length=100, null=True, blank=True)
    class Meta:
        verbose_name = 'Thuộc tính sản phẩm'
        verbose_name_plural = 'Thuộc tính sản phẩm'

class Rating(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    product_variation = models.ForeignKey(ProductVariation, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.FloatField()
    review = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'Đánh giá'
        verbose_name_plural = 'Đánh giá'

class LikeProduct(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Sản phẩm yêu thích'
        verbose_name_plural = 'Sản phẩm yêu thích'

class CartDetails(models.Model):
    cart = models.ForeignKey('Cart', on_delete=models.CASCADE, related_name='CartDetails')
    product_variation = models.ForeignKey(ProductVariation, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    price = models.FloatField(default=0)

    class Meta:
        verbose_name = 'Chi tiết giỏ hàng'
        verbose_name_plural = 'Chi tiết giỏ hàng'
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cart_details = models.ForeignKey(CartDetails, on_delete=models.CASCADE, null=True, blank=True, related_name='Cart')
    total_price = models.FloatField(default=0)
    is_checkout = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Giỏ hàng'
        verbose_name_plural = 'Giỏ hàng'

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    is_paid = models.BooleanField(default=False)
    is_shipped = models.BooleanField(default=False)
    is_delivered = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Đơn hàng'
        verbose_name_plural = 'Đơn hàng'
