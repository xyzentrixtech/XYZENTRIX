from django.urls import path

from .views import company_profile, services_list, portfolio_list

urlpatterns = [
    path("company/", company_profile, name="company-profile"),
    path("services/", services_list, name="services-list"),
    path("portfolio/", portfolio_list, name="portfolio-list"),
]