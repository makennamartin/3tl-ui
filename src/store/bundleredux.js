import { createSlice } from "@reduxjs/toolkit";
import * as _ from "lodash";

const bundleslice = createSlice({
  name: "bundle",
  initialState: {
    tasksbundle:[],
    tasksBundleLoading:false,
    tasksBundleError:undefined,
    sendInviteError:undefined,
    sendInviteLoading:false,
    sendinviteInfo:null,
    invites:[],
    getInvitesLoading:false,
    getInviteError:undefined,


  },
  reducers: {
    GetTaskBundleSuccess: (state, action) => {
      return {
        ...state,
        tasksbundle: action.payload,
      };
    },

    GetTaskBundleFailurer: (state, action) => {
      return {
        ...state,
        tasksBundleError: action.payload,
      };
    },
    GetTaskBundleTrigger: (state, action) => {
      return {
        ...state,
        tasksBundleLoading: action.payload,
      };
    },
  
    CreateBundleTrigger: (state, action) => {
        return {
          ...state,
          tasksBundleLoading: action.payload,
        };
      },
      CreateBundleFail: (state, action) => {
        return {
          ...state,
          tasksBundleError: action.payload,
        };
      },
      CreateBundleSuccess: (state, action) => {
        return {  ...state,
            tasksBundleLoading: false,
            tasksBundleError:'' };
      },



      SendInviteTrigger: (state, action) => {
        return {
          ...state,
          sendInviteLoading: action.payload,
        };
      },
      SendInviteFail: (state, action) => {
        return {
          ...state,
          sendInviteError: action.payload,
        };
      },
      SendInviteSuccess: (state, action) => {
        return {  ...state,
          sendInviteLoading: false,
          sendInviteError:'' };
      },

      GetInvitesTrigger: (state, action) => {
        return {
          ...state,
          getInvitesLoading: action.payload,
        };
      },
      GetInvitesFail: (state, action) => {
        return {
          ...state,
          getInviteError: action.payload,
        };
      },
      GetInvitesSuccess: (state, action) => {
        return {
          ...state,
          invites: action.payload,
        };
      },


      ResendMailTrigger: (state, action) => {
        return {
          ...state,
          resendMailLoading: action.payload,
        };
      },
      ResendMailFail: (state, action) => {
        return {
          ...state,
          resendMailError: action.payload,
        };
      },
      ResendMailSuccess: (state, action) => {
        return {  ...state,
          resendMailLoading: false,
          resendMailError:'' };
      },



      ValidateInviteTokenTrigger: (state, action) => {
        return {
          ...state,
          resendMailLoading: action.payload,
        };
      },
      ValidateInviteTokenFail: (state, action) => {
        return {
          ...state,
          resendMailError: action.payload,
        };
      },
      ValidateInviteTokenSuccess: (state, action) => {
        return {  ...state,
          resendMailLoading: false,
          resendMailError:'' };
      },

      DeleteInviteTrigger: (state, action) => {
        return {
          ...state,
          resendMailLoading: action.payload,
        };
      },
      DeleteInviteFail: (state, action) => {
        return {
          ...state,
          resendMailError: action.payload,
        };
      },
      DeleteInviteSuccess: (state, action) => {
        return {  ...state,
          resendMailLoading: false,
          resendMailError:'' };
      },



  },
});

export default bundleslice.reducer;
export const {
  
 
  GetTaskBundleFailurer,
  GetTaskBundleSuccess,
  GetTaskBundleTrigger,
  CreateBundleFail,
  CreateBundleSuccess,
  CreateBundleTrigger,
  SendInviteTrigger,
  SendInviteSuccess,
  SendInviteFail,
  GetInvitesFail,
  GetInvitesSuccess,
  GetInvitesTrigger,
  ResendMailSuccess,
  ResendMailTrigger,
  ResendMailFail,
  ValidateInviteTokenTrigger,
  ValidateInviteTokenSuccess,
  ValidateInviteTokenFail,
  DeleteInviteFail,
  DeleteInviteSuccess,
  DeleteInviteTrigger

 } = bundleslice.actions;
