import axios from "axios";

// export const TESTING = "TESTING";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";
export const POST_DATA = "POST_DATA";

export const getData = () => {
  //   return dispatch => {
  //     dispatch({ type: "TESTING" });
  //   };
  return dispatch => {
    dispatch({ type: FETCHING_DATA_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({
          type: FETCHING_DATA_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCHING_DATA_FAILURE,
          payload: err.response
        });
      });
  };
};

export const postData = () => {
  return dispatch => {
    axios
      .post("http://localhost:3333/smurfs")
      .then(res => {
        dispatch(createPostSuccess(res.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createPostSuccess = data => {
  return {
    type: POST_DATA,
    payload: {
      id: data.id,
      name: data.name,
      height: data.height
    }
  };
};
