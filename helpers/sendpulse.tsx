export async function triggerSendpulseEvent(payload: Record<string, any>) {
  const eventUrl = process.env.SENDPULSE_EVENT_URL || "https://events.sendpulse.com/events/id/946c03254d8349a280b7e82e13c5752a/9244898";
  
  console.log(`[SendPulse] Triggering event via public ID URL: ${eventUrl}`, payload);
  try {
    const response = await fetch(eventUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log("[SendPulse] Public Event URL success response:", data);
      return data;
    } else {
      const errText = await response.text();
      console.error(`[SendPulse] Public Event URL error response (status ${response.status}):`, errText);
    }
  } catch (error) {
    console.error("[SendPulse] Public Event URL trigger failed with error:", error);
  }

  // Fallback to Auth REST API trigger if the direct URL fails or if we want to be thorough
  const apiKey = process.env.SENDPULSE_API_KEY;
  if (apiKey) {
    const authUrl = "https://events.sendpulse.com/events/name/registration";
    console.log(`[SendPulse] Fallback: Triggering event via authorization at ${authUrl}`, payload);
    try {
      const response = await fetch(authUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("[SendPulse] Authenticated Event API success response:", data);
        return data;
      } else {
        const errText = await response.text();
        console.error(`[SendPulse] Authenticated Event API error response (status ${response.status}):`, errText);
      }
    } catch (error) {
      console.error("[SendPulse] Authenticated Event API trigger failed with error:", error);
    }
  }
}
