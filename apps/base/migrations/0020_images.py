# Generated by Django 4.2.9 on 2024-02-15 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0019_remove_qwerty_title6_settings_title7'),
    ]

    operations = [
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='portrait/', verbose_name='Фотография')),
            ],
        ),
    ]
