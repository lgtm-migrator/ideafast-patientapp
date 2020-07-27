import * as actiontypes from './actiontypes';

export const mapDispatchToProps = dispatch => ({
  verifyUserID: userID => dispatch(verifyUserID(userID)),
});

const verifyUserID = userID => async dispatch => {
  const response = await fetch('http://192.168.1.64:8000/api/verify', {
    method: 'post',
    body: JSON.stringify({userID}),
  });
  console.log(response);
  const verifyJSON = await response.json();
  console.log(verifyJSON);
  await dispatch(setUserID(userID));
};

const setUserID = userID => ({
  type: actiontypes.SET_USERID,
  userID,
});
