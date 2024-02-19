# Generated by Django 4.2.8 on 2024-02-19 14:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_orderitem_color_remove_orderitem_size_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderdetail',
            old_name='total',
            new_name='total_price',
        ),
        migrations.RemoveField(
            model_name='orderdetail',
            name='address',
        ),
        migrations.AddField(
            model_name='orderdetail',
            name='city',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orderdetail',
            name='district',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orderdetail',
            name='payment_method',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orderdetail',
            name='ward',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
    ]