# Generated by Django 4.2.9 on 2024-02-26 12:50

from django.db import migrations
import django_resized.forms


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0022_images_image1_images_image2_images_image3_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='settings',
            name='image',
            field=django_resized.forms.ResizedImageField(crop=None, default=1, force_format='WEBP', keep_meta=True, quality=100, scale=None, size=[1920, 1080], upload_to='image/'),
            preserve_default=False,
        ),
    ]
