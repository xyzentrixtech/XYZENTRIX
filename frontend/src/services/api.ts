const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function getHealthStatus() {
  const response = await fetch(`${API_BASE_URL}/health/`);

  if (!response.ok) {
    throw new Error("Failed to fetch backend status.");
  }

  return response.json();
}

export async function getCompanyProfile() {
  const response = await fetch(`${API_BASE_URL}/company/`);

  if (!response.ok) {
    throw new Error("Failed to fetch company profile.");
  }

  return response.json();
}


type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export async function sendContactMessage(data: ContactFormData) {
  const response = await fetch(`${API_BASE_URL}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send message.");
  }

  return response.json();
}


type ChatMessage = {
  sender: "user" | "assistant";
  text: string;
};

export async function sendAssistantMessage(
  message: string,
  history: ChatMessage[]
) {
  const response = await fetch(`${API_BASE_URL}/assistant/chat/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      history,
    }),
  });

  if (!response.ok) {
    throw new Error("Assistant is unavailable.");
  }

  return response.json();
}