import throttle from "lodash.throttle";

const form = document.querySelector(`.feedback-form`);
const emailInput = form.querySelector(`input[name=email]`);
const messageInput = form.querySelector(`textarea[name=message]`);
const feedbackFormStateKey = `feedback-form-state`;
let formData = {};
