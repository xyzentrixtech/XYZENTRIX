from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .services import generate_reply


@api_view(["POST"])
@authentication_classes([])
@permission_classes([AllowAny])
def chat(request):
    user_message = request.data.get("message", "")
    history = request.data.get("history", [])

    reply = generate_reply(user_message, history)

    return Response({
        "reply": reply,
        "received": user_message,
    })
    