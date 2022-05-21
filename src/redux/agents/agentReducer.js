import { GET_ALL_AGENT, GET_SINGLE_AGENT, DELETE_SINGLE_AGENT } from "./agentType";

const initialState = {
  allAgent: {
    agents: [],
    page: 0,
    currentPage: 0,
    total: 0,
  },
  loading: false,
  agent: "",
  agentDelete: ''
};
const agentReducer = (state=initialState, action) =>{
        switch (action.type) {
        case GET_ALL_AGENT:
            return {
              ...state,
              loading: false,
              allAgent: action.payload,
            };
        case GET_SINGLE_AGENT:
            return {
              ...state,
              loading: false,
              agent: action.payload,
            };
        case DELETE_SINGLE_AGENT: 
            return {
              ...state,
              loading: false,
              agentDelete: action.payload 
        }    
        default:
            return state;
        }
    }
 export default agentReducer;
