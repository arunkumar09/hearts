import { COMMENTS } from '../../app/shared/COMMENTS';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('add comment action.payload', action.payload);
            console.log('add comment state.commentsArray', state.commentsArray);
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }
    }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    const testComment = state.comments.commentsArray.filter((comment) => comment.campsiteId === parseInt(campsiteId));
    console.log(testComment);
    return testComment;
};
