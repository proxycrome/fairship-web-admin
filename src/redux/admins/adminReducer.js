import { GET_ALL_ADMIN , OPEN_ADMIN_DIALOG , CLOSE_ADMIN_DIALOG , ADD_NEW_ADMIN} from "./adminType";

const initialState = {
  allAdmin: {
    agents: [],
    page: 0,
    currentPage: 0,
    total: 0,
  },
  createAdmin: {
    props : {
      open: false
    },
    data: null,
  },
  newAdminObj: '',
  loading: false
};

const adminReducer = (state=initialState, action) =>{
        switch (action.type) {
        case GET_ALL_ADMIN:
            return {
              ...state,
              loading: false,
              allAdmin: action.payload,
            };  
        case OPEN_ADMIN_DIALOG:
          return  {
            ...state,
          createAdmin : {
            props:  {
              open: true
          },
          data: action.payload
        }
       
      };
      case CLOSE_ADMIN_DIALOG:
        return  {
          ...state,
        createAdmin : {
          props:  {
            open: false
        },
        data: null
      }
    }; 
    case  ADD_NEW_ADMIN : 
    return {
         ...state,
         newAdminObj: action.payload,
    };  
        default:
            return state;
        }
    }

 export default adminReducer;
