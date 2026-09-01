from django.urls import path
from .views import company_profile

urlpatterns = [
    path("", company_profile, name="company-profile"),
]