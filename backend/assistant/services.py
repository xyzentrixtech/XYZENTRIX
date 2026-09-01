from openai import OpenAI
from django.conf import settings

from .prompts.system_prompt import SYSTEM_PROMPT


def generate_reply(user_message: str, history=None) -> str:
    """
    Returns an AI response.
    If no API key is configured, it returns an intelligent fallback.
    """

    if history is None:
        history = []

    # Smart fallback (No OpenAI key yet)
    if not settings.OPENAI_API_KEY:
        message = user_message.lower()

        # Previous conversation
        last_assistant = ""
        last_user = ""

        if history:
            for msg in reversed(history):
                if msg.get("sender") == "assistant" and not last_assistant:
                    last_assistant = msg.get("text", "").lower()

                if msg.get("sender") == "user" and not last_user:
                    last_user = msg.get("text", "").lower()

                if last_assistant and last_user:
                    break

        # ERP conversation
        if "erp" in message:
            return (
                "Great! I can help with ERP solutions.\n\n"
                "To recommend the right ERP, I need to know:\n"
                "• What type of business do you have?\n"
                "• How many employees will use it?\n"
                "• Which modules do you need (HR, Inventory, Sales, Finance)?"
            )

        if "what type of business" in last_assistant:
            return (
                f"Great! A **{user_message}** ERP can be customized for your operations.\n\n"
                "Next, I need to know:\n"
                "• Approximately how many employees will use the ERP?\n"
                "• Which modules do you need (Inventory, Production, Sales, HR, Finance)?"
            )

        if "how many employees" in last_assistant:
            return (
                "Thanks! Based on that, we can recommend the right ERP architecture.\n\n"
                "Finally, which modules do you need first?\n"
                "• Inventory\n"
                "• Production\n"
                "• Sales\n"
                "• HR\n"
                "• Finance"
            )

        # Chatbot conversation
        if "chatbot" in message or "bot" in message:
            return (
                "We build AI chatbots for Websites, WhatsApp, Instagram, and Customer Support.\n\n"
                "Which platform do you want the chatbot for?"
            )

        # Website conversation
        if "website" in message:
            return (
                "We build AI-powered websites using React and Django.\n\n"
                "Is it a Business Website, E-commerce Website, Portfolio, or Custom Web Application?"
            )

        # Default response
        return (
            "Hello! I'm XAi, the XYZENTRIX Business Assistant. 👋\n\n"
            "I can help you with AI Web Apps, AI Agents, ERP, CRM, Mobile Apps, "
            "Cyber Security, Data Science, and Cloud Solutions.\n\n"
            "Tell me what you're planning to build."
        )

    # Real OpenAI response (used later when API key is added)
    client = OpenAI(api_key=settings.OPENAI_API_KEY)

    response = client.responses.create(
        model="gpt-5.1-mini",
        input=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_message},
        ],
    )

    return response.output_tex