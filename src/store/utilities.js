import * as _ from 'lodash'
import { select } from 'redux-saga/effects'

export function * getAccessToken() {
  const user = yield select(({ user }) => user)
  return _.get(user, 'userInfo.accessToken', '')
}
 
export function * getUserId () {
  const user = yield select(({ user }) => user)
  return _.get(user, 'userInfo.id', '')
}
 
 
 