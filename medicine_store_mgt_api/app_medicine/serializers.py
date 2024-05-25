from rest_framework import serializers
from rest_framework.exceptions import ValidationError
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
    company_name = CompanySerializer()
    medicine_category = CategorySerializer()

    class Meta:
        model = Medicine
        fields = ['id', 'company_name', 'medicine_category', 'medicine_name',
                  'medicine_price', 'medicine_power', 'created_at', 'modified_at']

    def validate(self, data):
        company_name = data['company_name']['name']
        category_name = data['medicine_category']['name']
        medicine_name = data['medicine_name']
        medicine_power = data['medicine_power']

        company = Company.objects.filter(name=company_name).first()
        category = Category.objects.filter(name=category_name).first()

        if company and category:
            if Medicine.objects.filter(
                company_name=company,
                medicine_category=category,
                medicine_name=medicine_name,
                medicine_power=medicine_power
            ).exists():
                raise ValidationError(
                    "Medicine with this company, category, name, and power already exists.")
        return data

    def create(self, validated_data):
        company_data = validated_data.pop('company_name')
        category_data = validated_data.pop('medicine_category')

        company, _ = Company.objects.get_or_create(name=company_data['name'])
        category, _ = Category.objects.get_or_create(
            name=category_data['name'])

        medicine = Medicine.objects.create(
            company_name=company, medicine_category=category, **validated_data)
        return medicine

    def update(self, instance, validated_data):
        company_data = validated_data.pop('company_name', None)
        category_data = validated_data.pop('medicine_category', None)

        if company_data:
            company = instance.company_name
            company.name = company_data.get('name', company.name)
            company.save()
            instance.company_name = company

        if category_data:
            category = instance.medicine_category
            category.name = category_data.get('name', category.name)
            category.save()
            instance.medicine_category = category

        instance.medicine_name = validated_data.get(
            'medicine_name', instance.medicine_name)
        instance.medicine_price = validated_data.get(
            'medicine_price', instance.medicine_price)
        instance.medicine_power = validated_data.get(
            'medicine_power', instance.medicine_power)
        instance.save()

        return instance
