const initialState = {
    members: [],
    membersall: [],
    loading: false,
    error: null
};

const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_MEMBER_REQUEST':
        case 'FETCH_MEMBERS_REQUEST':
        case 'FETCH_MEMBERSALL_REQUEST':
        case 'UPDATE_MEMBER_REQUEST':
        case 'DELETE_MEMBER_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'CREATE_MEMBER_SUCCESS':
            return {
                ...state,
                members: [...state.members, action.payload],
                loading: false,
                error: null
            };
        case 'FETCH_MEMBERS_SUCCESS':
            return {
                ...state,
                members: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_MEMBERSALL_SUCCESS':
            return {
                ...state,
                membersall: action.payload,
                loading: false,
                error: null
            };
        case 'UPDATE_MEMBER_SUCCESS':
            const updatedmembers = state.members.map(member => {
                if (member.id === action.payload.memberId) {
                    return action.payload.updatedmember;
                }
                return member;
            });
            return {
                ...state,
                members: updatedmembers,
                loading: false,
                error: null
            };
        case 'DELETE_MEMBER_SUCCESS':
            const filteredmembers = state.members.filter(member => member.id !== action.payload);
            return {
                ...state,
                members: filteredmembers,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};

export default memberReducer;