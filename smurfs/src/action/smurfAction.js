import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";

export const getData = () => {
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

export const createPost = ({ name, age, height }) => {
  return dispatch => {
    axios
      .post("http://localhost:3333/smurfs", { name, age, height })
      .then(res => {
        console.log("response", res.data);
      })
      .catch(error => {
        throw error;
      });
  };
};

export const deletePost = id => {
  return dispatch => {
    axios
      .get(`http://localhost:3333/smurfs/delete/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
};
