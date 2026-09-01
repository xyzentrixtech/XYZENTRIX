from django.contrib import admin
from django.urls import include, path,  re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie



@method_decorator(ensure_csrf_cookie, name="dispatch")
class ReactAppView(TemplateView):
    template_name = "index.html"

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("core.urls")),
    path("api/company/", include("company.urls")),
    path("api/contact/", include("contact.urls")),
    path("api/assistant/", include("assistant.urls")),
    re_path(r"^(?!(api|admin|media)(/|$)).*$",ReactAppView.as_view(),)
,]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)