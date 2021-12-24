const initialState = {
    cardReducer: [],
    cardDash: [],
    final: false
}

const cardItems = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DASH':
            return {
                ...state,
                cardReducer: action.payload
            }
        case 'ADD_CARD_GALLERY':
            return {
                ...state,
                cardReducer: [...state.cardReducer, action.payload],
            }
        case 'ADD_DASH_FROM_GALLERY':
            const item = state.cardDash.find(
                card => card.image === action.payload.image,
            );
            if (item) {
                alert('same photo.please choose different');
            } else {
                return {
                    ...state,
                    cardDash: [...state.cardDash, action.payload]
                }
            }
            
        default:
            return state;
    }
};

export default cardItems
