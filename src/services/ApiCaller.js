import * as _ from "lodash";
import { call } from "redux-saga/effects";
import { store } from "../store";

const isConnected = true;

function* callServer(apiFunction, reqData, showError = false, id = null) {
  if (isConnected) {
    const response = yield call(apiFunction, reqData, reqData.id || id);
    const { status = "" } = response || {};
    let resData = _.get(response, "data", {});
    resData = resData || {};
    if (!_.isEmpty(resData.error_message)) {
      throw resData;
    } else if (status === 200) {
      return resData || {};
    } else if (status === 204) {
      return { resData };
    } else if (status == 201) {
      return resData;
    }else if (status == 401) {
      store.dispatch({ type: "logoutcalled", payload: '' })
      throw  { error: true, statusCode:401,message:resData?.message};
    } else {
      const { error = "", message = "" } = resData || {};
      let errorPayload = {};
      if (typeof error === "object") {
        errorPayload = { ...error };
      } else {
        errorPayload = { error, message };
      }

      if (showError) {
        if (response.problem === "TIMEOUT_ERROR") {
          
        } else if (!_.isEmpty(errorPayload.message)) {
           
        }
      }
      throw errorPayload;
    }
  } else {
    if (showError) {
     }
     throw { error: true, statusCode: 503 };
  }
}

export default {
  callServer,
};
