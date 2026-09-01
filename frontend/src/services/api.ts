// Production Backend (Render)
const API_BASE_URL = "https://xyzentrix-5.onrender.com/api";

async function handleResponse(response: Response, errorMessage: string) {
  if (!response.ok) {
    throw new Error(errorMessage);
  }
  return response.json();
}

// Health
export async function getHealthStatus() {
  const response = await fetch(`${API_BASE_URL}/health/`);
  return handleResponse(response, "Failed to fetch backend status.");
}

// Company Profile
export async function getCompanyProfile() {
  const response = await fetch(`${API_BASE_URL}/company/`);
  return handleResponse(response, "Failed to fetch company profile.");
}

// Contact
export type ContactFormData = {
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

  return handleResponse(response, "Failed to send message.");
}

// XAi Assistant
export type ChatMessage = {
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

  return handleResponse(response, "Assistant is unavailable.");
}