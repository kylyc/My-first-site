# Generated by Django 4.2.9 on 2024-02-05 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_settings_title4_settings_title5'),
    ]

    operations = [
        migrations.AddField(
            model_name='settings',
            name='descriptions',
            field=models.TextField(default=1, max_length=500, verbose_name='Описание'),
            preserve_default=False,
        ),
    ]
