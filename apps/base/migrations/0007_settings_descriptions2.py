# Generated by Django 4.2.9 on 2024-02-05 08:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_settings_number_settings_title6'),
    ]

    operations = [
        migrations.AddField(
            model_name='settings',
            name='descriptions2',
            field=models.TextField(default=1, max_length=155, verbose_name='Оптсание2'),
            preserve_default=False,
        ),
    ]
