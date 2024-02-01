# Generated by Django 4.2.8 on 2024-02-01 12:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_alter_productvariation_product_variation_attributes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productvariationattribute',
            name='product_variation',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_variation_attribute', to='api.productvariation'),
        ),
    ]
