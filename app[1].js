const form = document.getElementById("leadForm");
const status = document.getElementById("formStatus");
document.getElementById("year").textContent = new Date().getFullYear();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.className = "form-status";
  status.textContent = "Submitting…";

  const data = Object.fromEntries(new FormData(form).entries());
  const config = window.NAMMAWEB_SUPABASE || {};

  // Frontend works immediately. Add Supabase URL + anon key below when backend is ready.
  if (!config.url || !config.anonKey) {
    status.className = "form-status success";
    status.textContent = "Thank you. Your enquiry is ready to be connected to the Namma Web admissions backend.";
    form.reset();
    return;
  }

  try {
    const response = await fetch(`${config.url}/rest/v1/enquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": config.anonKey,
        "Authorization": `Bearer ${config.anonKey}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error("Submission failed");
    status.className = "form-status success";
    status.textContent = "Thank you. Our team will contact you shortly.";
    form.reset();
  } catch (error) {
    status.className = "form-status error";
    status.textContent = "We could not submit right now. Please try again or contact Namma Web directly.";
  }
});
