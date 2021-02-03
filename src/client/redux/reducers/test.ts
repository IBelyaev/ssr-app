const init = {
    data: 0
}

export const dataReducer = (state = init, actions: any) => {
    switch (actions.type) {
        case 'add_data':
            return { ...state, data: actions.payload }
        default:
            return state;
    }
}
