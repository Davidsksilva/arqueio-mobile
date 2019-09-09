/* eslint-disable no-case-declarations */
const INITIAL_STATE = [];

export default function messages(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@messages/GOT_MESSAGES':
      // console.tron.log(action.payload.user.id);
      let conversationIndex = -1;
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.payload.user.id) {
          conversationIndex = i;
          break;
        }
      }
      /* const conversationIndex = state.indexOf(e => {
        console.tron.log(e.id);

        return e.id === action.payload.user.id;
      }); */

      // console.tron.log(conversationIndex);

      if (conversationIndex === -1) {
        return [
          ...state,
          {
            ...action.payload.user,
            messages: action.payload.messages,
          },
        ];
      }

      const copy = state;
      copy[conversationIndex].messages = action.payload.messages;

      return copy;

    // return action.payload.messages ? action.payload.messages : [];
    case '@messages/GOT_NEW_MESSAGE':
      const { users, message } = action.payload;

      return state.map(item => {
        if (users.includes(item.id)) {
          return {
            ...item,
            messages: [message, ...item.messages],
          };
        }

        return item;
      });
    case '@messages/RESET_MESSAGES':
      return [];
    default:
      return state;
  }
}
