from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from .models import *

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        token['full_name'] = user.first_name + " " + user.last_name
        token['role'] = 'admin' if user.is_superuser else 'user'

        return token
    
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password2', 'first_name', 'last_name', 'is_superuser')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

class AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attribute
        fields = ('name', )

class BrandsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brands
        fields = ('name',)

class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ('name',)

class ProductVariationAttributeSerializer(serializers.ModelSerializer):
    attribute = serializers.SerializerMethodField()
    value = serializers.SerializerMethodField()
    count = 0

    class Meta:
        model = ProductVariationAttribute
        fields = ('attribute', 'value')

    def get_attribute(self, obj):
        return obj.name

    def get_value(self, obj):
        product_variation_attributes =  ProductVariationAttribute.objects.filter(product_variation=self.context['product_variation_attribute'].id)
        self.count += 1
        return product_variation_attributes[self.count - 1].value

class ProductVariationImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductVariationImage
        fields = ('image',)

class ProductVariationSerializer(serializers.ModelSerializer):
    product_variation_attributes = serializers.SerializerMethodField()
    images = ProductVariationImageSerializer(many=True)

    class Meta:
        model = ProductVariation
        fields = '__all__'

    def get_product_variation_attributes(self, obj):
        return ProductVariationAttributeSerializer(
            obj.product_variation_attributes.all(),
            many=True,
            context={'product_variation_attribute': obj}
        ).data

class ProductSerializer(serializers.ModelSerializer):
    product_variations = ProductVariationSerializer(many=True)
    category = ProductCategorySerializer()
    brand = BrandsSerializer()

    class Meta:
        model = Product
        fields = '__all__'
