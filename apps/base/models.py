from django.db import models
from django_resized.forms import ResizedImageField

# Create your models here.
class Settings(models.Model):
    logo = ResizedImageField(
        force_format="WEBP", 
        quality=100, 
        upload_to='logo/',
        verbose_name="Логотип",
        blank = True, null = True
    )
    title = models.CharField(
        max_length=155,
        verbose_name="Название сайта"
    )
    title2 = models.CharField(
        max_length=155,
        verbose_name="Заголовок"
    )
    title3 = models.CharField(
        max_length=155,
        verbose_name="Заголовок2"
    )
    title4 = models.CharField(
        max_length=155,
        verbose_name="Загаловок3"
    )
    title5 = models.CharField(
        max_length=155,
        verbose_name="Заголовок4"
    )
    descriptions = models.TextField(
        max_length=500,
        verbose_name="Описание"
    )
    title6 = models.CharField(
        max_length=155,
        verbose_name="Название"
    )
    number = models.CharField(
        max_length=155,
        verbose_name="Процент"
    )
    image = ResizedImageField(
        force_format="WEBP",
	    quality=100,
        upload_to="image/"
    )
    descriptions2 = models.TextField(
        max_length=155,
        verbose_name="Оптсание2"
    )
    painting = models.ImageField(
        upload_to="portrait/",
        verbose_name="Фотография"
    )
    hobbi = models.CharField(
        max_length=155,
        verbose_name="Хоби"
    )
    about = models.CharField(
        max_length=155,
        verbose_name="Описания обо мне"
    )
    title7 = models.CharField(
        max_length=155,
        verbose_name="НАзвание"
    )
    languages = models.CharField(
        max_length=155,
        verbose_name="Заголовок"
    )
    english = models.CharField(
        max_length=155,
        verbose_name="Заголовок2"
    )
    russian = models.CharField(
        max_length=155,
        verbose_name="Заголовок3"
    )
    image2 = ResizedImageField(
        force_format="WEBP",
	    quality=100,
        upload_to="image/"
    )
    image3 = ResizedImageField(
        force_format="WEBP",
	    quality=100,
        upload_to="image/"
    )



    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name="Настройки сайта"
        verbose_name_plural="Настройки сайта"


class Qwerty(models.Model):
    title = models.CharField(
        max_length=155,
        verbose_name="Заголовок"
    )
    descriptions = models.TextField(
        max_length=400,
        verbose_name="Описание"
    )
    title2 = models.CharField(
        max_length=155,
        verbose_name="Название"
    )
    description = models.TextField(
        verbose_name="Заголовок"
    )
    title3 = models.CharField(
        max_length=155,
        verbose_name="Название2"
    )
    title4 = models.CharField(
        max_length=155,
        verbose_name="Название3"
    )
    descriptions2 = models.TextField(
        max_length=400,
        verbose_name="Описание"
    )
    title5 = models.CharField(
        max_length=155,
        verbose_name="Заголовок2"
    )
    number = models.CharField(
        max_length=155,
        verbose_name="ПРоцент"
    )
    title6 = models.CharField(
        max_length=155,
        verbose_name="Заголовок2"
    )
    title7 = models.CharField(
        max_length=155,
        verbose_name="Заголовок2"
    )
    title8 = models.CharField(
        max_length=155,
        verbose_name="Заголовок2"
    )


    class Meta:
        verbose_name="Настройки"
        verbose_name_plural="Настройки"


class Images(models.Model):
    image = models.ImageField(
        upload_to="portrait/",
        verbose_name="Фотография"
    )
    image1 = models.ImageField(
        upload_to="portrait/",
        verbose_name="Фотография"
    )
    image2 = models.ImageField(
        upload_to="portrait/",
        verbose_name="Фотография"
    )
    image3 = models.ImageField(
        upload_to="portrait/",
        verbose_name="Фотография"
    )
    image4 = models.ImageField(
        upload_to="portrait/",
        verbose_name="Фотография"
    )


class Information(models.Model):
    information=models.CharField(
        max_length=155,
        verbose_name="ЗАголовок"
    )
    title = models.CharField(
        max_length=155,
        verbose_name="Заголвок"
    )
    email = models.EmailField(
        verbose_name='Почта'
    )
    title2 = models.CharField(
        max_length=155,
        verbose_name="Заголовок2"
    )
    phone = models.CharField(
        max_length=255,
        verbose_name='Телефон'
    )
    title3 = models.CharField(
        max_length=155,
        verbose_name="Заголовок3"
    )
    address = models.CharField(
        max_length=255,
        verbose_name="Адрес"
    )