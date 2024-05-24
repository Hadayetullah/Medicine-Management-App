from django.urls import path
from .views import (
    CompanyListCreateView,
    CompanyDetailView,
    CategoryListCreateView,
    CategoryDetailView,
    MedicineListCreateView,
    MedicineDetailView,
)

urlpatterns = [
    path('companies/', CompanyListCreateView.as_view(),
         name='company-list-create'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),

    path('categories/', CategoryListCreateView.as_view(),
         name='category-list-create'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(),
         name='category-detail'),

    path('medicines/', MedicineListCreateView.as_view(),
         name='medicine-list-create'),
    path('medicines/<int:pk>/', MedicineDetailView.as_view(), name='medicine-detail'),
]
