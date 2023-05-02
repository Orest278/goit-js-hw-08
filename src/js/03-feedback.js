import throttle from "lodash.throttle";

const form = document.querySelector(`.feedback-form`);
const emailInput = form.querySelector(`input[name=email]`);
const messageInput = form.querySelector(`textarea[name=message]`);
const feedbackFormStateKey = `feedback-form-state`;

const saveFormState = () => {
    const formState = {
        email: emailInput.value,
        message: messageInput.value
    };
    localStorage.setItem(`feedback-form-state`, JSON.stringify(formState));
};

const restoreStateFromLocalStoreg = () => {
  const formState = JSON.parse(localStorage.getItem(`feedback-form-state`));
  if (formState) {
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

const clearStatrFromLocalStoreg = () => {
    localStorage.removeItem(`feedback-form-state`);
};

const submitHandler = e => {
    e.preventDefault();
    const emailValue = emailInput.value.trim();
    const messsagValue = messageInput.value.trim();
    if (!emailValue || !messsagValue) {
        return
    }
    const state = {
        email: emailValue,
        message: messsagValue,
    };
    clearStatrFromLocalStoreg();
    emailInput.value = ``;
    messageInput.value = ``;
};

form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', submitHandler);

restoreStateFromLocalStoreg();
