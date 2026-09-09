from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import CompanyProfile, Service, PortfolioProject
from .serializers import (
    CompanyProfileSerializer,
    ServiceSerializer,
    PortfolioProjectSerializer,
)


@api_view(["GET"])
def company_profile(request):
    company = CompanyProfile.objects.first()

    if not company:
        return Response({"message": "Company profile not found."}, status=404)

    serializer = CompanyProfileSerializer(
        company,
        context={"request": request}
    )
    return Response(serializer.data)


@api_view(["GET"])
def services_list(request):
    services = Service.objects.filter(active=True).order_by("order")
    serializer = ServiceSerializer(services, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def portfolio_list(request):
    projects = PortfolioProject.objects.filter(active=True).order_by("order")
    serializer = PortfolioProjectSerializer(
        projects,
        many=True,
        context={"request": request},
    )
    return Response(serializer.data)