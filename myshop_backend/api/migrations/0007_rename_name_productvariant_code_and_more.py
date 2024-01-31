# Generated by Django 4.2.8 on 2024-01-31 15:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_attribute_cart_cartdetails_likeproduct_order_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productvariant',
            old_name='name',
            new_name='code',
        ),
        migrations.RemoveField(
            model_name='productvariantattribute',
            name='value',
        ),
        migrations.AlterField(
            model_name='productvariantattribute',
            name='product_variant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_variant_attribute', to='api.productvariant'),
        ),
        migrations.CreateModel(
            name='AttributeOption',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.CharField(blank=True, max_length=100, null=True, unique=True)),
                ('attribute', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.attribute')),
            ],
        ),
        migrations.AlterField(
            model_name='productvariantattribute',
            name='attribute',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.attributeoption'),
        ),
    ]
