import { Dash } from '../../API/Dash';

export const getCardGallery = () => async (dispatch) => {
    try {
        const data = Dash;
        dispatch({ type: 'FETCH_DASH', payload: data })
    } catch (e) { }
}

export const addCardGallery = (e) => async (dispatch) => {
    try {
        const file = e[0];

        const getBase64 = (file) => {
            console.log('fffff', file)
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
                reader.readAsDataURL(file);
            });
        }
        getBase64(file).then(base64 => {

            const parts = base64.split(';');
            const data = { mime: parts[0], image: parts[1], selected: false }
            dispatch({ type: 'ADD_CARD_GALLERY', payload: data })
        });
    } catch (error) { }
}

export const addDashFromGallery = (e) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD_DASH_FROM_GALLERY', payload: e })
    } catch (e) { }
}

