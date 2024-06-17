import actionTypes from './actionTypes';
import { getAllcodeService } from "../../services/userService";
// export const fetchGenderStart = () => ({
//     type: actionTypes.FECTH_GENDER_START
// })


export const fetchGenderStart = () => {

    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FECTH_GENDER_START
            })
            let res = await getAllcodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFail());
            }
        } catch (e) {
            dispatch(fetchGenderFail());
            console.log("fetchGenderStart", e)
        }
    }

}


export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FECTH_GENDER_SUCCESS,
    data: genderData
})


export const fetchGenderFail = () => ({
    type: actionTypes.FECTH_GENDER_FAIDED
})

// start doing end
