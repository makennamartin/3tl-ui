import { createSlice } from "@reduxjs/toolkit";
import * as _ from "lodash";

const pipelineslice = createSlice({
  name: "pipeline",
  initialState: {
    memoryUsage:[],
    allPipelines:[],
    newPipeline:[]
  },
  reducers: {
    GetmemoryusageSuccess: (state, action) => {
      return {
        ...state,
        memoryUsage: action.payload,
      };
    },

    GetmemoryusageFailurer: (state, action) => {
      return {
        ...state,
        memoryUsageError: action.payload,
      };
    },
    GetmemoryusageTrigger: (state, action) => {
      return {
        ...state,
        memoryLoading: action.payload,
      };
    },

    getPipelinesSuccess: (state, action) => {
      return {
        ...state,
        allPipelines: action.payload,
      };
    },

    getPipelinesFailurer: (state, action) => {
      return {
        ...state,
       allPipelinesError: action.payload,
      };
    },
    getPipelinesTrigger: (state, action) => {
      return {
        ...state,
        allPipelinesLoading: action.payload,
      };
    },

    // newPipelineSuccess: (state, action) => {
    //   return {
    //     ...state,
    //     newPipelineLoading: false,
    //     newPipelineError:''
    //   };
    // },

    // newPipelineFailurer: (state, action) => {
    //   return {
    //     ...state,
    //     newPipelineError: action.payload,
    //   };
    // },

    // newPipelineTrigger: (state, action) => {
    //   return {
    //     ...state,
    //    newPipelineLoading: action.payload,
    //   };
    // }


  }
});

export default pipelineslice.reducer;
export const {
 GetmemoryusageFailurer,
 GetmemoryusageSuccess,
 GetmemoryusageTrigger,
 getPipelinesFailurer,
 getPipelinesSuccess,
 getPipelinesTrigger,
//  newPipelineSuccess,
//  newPipelineFailurer,
//  newPipelineTrigger
 

 } = pipelineslice.actions;