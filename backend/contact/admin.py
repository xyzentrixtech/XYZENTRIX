import csv

from django.contrib import admin
from django.http import HttpResponse
from django.template.response import TemplateResponse
from django.urls import path

from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "phone",
        "subject",
        "status",
        "created_at",
        "updated_at",
    )

    list_editable = ("status",)

    list_filter = (
        "status",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
        "phone",
        "subject",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    ordering = ("-created_at",)

    # Admin Actions
    actions = ["export_as_csv"]

    change_list_template = "admin/contact/contactmessage/change_list.html"

    fieldsets = (
        (
            "Lead Information",
            {
                "fields": (
                    "name",
                    "email",
                    "phone",
                    "subject",
                    "message",
                )
            },
        ),
        (
            "Lead Management",
            {
                "fields": (
                    "status",
                    "notes",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    # ==========================
    # Lead Dashboard
    # ==========================

    def get_urls(self):
        urls = super().get_urls()

        custom_urls = [
            path(
                "dashboard/",
                self.admin_site.admin_view(self.dashboard_view),
                name="contact-dashboard",
            ),
        ]

        return custom_urls + urls

    def dashboard_view(self, request):
        total = ContactMessage.objects.count()
        new = ContactMessage.objects.filter(status="new").count()
        contacted = ContactMessage.objects.filter(status="contacted").count()
        closed = ContactMessage.objects.filter(status="closed").count()

        recent = ContactMessage.objects.order_by("-created_at")[:10]

        context = dict(
            self.admin_site.each_context(request),
            title="Lead Dashboard",
            total=total,
            new=new,
            contacted=contacted,
            closed=closed,
            recent=recent,
        )

        return TemplateResponse(
            request,
            "admin/contact/dashboard.html",
            context,
        )

    # ==========================
    # Export Leads to CSV
    # ==========================

    def export_as_csv(self, request, queryset):
        response = HttpResponse(content_type="text/csv")
        response["Content-Disposition"] = (
            'attachment; filename="contact_leads.csv"'
        )

        writer = csv.writer(response)
        writer.writerow(
            [
                "Name",
                "Email",
                "Phone",
                "Subject",
                "Status",
                "Created At",
            ]
        )

        for lead in queryset:
            writer.writerow(
                [
                    lead.name,
                    lead.email,
                    lead.phone,
                    lead.subject,
                    lead.get_status_display(),
                    lead.created_at.strftime("%Y-%m-%d %H:%M"),
                ]
            )

        return response

    export_as_csv.short_description = "Export selected leads to CSV"