# Generated by Django 5.1.2 on 2024-10-17 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('atm', '0004_alter_bankaccountuser_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bankaccountuser',
            name='phone_number',
            field=models.CharField(max_length=15, unique=True),
        ),
    ]
