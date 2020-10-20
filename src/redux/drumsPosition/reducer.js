import {} from "./actions";

const initialState = {
  editing: false,
  drums: {
    kick: {
      position: [0.2, 0, -0.6],
      rotation: [Math.PI / 2, 0, 0],
    },
    snare: {
      position: [-0.3, 0.3, -0.2],
      rotation: [0, 0, 0],
    },
    tom1: {
      position: [0, 0.7, -0.7],
      rotation: [0.7, 0, (12 * Math.PI) / 6],
    },
    tom2: {
      position: [0.5, 0.7, -0.65],
      rotation: [0.7, 0, Math.PI / 15],
    },
    hihat: {
      position: [-0.6, 0.7, -0.48],
      rotation: [0, 0, 0],
    },
    leftCymbal: {
      position: [-0.5, 1.3, -0.7],
      rotation: [0.7, 0, (12 * Math.PI) / 6],
    },
  },
};

export default (state = initialState, action) => {
  switch (action) {
    default:
      return state;
  }
};