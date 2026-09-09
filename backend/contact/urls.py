from django.urls import path

from .views import create_contact_message, dashboard_stats

urlpatterns = [
    path("", create_contact_message, name="contact-submit"),
    path("dashboard/", dashboard_stats, name="dashboard-stats"),
]