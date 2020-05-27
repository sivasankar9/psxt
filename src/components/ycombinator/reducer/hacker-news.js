import actions from '../actions-list';

const initialState = {
    hits: []
};

export default (state = initialState, action) => {

    switch (action.type) {

    case actions.UPDATE_NEWS: return {...state, ...action.payload};

    case actions.UPDATE_UPVOTE: {

        const hits = state.hits.map(item => {

            return (item.objectID === action.payload.objectID) ?
                {...item, points: item.points + 1} :
                item;

        });

        return {...state, hits};

    };

    case actions.HIDE_NEWS: {

        const hits = state.hits.map(item => {

            return (item.objectID === action.payload.objectID) ?
                {...item, isVisible: false} :
                item;

        });

        return {...state, hits};

    };

    default:return state;

    }

};

