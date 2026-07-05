export interface AirtableRecord {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
}

const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

const API_BASE_URL = "https://api.airtable.com/v0";

export async function submitFormToAirtable(data: AirtableRecord) {
  if (!API_KEY || !BASE_ID || !TABLE_NAME) {
    throw new Error("Missing Airtable configuration. Please set VITE_AIRTABLE_API_KEY, VITE_AIRTABLE_BASE_ID, and VITE_AIRTABLE_TABLE_NAME in .env.local");
  }

  try {
    const response = await fetch(`${API_BASE_URL}/${BASE_ID}/${TABLE_NAME}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              name: data.name,
              email: data.email,
              "phone number": data.phone,
              "event type": data.eventType,
              message: data.message,
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to submit form to Airtable");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Airtable submission error:", error);
    throw error;
  }
}
