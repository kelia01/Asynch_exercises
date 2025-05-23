const getUser = callback => {
    setTimeout(() => {
        console.log('Fetched user');
        callback({id: 1, name: 'Alice'});
    }, 1000);
}

const getPosts = (userId, callback) => {
   setTimeout(() => {
    console.log('Fetched posts for user', userId);
    callback([{id: 101, title: 'First post'}])
   }, 1000)
}
 const getComments = (postId, callback) => {
    setTimeout(() => {
        console.log('Fetched comments for post', postId);
        callback(['Nice post!', 'Thanks for sharing']);
    },1000)
 }


 getUser((user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0].id, (comments) => {
            console.log('Final result:', comments);
        });
    })
 })