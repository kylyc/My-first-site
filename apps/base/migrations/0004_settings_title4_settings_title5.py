# Generated by Django 4.2.9 on 2024-02-05 08:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_settings_title3'),
    ]

    operations = [
        migrations.AddField(
            model_name='settings',
            name='title4',
            field=models.CharField(default=1, max_length=155, verbose_name='Загаловок3'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='settings',
            name='title5',
            field=models.CharField(default=1, max_length=155, verbose_name='Заголовок4'),
            preserve_default=False,
        ),
    ]