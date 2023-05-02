# Generated by Django 3.0.5 on 2023-04-29 20:38

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('genre', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='movies/')),
                ('availability', models.CharField(choices=[('nowshowing', 'Now Showing'), ('upcoming', 'Upcoming'), ('none', 'None')], default='none', max_length=20)),
                ('language', models.CharField(choices=[('english', 'English'), ('malayalam', 'Malayalam')], default='english', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Screen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('capacity', models.IntegerField()),
                ('sound', models.CharField(max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Theatre',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('screens', models.ManyToManyField(to='articles.Screen')),
            ],
        ),
        migrations.CreateModel(
            name='Showtime',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.Movie')),
                ('screen', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.Screen')),
                ('theatre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.Theatre')),
            ],
        ),
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seats', models.IntegerField()),
                ('showtime', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.Showtime')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]