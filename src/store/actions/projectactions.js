export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('users').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS', project });
        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
        });
    }
};