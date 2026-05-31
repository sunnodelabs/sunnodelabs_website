const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const deletionForm = document.getElementById("deletionRequestForm");

if (deletionForm) {
  const endpoint = deletionForm.dataset.endpoint;
  const message = document.getElementById("deletionFormMessage");
  const configNotice = document.getElementById("deletionConfigNotice");
  const submitButton = deletionForm.querySelector("button[type='submit']");
  const isConfigured =
    endpoint && !endpoint.includes("PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE");

  if (isConfigured) {
    deletionForm.action = endpoint;
  } else {
    configNotice.hidden = false;
    submitButton.disabled = true;
  }

  deletionForm.addEventListener("submit", () => {
    message.textContent =
      "Submitting your deletion request. Please wait for confirmation.";
    message.classList.add("is-visible");
    submitButton.disabled = true;

    window.setTimeout(() => {
      message.textContent =
        "Your request has been submitted. SunNodeLabs will review it and update the status.";
      deletionForm.reset();
      submitButton.disabled = false;
    }, 1400);
  });
}
