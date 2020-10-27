const initialState = {
  playStatus: false,
  editingDrumPosition: false,
  isRecording: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // start / stop play status
    case "START_PLAYING":
      return { ...state, playStatus: true };
    case "STOP_PLAYING":
      return { ...state, playStatus: false };
    default:
      return state;
  }
};
