from rest_framework import serializers
from .models import Company, Category, Medicine


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = ['id', 'company_name', 'medicine_category',
                  'medicine_name', 'medicine_price', 'created_at', 'modified_at']
