# Generated by Django 4.2.9 on 2024-02-26 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0027_qwerty_title6_qwerty_title7_qwerty_title8'),
    ]

    operations = [
        migrations.CreateModel(
            name='Information',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('information', models.CharField(max_length=155, verbose_name='ЗАголовок')),
                ('title', models.CharField(max_length=155, verbose_name='Заголвок')),
                ('email', models.EmailField(max_length=254, verbose_name='Почта')),
            ],
        ),
    ]
