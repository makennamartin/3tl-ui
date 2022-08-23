import { createSlice } from "@reduxjs/toolkit";
import * as _ from "lodash";

const taskScriptslice = createSlice({
  name: "taskScript",
  initialState: {
    tasksScript:[],
    tasksScriptLoading:false,
    tasksScriptError:undefined,
    taskScriptinfo:null,
    deployment:[],
    deploymentInfo:null,
    deploymentError:undefined,
    deploymentLoading:false
  },
  reducers: {
    GetTasksScriptSuccess: (state, action) => {
      return {
        ...state,
        tasksScript: action.payload,
      };
    },

    GetTasksScriptFailurer: (state, action) => {
      return {
        ...state,
        tasksScriptError: action.payload,
      };
    },
    GetTasksScriptTrigger: (state, action) => {
      return {
        ...state,
        tasksScriptLoading: action.payload,
      };
    },
  
    CreateTasksScriptTrigger: (state, action) => {
        return {
          ...state,
          tasksScriptLoading: action.payload,
        };
      },
      CreateTasksScriptFail: (state, action) => {
        return {
          ...state,
          tasksScriptError: action.payload,
        };
      },
      CreateTasksScriptSuccess: (state, action) => {
        return {  ...state,
            tasksScriptLoading: false,
            tasksScriptError:'' };
      },


      GetTasksScriptByIdSuccess: (state, action) => {
        return {
          ...state,
          tasksScript: action.payload,
        };
      },


      UpdateTaskScriptTrigger: (state, action) => {
        return {
          ...state,
          tasksScriptLoading: action.payload,
        };
      },
      UpdateTaskScriptSuccess: (state, action) => {
        return {
          ...state,
          taskScriptinfo: action.payload,
        };
      },
      UpdateTaskScriptFail: (state, action) => {
        return {
          ...state,
          tasksScriptError: action.payload,
        };
      },
  






      GetDeploymentSuccess: (state, action) => {
        return {
          ...state,
          deployment: action.payload,
        };
      },
  
      GetDeploymentFailurer: (state, action) => {
        return {
          ...state,
          deploymentError: action.payload,
        };
      },
      GetDeploymentTrigger: (state, action) => {
        return {
          ...state,
          deploymentLoading: action.payload,
        };
      },
    
      CreateDeploymentTrigger: (state, action) => {
          return {
            ...state,
            deploymentLoading: action.payload,
          };
        },
        CreateDeploymentFail: (state, action) => {
          return {
            ...state,
            deploymentError: action.payload,
          };
        },
        CreateDeploymentSuccess: (state, action) => {
          return {  ...state,
            deploymentLoading: false,
            depolymentError:'' };
        },
  
  
        GetDeploymentIdSuccess: (state, action) => {
          return {
            ...state,
            deploymentInfo: action.payload,
          };
        },
  
  
        UpdateDeploymentTrigger: (state, action) => {
          return {
            ...state,
            deploymentLoading: action.payload,
          };
        },
        UpdateDeploymentSuccess: (state, action) => {
          return {
            ...state,
            deploymentInfo: action.payload,
          };
        },
        UpdateDeploymentFail: (state, action) => {
          return {
            ...state,
            deploymentError: action.payload,
          };
        },
  

  },
});

export default taskScriptslice.reducer;
export const {
  
 GetTasksScriptFailurer,
 GetTasksScriptSuccess,
 GetTasksScriptTrigger,
 CreateTasksScriptFail,
 CreateTasksScriptSuccess,
 CreateTasksScriptTrigger,
 GetTasksScriptByIdSuccess,
 UpdateTaskScriptTrigger,
 UpdateTaskScriptSuccess,
 UpdateTaskScriptFail,
 GetDeploymentFailurer,
 GetDeploymentSuccess,
 GetDeploymentTrigger,
 GetDeploymentIdSuccess,
 CreateDeploymentFail,
 CreateDeploymentSuccess,
 CreateDeploymentTrigger,
 UpdateDeploymentFail,
 UpdateDeploymentSuccess,
 UpdateDeploymentTrigger


 
  

 } = taskScriptslice.actions;