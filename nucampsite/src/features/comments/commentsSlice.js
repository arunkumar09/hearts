import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = (campsiteId) => {
    const testComment = COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
    console.log(testComment);
    return testComment;
};
