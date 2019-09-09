export function gotMessages(messages) {
  return {
    type: '@messages/GOT_MESSAGES',
    payload: messages,
  };
}

export function gotNewMessages(payload) {
  return {
    type: '@messages/GOT_NEW_MESSAGE',
    payload,
  };
}

export function resetMessages() {
  return {
    type: '@messages/RESET_MESSAGES',
  };
}
