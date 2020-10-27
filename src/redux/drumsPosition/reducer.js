import {} from "./actions";

const initialState = {
  kick: {
    position: [0.1, 0.5, -0.8],
    rotation: [Math.PI / 2, 0, 0],
  },
  snare: {
    position: [-0.4, 0.8, -0.4],
    rotation: [0, 0, 0],
  },
  tom1: {
    position: [-0.1, 1.2, -0.9], // -.3
    rotation: [0.7, 0, (12 * Math.PI) / 6],
  },
  tom2: {
    position: [0.4, 1.2, -0.805],
    rotation: [0.7, 0, Math.PI / 15],
  },
  hihat: {
    position: [-0.5, 1.2, -0.68],
    rotation: [0, 0, 0],
  },
  leftCymbal: {
    position: [-0.4, 1.8, -0.9],
    rotation: [0.7, 0, (12 * Math.PI) / 6],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
