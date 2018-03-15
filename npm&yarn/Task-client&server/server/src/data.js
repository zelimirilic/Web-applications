const {Post} = require("./post.js"); /// import post class iz post
const loremIpsum = require("lorem-ipsum");

const getTitle = () => loremIpsum({
  count: 3,
  units: 'words'
});


const getIntro = () => loremIpsum({
  count: 2,
  units: 'sentences'
});

const createPosts = (count) => {
  const postLists = [];

  for (let i = 1; i < count; i++) {
    const post = new Post(i, getTitle(), getIntro())
    postLists.push(post);
  }

  return postLists;
}

module.exports = {
  createPosts
}