from django.contrib import admin
from .models import CompanyProfile


@admin.register(CompanyProfile)
class CompanyProfileAdmin(admin.ModelAdmin):
    list_display = ("company_name", "email", "phone", "updated_at")

    def has_add_permission(self, request):
        # Allow only one Company Profile
        if CompanyProfile.objects.exists():
            return False
        return True