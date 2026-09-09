// Backend URL (Local or Render)
const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://xyzentrix-5.onrender.com/api";

// Common response handler
async function handleResponse(response: Response, errorMessage: string) {
  if (!response.ok) {
    throw new Error(errorMessage);
  }
  return response.json();
}

// ==========================
// Health API
// ==========================
export async function getHealthStatus() {
  const response = await fetch(`${API_BASE_URL}/health/`);
  return handleResponse(response, "Failed to fetch backend status.");
}

// ==========================
// Company Profile API
// ==========================
export async function getCompanyProfile() {
  const response = await fetch(`${API_BASE_URL}/company/`);
  return handleResponse(response, "Failed to fetch company profile.");
}

// ==========================
// Services API
// ==========================
export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
  active: boolean;
};

export async function getServices(): Promise<Service[]> {
  const response = await fetch(`${API_BASE_URL}/services/`);
  return handleResponse(response, "Failed to fetch services.");
}

// ==========================
// Contact API
// ==========================
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

// ==========================
// XAi Assistant API
// ==========================
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

// ==========================
// Portfolio API
// ==========================

export type PortfolioProject = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  technologies: string;
  github_url: string;
  live_url: string;
  featured: boolean;
  active: boolean;
  order: number;
};

export async function getPortfolio(): Promise<PortfolioProject[]> {
  const response = await fetch(`${API_BASE_URL}/portfolio/`);
  return handleResponse(response, "Failed to fetch portfolio.");
}