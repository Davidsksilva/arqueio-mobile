/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
const INITIAL_STATE = [];

export default function messages(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@messages/GOT_MESSAGES':
      let conversationIndex = -1;
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.payload.user.id) {
          conversationIndex = i;
          break;
        }
      }

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
      const encounters = state.filter(item => users.includes(item.id));

      if (encounters.length) {
        return state.map(item => {
          if (users.includes(item.id)) {
            return {
              ...item,
              messages: [message, ...item.messages],
            };
          }

          return item;
        });
      }
      return [
        ...state,
        {
          id: message.user._id,
          user: {
            id: message.user._id,
            name: message.user.name,
            avatar: message.user.avatar
              ? {
                  path: message.user.avatar,
                }
              : null,
          },
          messages: [message],
        },
      ];

    case '@messages/GOT_ALL_MESSAGES':
      return action.payload;

    case '@messages/RESET_MESSAGES':
      return [];
    default:
      return state;
  }
}
