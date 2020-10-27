const initialState = {
  isPlaying: false,
  isEditing: true,
  mute: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "START_PLAY":
      return { ...state, isPlaying: true };
    case "STOP_PLAY":
      return { ...state, isPlaying: false };
    case "START_EDITING":
      return { ...state, isEditing: true };
    case "STOP_EDITING":
      return { ...state, isEditing: true };
    case "TOGGLE_MUTE":
      return { ...state, mute: !state.mute };

    default:
      return state;
  }
};
