import * as _ from "lodash";
import { call, put, takeLatest } from "redux-saga/effects";
import Api from "./../services/ApiCaller";
import { getAccessToken } from "./utilities";

import {
  GetTaskBundleFailurer,
  GetTaskBundleSuccess,
  GetTaskBundleTrigger,
  CreateBundleFail,
  CreateBundleSuccess,
  CreateBundleTrigger,
  GetInvitesFail,
  GetInvitesSuccess,
  GetInvitesTrigger,
  SendInviteTrigger,
  SendInviteSuccess,
  SendInviteFail,
  ResendMailSuccess,
  ResendMailTrigger,
  ResendMailFail,
  ValidateInviteTokenTrigger,
  ValidateInviteTokenSuccess,
  ValidateInviteTokenFail,
  DeleteInviteFail,
  DeleteInviteSuccess,
  DeleteInviteTrigger

 
} from "./bundleredux";

export function* getAllTasksBundle(api, { payload }) {
  yield put(GetTaskBundleTrigger(true));
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getTasksBundleList, {
      ...payload,
      token,
    });
    yield put(GetTaskBundleSuccess(response));
  } catch (error) {
    yield put(GetTaskBundleFailurer(error.message));
  }finally{
  yield put(GetTaskBundleTrigger(false));
  }
}

export function* createTaskBundle(api, { payload = {} }) {
  yield put(CreateBundleTrigger(true));
  const { description, bundleName, taskIdList, navigation ,callback} = payload;

  try {
    const token = yield getAccessToken();
    const result = yield call(
      Api.callServer,
      api.createTaskBundles,
      {
        description,
        bundleName,
        taskIdList,
        token,
      },
      true
    );
    yield put(CreateBundleSuccess(result));
    navigation.push("/taskbundles");
    callback({error:false})

  } catch (e) {
    console.log(e);
    yield put(CreateBundleFail(e));
    callback({error:true})

  } finally {
    yield put(CreateBundleTrigger(false));
  }
}

export function* sendInvite(api, { payload = {} }) {
  yield put(SendInviteTrigger(true));
  const { email, callback } = payload;

  try {
    const token = yield getAccessToken();
    const result = yield call(
      Api.callServer,
      api.createInvite,
      {
        email,
        token,
      },
      true
    );
    yield put(SendInviteSuccess(result));
    const response = yield call(Api.callServer, api.getInvites, {
      token,
    });
    yield put(GetInvitesSuccess(response));
    // navigation.push('/invites')
    callback({ error: false });
  } catch (e) {
    console.log(e);
    callback({ error: true });

    yield put(SendInviteFail(e));
  } finally {
    yield put(SendInviteTrigger(false));
  }
}

export function* getAllInvites(api, { payload }) {
  yield put(SendInviteTrigger(true));

  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getInvites, {
      ...payload,
      token,
    });
    yield put(GetInvitesSuccess(response));
  } catch (error) {
    yield put(GetInvitesFail(error.message));
  } finally {
    yield put(SendInviteTrigger(false));
  }
}

export function* resendMailInvite(api, { payload }) {
  yield put(ResendMailTrigger(true));
  const token = yield getAccessToken();
  let { navigation } = payload || {};
  const { id } = payload;
  try {
    const response = yield call(Api.callServer, api.resendInviteMail, {
      id,
      token,
    });
    yield put(ResendMailSuccess());
    alert("Invitation email sent successfully")
  } catch (error) {
    yield put(ResendMailFail(error.message));
  }finally{
    yield put(ResendMailTrigger(false));

  }
}

export function* validateInviteToken(api, { payload }) {
  let {callbacK} = payload||{}
  try {
    const response = yield call(Api.callServer, api.validateInviteToken, {
      ...payload,
    });
    yield put(ValidateInviteTokenSuccess(response));
    callbacK({ error: false });
  } catch (error) {
    callbacK({ error: true, message: error.message });
    yield put(ValidateInviteTokenFail(error.message));
  }
}



  export function* deleteInvite(api, { payload }) {
    yield put(DeleteInviteTrigger());
    const token = yield getAccessToken();
    const { id } = payload;
    try {
      const response = yield call(Api.callServer, api.deleteInvite, {
        id,
        token,
      });
    } catch (error) {
      yield put(DeleteInviteFail(error.message));
    }
  }
