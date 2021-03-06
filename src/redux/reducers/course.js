const initialState = {
  courseList: [],
  courseDetail: null,
  selectedCourse: null,
};

const reducer = (state = initialState, { type, payload, ...action }) => {
  switch (type) {
    case "FETCH_COURSES":
      state.courseList = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
