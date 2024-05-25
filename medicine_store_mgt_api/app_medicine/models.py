from django.db import models

# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Medicine(models.Model):
    company_name = models.ForeignKey(Company, on_delete=models.CASCADE)
    medicine_category = models.ForeignKey(Category, on_delete=models.CASCADE)
    medicine_name = models.CharField(max_length=255)
    medicine_price = models.FloatField()
    medicine_power = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.medicine_name
