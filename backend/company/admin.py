from django.contrib import admin
from .models import CompanyProfile, Service, PortfolioProject

@admin.register(CompanyProfile)
class CompanyProfileAdmin(admin.ModelAdmin):
    list_display = (
        "company_name",
        "email",
        "phone",
        "hero_active",
        "updated_at",
    )

    readonly_fields = ("created_at", "updated_at")

    fieldsets = (
        ("Company Information", {
            "fields": (
                "company_name",
                "tagline",
                "logo",
            )
        }),

        ("Contact Details", {
            "fields": (
                "email",
                "phone",
                "website",
                "address",
            )
        }),

        ("Hero Section (Homepage)", {
            "fields": (
                "hero_active",
                "hero_title",
                "hero_subtitle",
                "hero_primary_button",
                "hero_secondary_button",
                "hero_image",
            )
        }),

        ("Social Media", {
            "fields": (
                "facebook",
                "instagram",
                "linkedin",
                "x_twitter",
                "youtube",
            )
        }),

        ("System Information", {
            "fields": (
                "created_at",
                "updated_at",
            )
        }),
    )

    def has_add_permission(self, request):
        # Allow only one Company Profile
        if CompanyProfile.objects.exists():
            return False
        return True

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "icon", "order", "active")
    list_editable = ("order", "active")
    ordering = ("order",)


@admin.register(PortfolioProject)
class PortfolioProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "featured", "active", "order")
    list_editable = ("featured", "active", "order")
    ordering = ("order",)
    search_fields = ("title", "technologies")

