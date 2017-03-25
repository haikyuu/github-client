import React from 'react'
import renderer from 'react-test-renderer'
import { CommitItem } from '@components'
const commit = {
    "sha": "848593c0f0b75da9ff342596908c5091a2cd1430",
    "commit": {
      "author": {
        "name": "Brian Vaughn",
        "email": "bvaughn@fb.com",
        "date": "2017-03-25T07:37:51Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-25T07:46:54Z"
      },
      "message": "Moved takeSnapshot method from UIManager to ReactNative\n\nReviewed By: spicyj\n\nDifferential Revision: D4767428\n\nfbshipit-source-id: 77c80c0135641ab46f9dce2763f27499a96373a0",
      "tree": {
        "sha": "884fa5a813f385add15fb240726e0eb7b1e7237a",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/884fa5a813f385add15fb240726e0eb7b1e7237a"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/848593c0f0b75da9ff342596908c5091a2cd1430",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/848593c0f0b75da9ff342596908c5091a2cd1430",
    "html_url": "https://github.com/facebook/react-native/commit/848593c0f0b75da9ff342596908c5091a2cd1430",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/848593c0f0b75da9ff342596908c5091a2cd1430/comments",
    "author": {
      "login": "bvaughn",
      "id": 29597,
      "avatar_url": "https://avatars3.githubusercontent.com/u/29597?v=3",
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",

    },
    "parents": [
      {
        "sha": "30778b62eade6dc9add5880220af6242be2b7af8",
        "url": "https://api.github.com/repos/facebook/react-native/commits/30778b62eade6dc9add5880220af6242be2b7af8",
        "html_url": "https://github.com/facebook/react-native/commit/30778b62eade6dc9add5880220af6242be2b7af8"
      }
    ]
  }
it('renders the CommitItem from snapshot', () => {
  expect(renderer.create(
    <CommitItem {...commit}/>
  )).toMatchSnapshot()
})