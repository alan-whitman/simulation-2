const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: '0',
    rent: '0',
    recommendedRent: 0
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';
const CANCEL_ADD_NEW = 'CANCEL_ADD_NEW';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {...state, name: action.payload};
        case UPDATE_ADDRESS:
            return {...state, address: action.payload};
        case UPDATE_CITY:
            return {...state, city: action.payload};
        case UPDATE_STATE:
            return {...state, state: action.payload};
        case UPDATE_ZIP:
            return {...state, zip: action.payload};
        case UPDATE_IMG:
            return {...state, img: action.payload};
        case UPDATE_MORTGAGE:
            return {...state, mortgage: action.payload, recommendedRent: Number(action.payload) * 1.25};
        case UPDATE_RENT:
            return {...state, rent: action.payload};
        case CANCEL_ADD_NEW:
            return initialState;
        default:
            return state;
    }
}

const updateName = (name) => {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

const updateAddress = (address) => {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

const updateCity = (city) => {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

const updateState = (state) => {
    return {
        type: UPDATE_STATE,
        payload: state,
    }
}

const updateZip = (zip) => {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

const updateImg = (img) => {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}

const updateMortgage = (mortgage) => {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

const updateRent = (rent) => {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

const cancelAddNew = () => {
    return {
        type: CANCEL_ADD_NEW
    }
}

export {updateName, updateAddress, updateCity, updateState, updateZip, updateImg, updateMortgage, updateRent, cancelAddNew};

export default reducer;

