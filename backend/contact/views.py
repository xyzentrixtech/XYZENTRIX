from rest_framework import status
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import ContactMessage
from .serializers import ContactMessageSerializer


@api_view(["POST"])
@authentication_classes([])
@permission_classes([AllowAny])
def create_contact_message(request):
    serializer = ContactMessageSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "Message sent successfully."},
            status=status.HTTP_201_CREATED,
        )

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST,
    )


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def dashboard_stats(request):
    return Response({
        "total": ContactMessage.objects.count(),
        "new": ContactMessage.objects.filter(status="new").count(),
        "contacted": ContactMessage.objects.filter(status="contacted").count(),
        "closed": ContactMessage.objects.filter(status="closed").count(),
    })