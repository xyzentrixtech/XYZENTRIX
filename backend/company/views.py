from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import CompanyProfile
from .serializers import CompanyProfileSerializer


@api_view(["GET"])
def company_profile(request):
    company = CompanyProfile.objects.first()

    if not company:
        return Response({"message": "Company profile not found."}, status=404)

    serializer = CompanyProfileSerializer(company)
    return Response(serializer.data)