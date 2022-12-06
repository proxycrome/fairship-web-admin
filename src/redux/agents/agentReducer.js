import {
  GET_ALL_AGENT,
  GET_SINGLE_AGENT,
  DELETE_SINGLE_AGENT,
  GET_ALL_AGENT_SUCCESS,
  GET_ALL_AGENT_ERROR,
  GET_SINGLE_AGENT_SUCCESS,
  GET_SINGLE_AGENT_ERROR,
  DELETE_SINGLE_AGENT_SUCCESS,
  DELETE_SINGLE_AGENT_ERROR,
} from "./agentType";

const initialState = {
  allAgent: null,
  allAgentError: null,
  loading: false,
  agent: null,
  agentError: null,
  agentDelete: null,
  agentDeleteError: null,
};
const agentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_AGENT:
    case GET_SINGLE_AGENT:
    case DELETE_SINGLE_AGENT:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_ALL_AGENT_SUCCESS:
      return {
        ...state,
        loading: false,
        allAgent: action.payload,
        allAgentError: null,
      };

    case GET_ALL_AGENT_ERROR:
      return {
        ...state,
        loading: false,
        allAgent: null,
        allAgentError: action.payload,
      };

    case GET_SINGLE_AGENT_SUCCESS:
      return {
        ...state,
        loading: false,
        agent: action.payload,
        agentError: null,
      };

    case GET_SINGLE_AGENT_ERROR:
      return {
        ...state,
        loading: false,
        agent: null,
        agentError: action.payload,
      };

    case DELETE_SINGLE_AGENT_SUCCESS:
      return {
        ...state,
        loading: false,
        agentDelete: action.payload,
        agentDeleteError: null,
      };

    case DELETE_SINGLE_AGENT_ERROR:
      return {
        ...state,
        loading: false,
        agentDelete: null,
        agentDeleteError: action.payload,
      };

    default:
      return state;
  }
};
export default agentReducer;
