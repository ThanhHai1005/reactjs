import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    position: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FECTH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            console.log('fire Gwen gender start', action)
            return {
                ...copyState
            }

        case actionTypes.FECTH_GENDER_SUCCESS:

            state.genders = action.data;
            state.isLoadingGender = false;
            // console.log('fire Gwen gender success', copyState);
            return {
                ...state
            }

        case actionTypes.FECTH_GENDER_FAIDED:
            console.log('fire Gwen gender fail', action)
            state.isLoadingGender = false;
            state.genders = [];


            return {
                ...state
            }
        default:
            return state;
    }
}





export default adminReducer;