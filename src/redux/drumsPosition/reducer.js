import {} from "./actions";

const initialState = {
  editing: false,
  drums: {
    kick: [],
    snare: [],
    tom1: {
      position: [0, 0.7, -0.7],
      rotation: [0.7, 0, (12 * Math.PI) / 6],
    },
    tom2: [0.5, 0.7, -0.65],
    hihat: [],
    cymbal: [],
  },
};

export default (state = initialState, action) => {
  switch (action) {
    default:
      return state;
  }
};
