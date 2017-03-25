import React from 'react'
import renderer from 'react-test-renderer'
import { CommitsScreen } from '@screens'
const commits = [
  {
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
      "gravatar_id": "",
      "url": "https://api.github.com/users/bvaughn",
      "html_url": "htstps://github.com/bvaughn",
      "followers_url": "https://api.github.com/users/bvaughn/followers",
      "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
      "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
      "organizations_url": "https://api.github.com/users/bvaughn/orgs",
      "repos_url": "https://api.github.com/users/bvaughn/repos",
      "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
      "received_events_url": "https://api.github.com/users/bvaughn/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "30778b62eade6dc9add5880220af6242be2b7af8",
        "url": "https://api.github.com/repos/facebook/react-native/commits/30778b62eade6dc9add5880220af6242be2b7af8",
        "html_url": "https://github.com/facebook/react-native/commit/30778b62eade6dc9add5880220af6242be2b7af8"
      }
    ]
  },
  {
    "sha": "30778b62eade6dc9add5880220af6242be2b7af8",
    "commit": {
      "author": {
        "name": "Héctor Ramos",
        "email": "hramos@users.noreply.github.com",
        "date": "2017-03-25T01:30:36Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-25T01:45:58Z"
      },
      "message": "Update RunningOnDevice.md\n\nSummary:\nTaking another pass at this doc after running apps on iOS and Android devices this week. Of note, the Connecting to Dev server section on iOS seemed incomplete.\n\nTested steps on iOS and Android.\n\nTested rendering of the site on all permutations.\nCloses https://github.com/facebook/react-native/pull/13143\n\nDifferential Revision: D4775026\n\nPulled By: hramos\n\nfbshipit-source-id: 9b64120922a093ac646d12861d8dee98fb4e5d7d",
      "tree": {
        "sha": "c59f8ab8241e5f28dda127053bc42af14f2bc061",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/c59f8ab8241e5f28dda127053bc42af14f2bc061"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/30778b62eade6dc9add5880220af6242be2b7af8",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/30778b62eade6dc9add5880220af6242be2b7af8",
    "html_url": "https://github.com/facebook/react-native/commit/30778b62eade6dc9add5880220af6242be2b7af8",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/30778b62eade6dc9add5880220af6242be2b7af8/comments",
    "author": {
      "login": "hramos",
      "id": 165856,
      "avatar_url": "https://avatars0.githubusercontent.com/u/165856?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/hramos",
      "html_url": "https://github.com/hramos",
      "followers_url": "https://api.github.com/users/hramos/followers",
      "following_url": "https://api.github.com/users/hramos/following{/other_user}",
      "gists_url": "https://api.github.com/users/hramos/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/hramos/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/hramos/subscriptions",
      "organizations_url": "https://api.github.com/users/hramos/orgs",
      "repos_url": "https://api.github.com/users/hramos/repos",
      "events_url": "https://api.github.com/users/hramos/events{/privacy}",
      "received_events_url": "https://api.github.com/users/hramos/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "94d93f7d41365cbcdddf36b1a9c0bcd8ec2fd325",
        "url": "https://api.github.com/repos/facebook/react-native/commits/94d93f7d41365cbcdddf36b1a9c0bcd8ec2fd325",
        "html_url": "https://github.com/facebook/react-native/commit/94d93f7d41365cbcdddf36b1a9c0bcd8ec2fd325"
      }
    ]
  },
  {
    "sha": "94d93f7d41365cbcdddf36b1a9c0bcd8ec2fd325",
    "commit": {
      "author": {
        "name": "dabit1",
        "email": "david.escalera.ponce@gmail.com",
        "date": "2017-03-25T01:28:34Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-25T01:30:59Z"
      },
      "message": "PositionError must be an object, not string\n\nSummary:\nAs specifications says, the Position error must be an object with code and message attributes. Right now it is a string. If not, we can't know what kind of error is. Another issue is that the message must be exactly \"No available location provider.\"\n\nSpecifications:\nhttps://developer.mozilla.org/en/docs/Web/API/PositionError\nCloses https://github.com/facebook/react-native/pull/13140\n\nDifferential Revision: D4774922\n\nPulled By: ericvicenti\n\nfbshipit-source-id: f956af051461e9f8d6435496283e54b3c4dc8ef5",
      "tree": {
        "sha": "51dd87bd79437710c90eead216c0a551f295e0f0",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/51dd87bd79437710c90eead216c0a551f295e0f0"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/94d93f7d41365cbcdddf36b1a9c0bcd8ec2fd325",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/94d93f7d41365cbcdddf36b1a9c0bcd8ec2fd325",
    "html_url": "https://github.com/facebook/react-native/commit/94d93f7d41365cbcdddf36b1a9c0bcd8ec2fd325",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/94d93f7d41365cbcdddf36b1a9c0bcd8ec2fd325/comments",
    "author": {
      "login": "dabit1",
      "id": 23297390,
      "avatar_url": "https://avatars3.githubusercontent.com/u/23297390?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/dabit1",
      "html_url": "https://github.com/dabit1",
      "followers_url": "https://api.github.com/users/dabit1/followers",
      "following_url": "https://api.github.com/users/dabit1/following{/other_user}",
      "gists_url": "https://api.github.com/users/dabit1/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/dabit1/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/dabit1/subscriptions",
      "organizations_url": "https://api.github.com/users/dabit1/orgs",
      "repos_url": "https://api.github.com/users/dabit1/repos",
      "events_url": "https://api.github.com/users/dabit1/events{/privacy}",
      "received_events_url": "https://api.github.com/users/dabit1/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "27c3e32abf48c50f369b98fac9c7b73ab0d9aade",
        "url": "https://api.github.com/repos/facebook/react-native/commits/27c3e32abf48c50f369b98fac9c7b73ab0d9aade",
        "html_url": "https://github.com/facebook/react-native/commit/27c3e32abf48c50f369b98fac9c7b73ab0d9aade"
      }
    ]
  },
  {
    "sha": "27c3e32abf48c50f369b98fac9c7b73ab0d9aade",
    "commit": {
      "author": {
        "name": "Spencer Ahrens",
        "email": "sahrens@fb.com",
        "date": "2017-03-25T01:15:42Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-25T01:30:59Z"
      },
      "message": "FrameRateLogger JS module\n\nSummary:\nThis adds a flowified JS module for the FrameRateLogger native module and plugs\nit into `ScrollResponder` and `AppRegistry`.\n\nIf there is no `FrameRateLogger` native module, then the function calls will be no-ops.\n\nOne major limitation is that we can't track animated/programatic scrolls because we don't\nhave reliable end events. Would be generally useful to add those in a followup though.\n\nReviewed By: fkgozali\n\nDifferential Revision: D4765694\n\nfbshipit-source-id: f3bec771df6ac918200c1afd1a7d8b6da540a4e2",
      "tree": {
        "sha": "e399151912a6fe389e06a091c005b73446806d8d",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/e399151912a6fe389e06a091c005b73446806d8d"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/27c3e32abf48c50f369b98fac9c7b73ab0d9aade",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/27c3e32abf48c50f369b98fac9c7b73ab0d9aade",
    "html_url": "https://github.com/facebook/react-native/commit/27c3e32abf48c50f369b98fac9c7b73ab0d9aade",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/27c3e32abf48c50f369b98fac9c7b73ab0d9aade/comments",
    "author": {
      "login": "sahrens",
      "id": 1509831,
      "avatar_url": "https://avatars2.githubusercontent.com/u/1509831?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sahrens",
      "html_url": "https://github.com/sahrens",
      "followers_url": "https://api.github.com/users/sahrens/followers",
      "following_url": "https://api.github.com/users/sahrens/following{/other_user}",
      "gists_url": "https://api.github.com/users/sahrens/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sahrens/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sahrens/subscriptions",
      "organizations_url": "https://api.github.com/users/sahrens/orgs",
      "repos_url": "https://api.github.com/users/sahrens/repos",
      "events_url": "https://api.github.com/users/sahrens/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sahrens/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "c87c4d052f9a450c37ef94875fed170d0a58dc50",
        "url": "https://api.github.com/repos/facebook/react-native/commits/c87c4d052f9a450c37ef94875fed170d0a58dc50",
        "html_url": "https://github.com/facebook/react-native/commit/c87c4d052f9a450c37ef94875fed170d0a58dc50"
      }
    ]
  },
  {
    "sha": "c87c4d052f9a450c37ef94875fed170d0a58dc50",
    "commit": {
      "author": {
        "name": "Sokovikov",
        "email": "skv-headless@yandex.ru",
        "date": "2017-03-25T01:07:12Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-25T01:15:42Z"
      },
      "message": "Fixed previously broken support for negative `scale` (`transform` style property)\n\nSummary:\ncloses #13081\n\nUIExplorer, TransformExample\nCloses https://github.com/facebook/react-native/pull/13083\n\nReviewed By: mmmulani\n\nDifferential Revision: D4758237\n\nPulled By: shergin\n\nfbshipit-source-id: 58385a4cde7a739b6657c293c381644a92918265",
      "tree": {
        "sha": "93640d650b984cd8e3d392e959d763905a22d23a",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/93640d650b984cd8e3d392e959d763905a22d23a"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/c87c4d052f9a450c37ef94875fed170d0a58dc50",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/c87c4d052f9a450c37ef94875fed170d0a58dc50",
    "html_url": "https://github.com/facebook/react-native/commit/c87c4d052f9a450c37ef94875fed170d0a58dc50",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/c87c4d052f9a450c37ef94875fed170d0a58dc50/comments",
    "author": {
      "login": "skv-headless",
      "id": 1488195,
      "avatar_url": "https://avatars3.githubusercontent.com/u/1488195?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/skv-headless",
      "html_url": "https://github.com/skv-headless",
      "followers_url": "https://api.github.com/users/skv-headless/followers",
      "following_url": "https://api.github.com/users/skv-headless/following{/other_user}",
      "gists_url": "https://api.github.com/users/skv-headless/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/skv-headless/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/skv-headless/subscriptions",
      "organizations_url": "https://api.github.com/users/skv-headless/orgs",
      "repos_url": "https://api.github.com/users/skv-headless/repos",
      "events_url": "https://api.github.com/users/skv-headless/events{/privacy}",
      "received_events_url": "https://api.github.com/users/skv-headless/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "09fe99972d35eded7e739c9f7af1691395a8eb35",
        "url": "https://api.github.com/repos/facebook/react-native/commits/09fe99972d35eded7e739c9f7af1691395a8eb35",
        "html_url": "https://github.com/facebook/react-native/commit/09fe99972d35eded7e739c9f7af1691395a8eb35"
      }
    ]
  },
  {
    "sha": "09fe99972d35eded7e739c9f7af1691395a8eb35",
    "commit": {
      "author": {
        "name": "Eric Vicenti",
        "email": "evv@fb.com",
        "date": "2017-03-24T21:36:07Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T21:47:28Z"
      },
      "message": "Fix license headers on SwipableRow\n\nReviewed By: hramos\n\nDifferential Revision: D4770164\n\nfbshipit-source-id: fc1cbbdd2161d4fd307cb14821318466fa6fca57",
      "tree": {
        "sha": "25a38f1b77b98ef3c2b87723e5863da7e6edc01a",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/25a38f1b77b98ef3c2b87723e5863da7e6edc01a"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/09fe99972d35eded7e739c9f7af1691395a8eb35",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/09fe99972d35eded7e739c9f7af1691395a8eb35",
    "html_url": "https://github.com/facebook/react-native/commit/09fe99972d35eded7e739c9f7af1691395a8eb35",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/09fe99972d35eded7e739c9f7af1691395a8eb35/comments",
    "author": {
      "login": "ericvicenti",
      "id": 1483597,
      "avatar_url": "https://avatars2.githubusercontent.com/u/1483597?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ericvicenti",
      "html_url": "https://github.com/ericvicenti",
      "followers_url": "https://api.github.com/users/ericvicenti/followers",
      "following_url": "https://api.github.com/users/ericvicenti/following{/other_user}",
      "gists_url": "https://api.github.com/users/ericvicenti/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ericvicenti/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ericvicenti/subscriptions",
      "organizations_url": "https://api.github.com/users/ericvicenti/orgs",
      "repos_url": "https://api.github.com/users/ericvicenti/repos",
      "events_url": "https://api.github.com/users/ericvicenti/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ericvicenti/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "8ff813e6e0d4b91c066811c0fde689987a5b2827",
        "url": "https://api.github.com/repos/facebook/react-native/commits/8ff813e6e0d4b91c066811c0fde689987a5b2827",
        "html_url": "https://github.com/facebook/react-native/commit/8ff813e6e0d4b91c066811c0fde689987a5b2827"
      }
    ]
  },
  {
    "sha": "8ff813e6e0d4b91c066811c0fde689987a5b2827",
    "commit": {
      "author": {
        "name": "Eric Vicenti",
        "email": "evv@fb.com",
        "date": "2017-03-24T21:35:16Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T21:47:25Z"
      },
      "message": "Fix license header on websocket_integration_test_server\n\nReviewed By: hramos\n\nDifferential Revision: D4770121\n\nfbshipit-source-id: c05b45e8775cf3d05c8c9a6e87ab35a3bd032087",
      "tree": {
        "sha": "1e2ebdcb2abd2df887135a1c736be51f28100eab",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/1e2ebdcb2abd2df887135a1c736be51f28100eab"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/8ff813e6e0d4b91c066811c0fde689987a5b2827",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/8ff813e6e0d4b91c066811c0fde689987a5b2827",
    "html_url": "https://github.com/facebook/react-native/commit/8ff813e6e0d4b91c066811c0fde689987a5b2827",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/8ff813e6e0d4b91c066811c0fde689987a5b2827/comments",
    "author": {
      "login": "ericvicenti",
      "id": 1483597,
      "avatar_url": "https://avatars2.githubusercontent.com/u/1483597?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ericvicenti",
      "html_url": "https://github.com/ericvicenti",
      "followers_url": "https://api.github.com/users/ericvicenti/followers",
      "following_url": "https://api.github.com/users/ericvicenti/following{/other_user}",
      "gists_url": "https://api.github.com/users/ericvicenti/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ericvicenti/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ericvicenti/subscriptions",
      "organizations_url": "https://api.github.com/users/ericvicenti/orgs",
      "repos_url": "https://api.github.com/users/ericvicenti/repos",
      "events_url": "https://api.github.com/users/ericvicenti/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ericvicenti/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "ff4468ad1b6e5b642bb45dc98c33335497abd8c0",
        "url": "https://api.github.com/repos/facebook/react-native/commits/ff4468ad1b6e5b642bb45dc98c33335497abd8c0",
        "html_url": "https://github.com/facebook/react-native/commit/ff4468ad1b6e5b642bb45dc98c33335497abd8c0"
      }
    ]
  },
  {
    "sha": "ff4468ad1b6e5b642bb45dc98c33335497abd8c0",
    "commit": {
      "author": {
        "name": "Eric Vicenti",
        "email": "evv@fb.com",
        "date": "2017-03-24T21:18:39Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T21:31:19Z"
      },
      "message": "Re-License Lists with standard React Native License\n\nReviewed By: sahrens\n\nDifferential Revision: D4771084\n\nfbshipit-source-id: 9878a813b7dacb6ec1215fee469b946df0752de9",
      "tree": {
        "sha": "d3e462dcfeec90140128a99294592ec560df5ff2",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/d3e462dcfeec90140128a99294592ec560df5ff2"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/ff4468ad1b6e5b642bb45dc98c33335497abd8c0",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/ff4468ad1b6e5b642bb45dc98c33335497abd8c0",
    "html_url": "https://github.com/facebook/react-native/commit/ff4468ad1b6e5b642bb45dc98c33335497abd8c0",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/ff4468ad1b6e5b642bb45dc98c33335497abd8c0/comments",
    "author": {
      "login": "ericvicenti",
      "id": 1483597,
      "avatar_url": "https://avatars2.githubusercontent.com/u/1483597?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ericvicenti",
      "html_url": "https://github.com/ericvicenti",
      "followers_url": "https://api.github.com/users/ericvicenti/followers",
      "following_url": "https://api.github.com/users/ericvicenti/following{/other_user}",
      "gists_url": "https://api.github.com/users/ericvicenti/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ericvicenti/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ericvicenti/subscriptions",
      "organizations_url": "https://api.github.com/users/ericvicenti/orgs",
      "repos_url": "https://api.github.com/users/ericvicenti/repos",
      "events_url": "https://api.github.com/users/ericvicenti/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ericvicenti/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "77d52fecbe6b7bbb602dd0a4983fd26dd56bc693",
        "url": "https://api.github.com/repos/facebook/react-native/commits/77d52fecbe6b7bbb602dd0a4983fd26dd56bc693",
        "html_url": "https://github.com/facebook/react-native/commit/77d52fecbe6b7bbb602dd0a4983fd26dd56bc693"
      }
    ]
  },
  {
    "sha": "77d52fecbe6b7bbb602dd0a4983fd26dd56bc693",
    "commit": {
      "author": {
        "name": "Eric Vicenti",
        "email": "evv@fb.com",
        "date": "2017-03-24T21:09:17Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T21:17:40Z"
      },
      "message": "Remove old examples from RN repo\n\nSummary:\nReact Native originally shipped with these examples, which have gotten super old and unmaintained.\n\nCruft like this in the core repo only slows us down with extra issues and pull requests. Eventually we may create a different repo for samples that will be maintained into the future.\n\nWe are doing some spring cleaning in the repo, so now is a good time to remove these and let the community share their own examples.\nCloses https://github.com/facebook/react-native/pull/13064\n\nDifferential Revision: D4770699\n\nPulled By: ericvicenti\n\nfbshipit-source-id: bbcdec336b28e5a9330afbdb6b166e94e15fa485",
      "tree": {
        "sha": "a7aeec248f15f44703ba06614f8b888cc0f4b8e1",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/a7aeec248f15f44703ba06614f8b888cc0f4b8e1"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/77d52fecbe6b7bbb602dd0a4983fd26dd56bc693",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/77d52fecbe6b7bbb602dd0a4983fd26dd56bc693",
    "html_url": "https://github.com/facebook/react-native/commit/77d52fecbe6b7bbb602dd0a4983fd26dd56bc693",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/77d52fecbe6b7bbb602dd0a4983fd26dd56bc693/comments",
    "author": {
      "login": "ericvicenti",
      "id": 1483597,
      "avatar_url": "https://avatars2.githubusercontent.com/u/1483597?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ericvicenti",
      "html_url": "https://github.com/ericvicenti",
      "followers_url": "https://api.github.com/users/ericvicenti/followers",
      "following_url": "https://api.github.com/users/ericvicenti/following{/other_user}",
      "gists_url": "https://api.github.com/users/ericvicenti/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ericvicenti/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ericvicenti/subscriptions",
      "organizations_url": "https://api.github.com/users/ericvicenti/orgs",
      "repos_url": "https://api.github.com/users/ericvicenti/repos",
      "events_url": "https://api.github.com/users/ericvicenti/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ericvicenti/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "d2fc08d33b2c89812d1871f8b786d666207ed362",
        "url": "https://api.github.com/repos/facebook/react-native/commits/d2fc08d33b2c89812d1871f8b786d666207ed362",
        "html_url": "https://github.com/facebook/react-native/commit/d2fc08d33b2c89812d1871f8b786d666207ed362"
      }
    ]
  },
  {
    "sha": "d2fc08d33b2c89812d1871f8b786d666207ed362",
    "commit": {
      "author": {
        "name": "Lee Byron",
        "email": "leebyron@fb.com",
        "date": "2017-03-24T18:21:04Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T18:31:01Z"
      },
      "message": "Move classic relay into oss packages\n\nReviewed By: kassens\n\nDifferential Revision: D4769497\n\nfbshipit-source-id: 0144456a82c3969b399a4a0b37814b5627d191c5",
      "tree": {
        "sha": "5274da1d3edfc8f1cf8ff31b08d65acb2599f74c",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/5274da1d3edfc8f1cf8ff31b08d65acb2599f74c"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/d2fc08d33b2c89812d1871f8b786d666207ed362",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/d2fc08d33b2c89812d1871f8b786d666207ed362",
    "html_url": "https://github.com/facebook/react-native/commit/d2fc08d33b2c89812d1871f8b786d666207ed362",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/d2fc08d33b2c89812d1871f8b786d666207ed362/comments",
    "author": {
      "login": "leebyron",
      "id": 50130,
      "avatar_url": "https://avatars0.githubusercontent.com/u/50130?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/leebyron",
      "html_url": "https://github.com/leebyron",
      "followers_url": "https://api.github.com/users/leebyron/followers",
      "following_url": "https://api.github.com/users/leebyron/following{/other_user}",
      "gists_url": "https://api.github.com/users/leebyron/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/leebyron/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/leebyron/subscriptions",
      "organizations_url": "https://api.github.com/users/leebyron/orgs",
      "repos_url": "https://api.github.com/users/leebyron/repos",
      "events_url": "https://api.github.com/users/leebyron/events{/privacy}",
      "received_events_url": "https://api.github.com/users/leebyron/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "820c8e2466aeb852bd9eac1836801248f202d230",
        "url": "https://api.github.com/repos/facebook/react-native/commits/820c8e2466aeb852bd9eac1836801248f202d230",
        "html_url": "https://github.com/facebook/react-native/commit/820c8e2466aeb852bd9eac1836801248f202d230"
      }
    ]
  },
  {
    "sha": "820c8e2466aeb852bd9eac1836801248f202d230",
    "commit": {
      "author": {
        "name": "Andrew Y. Chen",
        "email": "ayc@fb.com",
        "date": "2017-03-24T18:11:04Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T18:16:21Z"
      },
      "message": "Instrumentation test for PokesDashboardApp\n\nReviewed By: AaaChiuuu\n\nDifferential Revision: D4758149\n\nfbshipit-source-id: 17e448d44af4deccc288738d294146a612d5e9c3",
      "tree": {
        "sha": "1914285e87182ed9da2005ad253daddd15e34311",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/1914285e87182ed9da2005ad253daddd15e34311"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/820c8e2466aeb852bd9eac1836801248f202d230",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/820c8e2466aeb852bd9eac1836801248f202d230",
    "html_url": "https://github.com/facebook/react-native/commit/820c8e2466aeb852bd9eac1836801248f202d230",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/820c8e2466aeb852bd9eac1836801248f202d230/comments",
    "author": null,
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "3f46e591ff3e661ada68c15519a0dba13a81ecde",
        "url": "https://api.github.com/repos/facebook/react-native/commits/3f46e591ff3e661ada68c15519a0dba13a81ecde",
        "html_url": "https://github.com/facebook/react-native/commit/3f46e591ff3e661ada68c15519a0dba13a81ecde"
      }
    ]
  },
  {
    "sha": "3f46e591ff3e661ada68c15519a0dba13a81ecde",
    "commit": {
      "author": {
        "name": "Pieter De Baets",
        "email": "pieterdb@fb.com",
        "date": "2017-03-24T16:22:32Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T16:31:04Z"
      },
      "message": "Fix crash when overriding native modules on RCTJSCExecutor\n\nReviewed By: alexeylang\n\nDifferential Revision: D4769955\n\nfbshipit-source-id: 20f4f4c469eafbe2c7a81ad9f5b9a8386195a8ac",
      "tree": {
        "sha": "241cf4100b3db234856156ea74891beb27b3323a",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/241cf4100b3db234856156ea74891beb27b3323a"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/3f46e591ff3e661ada68c15519a0dba13a81ecde",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/3f46e591ff3e661ada68c15519a0dba13a81ecde",
    "html_url": "https://github.com/facebook/react-native/commit/3f46e591ff3e661ada68c15519a0dba13a81ecde",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/3f46e591ff3e661ada68c15519a0dba13a81ecde/comments",
    "author": {
      "login": "javache",
      "id": 5676,
      "avatar_url": "https://avatars0.githubusercontent.com/u/5676?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/javache",
      "html_url": "https://github.com/javache",
      "followers_url": "https://api.github.com/users/javache/followers",
      "following_url": "https://api.github.com/users/javache/following{/other_user}",
      "gists_url": "https://api.github.com/users/javache/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/javache/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/javache/subscriptions",
      "organizations_url": "https://api.github.com/users/javache/orgs",
      "repos_url": "https://api.github.com/users/javache/repos",
      "events_url": "https://api.github.com/users/javache/events{/privacy}",
      "received_events_url": "https://api.github.com/users/javache/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "893689c82b4869b7ccaaa5f2a645a85259c96033",
        "url": "https://api.github.com/repos/facebook/react-native/commits/893689c82b4869b7ccaaa5f2a645a85259c96033",
        "html_url": "https://github.com/facebook/react-native/commit/893689c82b4869b7ccaaa5f2a645a85259c96033"
      }
    ]
  },
  {
    "sha": "893689c82b4869b7ccaaa5f2a645a85259c96033",
    "commit": {
      "author": {
        "name": "Andrew Y. Chen",
        "email": "ayc@fb.com",
        "date": "2017-03-24T15:41:01Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T15:47:02Z"
      },
      "message": "Fix buck build\n\nReviewed By: AaaChiuuu\n\nDifferential Revision: D4768765\n\nfbshipit-source-id: 91e34faa2fe864b9a9835e6dab07c8396477505f",
      "tree": {
        "sha": "11555b131da9b19e1697777a5f18dc4428a6e311",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/11555b131da9b19e1697777a5f18dc4428a6e311"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/893689c82b4869b7ccaaa5f2a645a85259c96033",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/893689c82b4869b7ccaaa5f2a645a85259c96033",
    "html_url": "https://github.com/facebook/react-native/commit/893689c82b4869b7ccaaa5f2a645a85259c96033",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/893689c82b4869b7ccaaa5f2a645a85259c96033/comments",
    "author": null,
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "ff7fb6efda0418752302cfa461ade600e636943b",
        "url": "https://api.github.com/repos/facebook/react-native/commits/ff7fb6efda0418752302cfa461ade600e636943b",
        "html_url": "https://github.com/facebook/react-native/commit/ff7fb6efda0418752302cfa461ade600e636943b"
      }
    ]
  },
  {
    "sha": "ff7fb6efda0418752302cfa461ade600e636943b",
    "commit": {
      "author": {
        "name": "Pieter De Baets",
        "email": "pieterdb@fb.com",
        "date": "2017-03-24T11:48:36Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T12:04:05Z"
      },
      "message": "Allow overrides of NativeModules\n\nReviewed By: mhorowitz\n\nDifferential Revision: D4764126\n\nfbshipit-source-id: 036f848f8b3debbb3cc4a34fc99044304615760e",
      "tree": {
        "sha": "44055035d23264138b70fc85a3584442f26671a5",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/44055035d23264138b70fc85a3584442f26671a5"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/ff7fb6efda0418752302cfa461ade600e636943b",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/ff7fb6efda0418752302cfa461ade600e636943b",
    "html_url": "https://github.com/facebook/react-native/commit/ff7fb6efda0418752302cfa461ade600e636943b",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/ff7fb6efda0418752302cfa461ade600e636943b/comments",
    "author": {
      "login": "javache",
      "id": 5676,
      "avatar_url": "https://avatars0.githubusercontent.com/u/5676?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/javache",
      "html_url": "https://github.com/javache",
      "followers_url": "https://api.github.com/users/javache/followers",
      "following_url": "https://api.github.com/users/javache/following{/other_user}",
      "gists_url": "https://api.github.com/users/javache/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/javache/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/javache/subscriptions",
      "organizations_url": "https://api.github.com/users/javache/orgs",
      "repos_url": "https://api.github.com/users/javache/repos",
      "events_url": "https://api.github.com/users/javache/events{/privacy}",
      "received_events_url": "https://api.github.com/users/javache/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "de8ce452586d082b50096f26bde01c9c420d6165",
        "url": "https://api.github.com/repos/facebook/react-native/commits/de8ce452586d082b50096f26bde01c9c420d6165",
        "html_url": "https://github.com/facebook/react-native/commit/de8ce452586d082b50096f26bde01c9c420d6165"
      }
    ]
  },
  {
    "sha": "de8ce452586d082b50096f26bde01c9c420d6165",
    "commit": {
      "author": {
        "name": "Brian Vaughn",
        "email": "bvaughn@fb.com",
        "date": "2017-03-24T07:22:57Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T07:30:48Z"
      },
      "message": "Ran codemod to replace View.propTypes with ViewPropTypes\n\nReviewed By: yungsters\n\nDifferential Revision: D4764838\n\nfbshipit-source-id: 0b47a0fdd6793dab9333bb73bb93053fccc27dae",
      "tree": {
        "sha": "d19a5a568e05300483b77f0c5f50f2294f59c970",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/d19a5a568e05300483b77f0c5f50f2294f59c970"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/de8ce452586d082b50096f26bde01c9c420d6165",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/de8ce452586d082b50096f26bde01c9c420d6165",
    "html_url": "https://github.com/facebook/react-native/commit/de8ce452586d082b50096f26bde01c9c420d6165",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/de8ce452586d082b50096f26bde01c9c420d6165/comments",
    "author": {
      "login": "bvaughn",
      "id": 29597,
      "avatar_url": "https://avatars3.githubusercontent.com/u/29597?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bvaughn",
      "html_url": "https://github.com/bvaughn",
      "followers_url": "https://api.github.com/users/bvaughn/followers",
      "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
      "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
      "organizations_url": "https://api.github.com/users/bvaughn/orgs",
      "repos_url": "https://api.github.com/users/bvaughn/repos",
      "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
      "received_events_url": "https://api.github.com/users/bvaughn/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "f891985bd853f1732c6d77ee02e5d019190ef04b",
        "url": "https://api.github.com/repos/facebook/react-native/commits/f891985bd853f1732c6d77ee02e5d019190ef04b",
        "html_url": "https://github.com/facebook/react-native/commit/f891985bd853f1732c6d77ee02e5d019190ef04b"
      }
    ]
  },
  {
    "sha": "f891985bd853f1732c6d77ee02e5d019190ef04b",
    "commit": {
      "author": {
        "name": "jrodiger",
        "email": "jonathan@rodiger.net",
        "date": "2017-03-24T01:11:30Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T01:20:10Z"
      },
      "message": "Update runAndroid.js to fix startServerInNewWindow() (Windows)\n\nSummary:\n**Motivation**\nResolves issue: #12367. The issue is that the packager does not launch automatically on Windows when running `react-native run-android` like it does on OSX. The proposed change fixes this issue, and causes the packager to be launched automatically on Windows 10. Also note the updated code uses the syntax described in the [Node.js documentation](https://nodejs.org/api/all.html#child_process_spawning_bat_and_cmd_files_on_windows) on spawning .bat files on Windows.\n\n**Test plan**\nManually tested on Windows 10.\n\nRunning just `react-native run-android` now results in the packager launching, without needing to run `react-native start` in a new command prompt window.\n\n**Screenshot:**\n![packager](https://cloud.githubusercontent.com/assets/17132071/23641540/8d82bb7c-02c2-11e7-9c47-d1c9b582bd65.png)\nCloses https://github.com/facebook/react-native/pull/12755\n\nDifferential Revision: D4767321\n\nfbshipit-source-id: a14f369ba99939aa44d0ee3403e1d262e2657e6e",
      "tree": {
        "sha": "56652549f8cb46ede834997aaac2ebe6e1c2f0c1",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/56652549f8cb46ede834997aaac2ebe6e1c2f0c1"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/f891985bd853f1732c6d77ee02e5d019190ef04b",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/f891985bd853f1732c6d77ee02e5d019190ef04b",
    "html_url": "https://github.com/facebook/react-native/commit/f891985bd853f1732c6d77ee02e5d019190ef04b",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/f891985bd853f1732c6d77ee02e5d019190ef04b/comments",
    "author": {
      "login": "jrodiger",
      "id": 17132071,
      "avatar_url": "https://avatars1.githubusercontent.com/u/17132071?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jrodiger",
      "html_url": "https://github.com/jrodiger",
      "followers_url": "https://api.github.com/users/jrodiger/followers",
      "following_url": "https://api.github.com/users/jrodiger/following{/other_user}",
      "gists_url": "https://api.github.com/users/jrodiger/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jrodiger/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jrodiger/subscriptions",
      "organizations_url": "https://api.github.com/users/jrodiger/orgs",
      "repos_url": "https://api.github.com/users/jrodiger/repos",
      "events_url": "https://api.github.com/users/jrodiger/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jrodiger/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "9a88c721635ddb1ad6624b7dd3fc9e21530b00e2",
        "url": "https://api.github.com/repos/facebook/react-native/commits/9a88c721635ddb1ad6624b7dd3fc9e21530b00e2",
        "html_url": "https://github.com/facebook/react-native/commit/9a88c721635ddb1ad6624b7dd3fc9e21530b00e2"
      }
    ]
  },
  {
    "sha": "9a88c721635ddb1ad6624b7dd3fc9e21530b00e2",
    "commit": {
      "author": {
        "name": "Brian Vaughn",
        "email": "bvaughn@fb.com",
        "date": "2017-03-24T00:31:16Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T00:45:30Z"
      },
      "message": "Exposed new ViewPropTypes object on ReactNative renderer (stack and fiber)\n\nReviewed By: yungsters\n\nDifferential Revision: D4765002\n\nfbshipit-source-id: 54be903bf6529df7ab2cff265c1f87b145da8d94",
      "tree": {
        "sha": "30d1e39a219038d79d1110b287744bc2bb237085",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/30d1e39a219038d79d1110b287744bc2bb237085"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/9a88c721635ddb1ad6624b7dd3fc9e21530b00e2",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/9a88c721635ddb1ad6624b7dd3fc9e21530b00e2",
    "html_url": "https://github.com/facebook/react-native/commit/9a88c721635ddb1ad6624b7dd3fc9e21530b00e2",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/9a88c721635ddb1ad6624b7dd3fc9e21530b00e2/comments",
    "author": {
      "login": "bvaughn",
      "id": 29597,
      "avatar_url": "https://avatars3.githubusercontent.com/u/29597?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bvaughn",
      "html_url": "https://github.com/bvaughn",
      "followers_url": "https://api.github.com/users/bvaughn/followers",
      "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
      "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
      "organizations_url": "https://api.github.com/users/bvaughn/orgs",
      "repos_url": "https://api.github.com/users/bvaughn/repos",
      "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
      "received_events_url": "https://api.github.com/users/bvaughn/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "febf3d00ed228391ee4dd6541b0d2746dc56d21f",
        "url": "https://api.github.com/repos/facebook/react-native/commits/febf3d00ed228391ee4dd6541b0d2746dc56d21f",
        "html_url": "https://github.com/facebook/react-native/commit/febf3d00ed228391ee4dd6541b0d2746dc56d21f"
      }
    ]
  },
  {
    "sha": "febf3d00ed228391ee4dd6541b0d2746dc56d21f",
    "commit": {
      "author": {
        "name": "Eric Vicenti",
        "email": "evv@fb.com",
        "date": "2017-03-24T00:28:34Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-24T00:29:56Z"
      },
      "message": "Remove Deprecated NavigationExperimental\n\nSummary:\nNow that there are a number of good navigation solutions provided by the community, we are ready to remove NavigationExperimental from the RN core. The latest navigation doc explains the available options pretty well: http://facebook.github.io/react-native/docs/navigation.html . We should also add a mention to Airbnb's new native-navigation.\n\nFor anybody who continues to rely on it, it is recommended to migrate to React Navigation, which will be maintained over the long-term. For those who cannot migrate yet, it is possible to copy this code into your app.\nCloses https://github.com/facebook/react-native/pull/13066\n\nDifferential Revision: D4757539\n\nPulled By: ericvicenti\n\nfbshipit-source-id: 949d9b33f188584fb095155fa67d3ce24beba29f",
      "tree": {
        "sha": "1355706862ee5e2cdc383c4f67713fd46cb96e41",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/1355706862ee5e2cdc383c4f67713fd46cb96e41"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/febf3d00ed228391ee4dd6541b0d2746dc56d21f",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/febf3d00ed228391ee4dd6541b0d2746dc56d21f",
    "html_url": "https://github.com/facebook/react-native/commit/febf3d00ed228391ee4dd6541b0d2746dc56d21f",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/febf3d00ed228391ee4dd6541b0d2746dc56d21f/comments",
    "author": {
      "login": "ericvicenti",
      "id": 1483597,
      "avatar_url": "https://avatars2.githubusercontent.com/u/1483597?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ericvicenti",
      "html_url": "https://github.com/ericvicenti",
      "followers_url": "https://api.github.com/users/ericvicenti/followers",
      "following_url": "https://api.github.com/users/ericvicenti/following{/other_user}",
      "gists_url": "https://api.github.com/users/ericvicenti/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ericvicenti/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ericvicenti/subscriptions",
      "organizations_url": "https://api.github.com/users/ericvicenti/orgs",
      "repos_url": "https://api.github.com/users/ericvicenti/repos",
      "events_url": "https://api.github.com/users/ericvicenti/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ericvicenti/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "d868e86df0dd51e690b7901b3c860657da527010",
        "url": "https://api.github.com/repos/facebook/react-native/commits/d868e86df0dd51e690b7901b3c860657da527010",
        "html_url": "https://github.com/facebook/react-native/commit/d868e86df0dd51e690b7901b3c860657da527010"
      }
    ]
  },
  {
    "sha": "d868e86df0dd51e690b7901b3c860657da527010",
    "commit": {
      "author": {
        "name": "Gabe Levi",
        "email": "gabe@fb.com",
        "date": "2017-03-23T23:33:32Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T23:46:23Z"
      },
      "message": "Deploy v0.42.0\n\nReviewed By: zertosh\n\nDifferential Revision: D4732064\n\nfbshipit-source-id: 12fb8f9aff983ff5d1cb01f413bab761259829f9",
      "tree": {
        "sha": "8662ffedbc7ee222a8d492d43b8193fccdcf9abb",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/8662ffedbc7ee222a8d492d43b8193fccdcf9abb"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/d868e86df0dd51e690b7901b3c860657da527010",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/d868e86df0dd51e690b7901b3c860657da527010",
    "html_url": "https://github.com/facebook/react-native/commit/d868e86df0dd51e690b7901b3c860657da527010",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/d868e86df0dd51e690b7901b3c860657da527010/comments",
    "author": {
      "login": "gabelevi",
      "id": 1887264,
      "avatar_url": "https://avatars1.githubusercontent.com/u/1887264?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/gabelevi",
      "html_url": "https://github.com/gabelevi",
      "followers_url": "https://api.github.com/users/gabelevi/followers",
      "following_url": "https://api.github.com/users/gabelevi/following{/other_user}",
      "gists_url": "https://api.github.com/users/gabelevi/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/gabelevi/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/gabelevi/subscriptions",
      "organizations_url": "https://api.github.com/users/gabelevi/orgs",
      "repos_url": "https://api.github.com/users/gabelevi/repos",
      "events_url": "https://api.github.com/users/gabelevi/events{/privacy}",
      "received_events_url": "https://api.github.com/users/gabelevi/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "7c9173bc9ef4683d2fe82ad1fcbe81b44c635f99",
        "url": "https://api.github.com/repos/facebook/react-native/commits/7c9173bc9ef4683d2fe82ad1fcbe81b44c635f99",
        "html_url": "https://github.com/facebook/react-native/commit/7c9173bc9ef4683d2fe82ad1fcbe81b44c635f99"
      }
    ]
  },
  {
    "sha": "7c9173bc9ef4683d2fe82ad1fcbe81b44c635f99",
    "commit": {
      "author": {
        "name": "Pieter De Baets",
        "email": "pieter.debaets@gmail.com",
        "date": "2017-03-23T21:58:20Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T22:01:34Z"
      },
      "message": "Enable -Wimplicit-retain-self en sync warning config for all projects\n\nSummary:\nThis is enforced for all of our internal iOS code and a common cause of import failures.\n\ncc janicduplessis\nCloses https://github.com/facebook/react-native/pull/13124\n\nDifferential Revision: D4765016\n\nfbshipit-source-id: 7c8248c98bca0fa6bad24d5a52b666243375e0db",
      "tree": {
        "sha": "75cd2fa35b72d50a2cf73a5f6d9f8d6687b03372",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/75cd2fa35b72d50a2cf73a5f6d9f8d6687b03372"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/7c9173bc9ef4683d2fe82ad1fcbe81b44c635f99",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/7c9173bc9ef4683d2fe82ad1fcbe81b44c635f99",
    "html_url": "https://github.com/facebook/react-native/commit/7c9173bc9ef4683d2fe82ad1fcbe81b44c635f99",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/7c9173bc9ef4683d2fe82ad1fcbe81b44c635f99/comments",
    "author": {
      "login": "javache",
      "id": 5676,
      "avatar_url": "https://avatars0.githubusercontent.com/u/5676?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/javache",
      "html_url": "https://github.com/javache",
      "followers_url": "https://api.github.com/users/javache/followers",
      "following_url": "https://api.github.com/users/javache/following{/other_user}",
      "gists_url": "https://api.github.com/users/javache/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/javache/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/javache/subscriptions",
      "organizations_url": "https://api.github.com/users/javache/orgs",
      "repos_url": "https://api.github.com/users/javache/repos",
      "events_url": "https://api.github.com/users/javache/events{/privacy}",
      "received_events_url": "https://api.github.com/users/javache/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "20ba9871390be44b998a56e264a3dfd3b4582789",
        "url": "https://api.github.com/repos/facebook/react-native/commits/20ba9871390be44b998a56e264a3dfd3b4582789",
        "html_url": "https://github.com/facebook/react-native/commit/20ba9871390be44b998a56e264a3dfd3b4582789"
      }
    ]
  },
  {
    "sha": "20ba9871390be44b998a56e264a3dfd3b4582789",
    "commit": {
      "author": {
        "name": "Jean Lauliac",
        "email": "jeanlauliac@fb.com",
        "date": "2017-03-23T19:25:37Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T19:31:39Z"
      },
      "message": "packager: TerminalReporter: stop reporting global cache errors\n\nSummary: At FB we log errors into the error infra, and these errors are not actionnable for end users, so let's reduce the noise generated on the terminal. In the OSS case, people can simply add a handler in a TerminalReporter decorator, the same way we do internally (anyhow, I do not know of anyone using the global cache in OSS for now).\n\nReviewed By: davidaurelio\n\nDifferential Revision: D4762858\n\nfbshipit-source-id: 880c02e175ae551df11b7ce273acc318222c46bf",
      "tree": {
        "sha": "156d728b94a26c67a975f42c1398948eee579514",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/156d728b94a26c67a975f42c1398948eee579514"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/20ba9871390be44b998a56e264a3dfd3b4582789",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/20ba9871390be44b998a56e264a3dfd3b4582789",
    "html_url": "https://github.com/facebook/react-native/commit/20ba9871390be44b998a56e264a3dfd3b4582789",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/20ba9871390be44b998a56e264a3dfd3b4582789/comments",
    "author": {
      "login": "jeanlauliac",
      "id": 1733570,
      "avatar_url": "https://avatars0.githubusercontent.com/u/1733570?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jeanlauliac",
      "html_url": "https://github.com/jeanlauliac",
      "followers_url": "https://api.github.com/users/jeanlauliac/followers",
      "following_url": "https://api.github.com/users/jeanlauliac/following{/other_user}",
      "gists_url": "https://api.github.com/users/jeanlauliac/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jeanlauliac/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jeanlauliac/subscriptions",
      "organizations_url": "https://api.github.com/users/jeanlauliac/orgs",
      "repos_url": "https://api.github.com/users/jeanlauliac/repos",
      "events_url": "https://api.github.com/users/jeanlauliac/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jeanlauliac/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "dcf3cbeb313453a6762a8a69d3749f9971d8a268",
        "url": "https://api.github.com/repos/facebook/react-native/commits/dcf3cbeb313453a6762a8a69d3749f9971d8a268",
        "html_url": "https://github.com/facebook/react-native/commit/dcf3cbeb313453a6762a8a69d3749f9971d8a268"
      }
    ]
  },
  {
    "sha": "dcf3cbeb313453a6762a8a69d3749f9971d8a268",
    "commit": {
      "author": {
        "name": "Michael Lee",
        "email": "mzlee@fb.com",
        "date": "2017-03-23T18:57:18Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T19:02:25Z"
      },
      "message": "Clean up some of the ReactNative Buck rules\n\nReviewed By: yangchi\n\nDifferential Revision: D4739284\n\nfbshipit-source-id: 0ee335df0d114631e5fc60d5d6e51547e5312d39",
      "tree": {
        "sha": "c4454227b4d080ed71fefb7d82646b3737898ae6",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/c4454227b4d080ed71fefb7d82646b3737898ae6"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/dcf3cbeb313453a6762a8a69d3749f9971d8a268",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/dcf3cbeb313453a6762a8a69d3749f9971d8a268",
    "html_url": "https://github.com/facebook/react-native/commit/dcf3cbeb313453a6762a8a69d3749f9971d8a268",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/dcf3cbeb313453a6762a8a69d3749f9971d8a268/comments",
    "author": {
      "login": "mzlee",
      "id": 682724,
      "avatar_url": "https://avatars3.githubusercontent.com/u/682724?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mzlee",
      "html_url": "https://github.com/mzlee",
      "followers_url": "https://api.github.com/users/mzlee/followers",
      "following_url": "https://api.github.com/users/mzlee/following{/other_user}",
      "gists_url": "https://api.github.com/users/mzlee/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mzlee/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mzlee/subscriptions",
      "organizations_url": "https://api.github.com/users/mzlee/orgs",
      "repos_url": "https://api.github.com/users/mzlee/repos",
      "events_url": "https://api.github.com/users/mzlee/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mzlee/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "3df654e28e7ff8fb69acd32721ebe3de6fe8caf7",
        "url": "https://api.github.com/repos/facebook/react-native/commits/3df654e28e7ff8fb69acd32721ebe3de6fe8caf7",
        "html_url": "https://github.com/facebook/react-native/commit/3df654e28e7ff8fb69acd32721ebe3de6fe8caf7"
      }
    ]
  },
  {
    "sha": "3df654e28e7ff8fb69acd32721ebe3de6fe8caf7",
    "commit": {
      "author": {
        "name": "Gustavo Perdomo",
        "email": "gperdomor@gmail.com",
        "date": "2017-03-23T18:48:04Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T19:02:25Z"
      },
      "message": "Integrare UNUserNotification\n\nSummary:\nImplementing removeAllDeliveredNotifications and removeDeliveredNotifications for remove notifications from notification center, and getDeliveredNotifications\n\nThanks for submitting a PR! Please read these instructions carefully:\n\n- [x] Explain the **motivation** for making this change.\n- [x] Provide a **test plan** demonstrating that the code is solid.\n- [x] Match the **code formatting** of the rest of the codebase.\n- [x] Target the `master` branch, NOT a \"stable\" branch.\n\nCurrently, calling PushNotificationIOS.cancelAllLocalNotifications not remove the notification from the Notification Center\n\nIn iOS 10, a new UNUserNotification class was introduced, this class has a method which get and remove the notifications from notification center\n\nThis PR try to solve that.\n\nIn my case, i'm working with an messaging app, every message is a new notification, when the user tap a notification, the app is opened and the rest of notifications should be gon\nCloses https://github.com/facebook/react-native/pull/13036\n\nDifferential Revision: D4761828\n\nPulled By: javache\n\nfbshipit-source-id: 216e44a64f1bf88b5ae3045d1fa6eca8a1278a71",
      "tree": {
        "sha": "bf02ccc5e1505058556c02eefc0f5620bef3f0e0",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/bf02ccc5e1505058556c02eefc0f5620bef3f0e0"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/3df654e28e7ff8fb69acd32721ebe3de6fe8caf7",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/3df654e28e7ff8fb69acd32721ebe3de6fe8caf7",
    "html_url": "https://github.com/facebook/react-native/commit/3df654e28e7ff8fb69acd32721ebe3de6fe8caf7",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/3df654e28e7ff8fb69acd32721ebe3de6fe8caf7/comments",
    "author": {
      "login": "gperdomor",
      "id": 371939,
      "avatar_url": "https://avatars0.githubusercontent.com/u/371939?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/gperdomor",
      "html_url": "https://github.com/gperdomor",
      "followers_url": "https://api.github.com/users/gperdomor/followers",
      "following_url": "https://api.github.com/users/gperdomor/following{/other_user}",
      "gists_url": "https://api.github.com/users/gperdomor/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/gperdomor/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/gperdomor/subscriptions",
      "organizations_url": "https://api.github.com/users/gperdomor/orgs",
      "repos_url": "https://api.github.com/users/gperdomor/repos",
      "events_url": "https://api.github.com/users/gperdomor/events{/privacy}",
      "received_events_url": "https://api.github.com/users/gperdomor/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "9d377e98a0ebf54f30225b0d6359e953997ea96b",
        "url": "https://api.github.com/repos/facebook/react-native/commits/9d377e98a0ebf54f30225b0d6359e953997ea96b",
        "html_url": "https://github.com/facebook/react-native/commit/9d377e98a0ebf54f30225b0d6359e953997ea96b"
      }
    ]
  },
  {
    "sha": "9d377e98a0ebf54f30225b0d6359e953997ea96b",
    "commit": {
      "author": {
        "name": "Pieter De Baets",
        "email": "pieter.debaets@gmail.com",
        "date": "2017-03-23T18:25:28Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T18:36:17Z"
      },
      "message": "Fix warnings in React.xcodeproj\n\nSummary:\nVarious fixes of xcode projects and cleaning up some warnings\nCloses https://github.com/facebook/react-native/pull/13109\n\nDifferential Revision: D4762652\n\nPulled By: lacker\n\nfbshipit-source-id: b452976a58962439de4adecc8e703264af40cb38",
      "tree": {
        "sha": "8570f479b607515efae20ac7e4c01b82321e5c2e",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/8570f479b607515efae20ac7e4c01b82321e5c2e"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/9d377e98a0ebf54f30225b0d6359e953997ea96b",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/9d377e98a0ebf54f30225b0d6359e953997ea96b",
    "html_url": "https://github.com/facebook/react-native/commit/9d377e98a0ebf54f30225b0d6359e953997ea96b",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/9d377e98a0ebf54f30225b0d6359e953997ea96b/comments",
    "author": {
      "login": "javache",
      "id": 5676,
      "avatar_url": "https://avatars0.githubusercontent.com/u/5676?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/javache",
      "html_url": "https://github.com/javache",
      "followers_url": "https://api.github.com/users/javache/followers",
      "following_url": "https://api.github.com/users/javache/following{/other_user}",
      "gists_url": "https://api.github.com/users/javache/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/javache/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/javache/subscriptions",
      "organizations_url": "https://api.github.com/users/javache/orgs",
      "repos_url": "https://api.github.com/users/javache/repos",
      "events_url": "https://api.github.com/users/javache/events{/privacy}",
      "received_events_url": "https://api.github.com/users/javache/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "1f15c7526ae610077494b3c953504e38aa4bda7a",
        "url": "https://api.github.com/repos/facebook/react-native/commits/1f15c7526ae610077494b3c953504e38aa4bda7a",
        "html_url": "https://github.com/facebook/react-native/commit/1f15c7526ae610077494b3c953504e38aa4bda7a"
      }
    ]
  },
  {
    "sha": "1f15c7526ae610077494b3c953504e38aa4bda7a",
    "commit": {
      "author": {
        "name": "Hector Ramos",
        "email": "hramos@fb.com",
        "date": "2017-03-23T18:11:35Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T18:20:46Z"
      },
      "message": "Fix broken icons in Safari\n\nSummary:\nThe Play Store started serving WebP files for these icons, which are not rendered well in Safari. Switched to JPEGs from the App Store.\n\nPeriodical pruning of the showcase: Removed several entries to keep the showcase fresh.\nCloses https://github.com/facebook/react-native/pull/13098\n\nDifferential Revision: D4762944\n\nPulled By: hramos\n\nfbshipit-source-id: 5f9c43fd186f20b432c54496b143b4a9dd5851e3",
      "tree": {
        "sha": "9bcf277af9ba0ab39274685879a2b03295ef9280",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/9bcf277af9ba0ab39274685879a2b03295ef9280"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/1f15c7526ae610077494b3c953504e38aa4bda7a",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/1f15c7526ae610077494b3c953504e38aa4bda7a",
    "html_url": "https://github.com/facebook/react-native/commit/1f15c7526ae610077494b3c953504e38aa4bda7a",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/1f15c7526ae610077494b3c953504e38aa4bda7a/comments",
    "author": {
      "login": "hramos",
      "id": 165856,
      "avatar_url": "https://avatars0.githubusercontent.com/u/165856?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/hramos",
      "html_url": "https://github.com/hramos",
      "followers_url": "https://api.github.com/users/hramos/followers",
      "following_url": "https://api.github.com/users/hramos/following{/other_user}",
      "gists_url": "https://api.github.com/users/hramos/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/hramos/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/hramos/subscriptions",
      "organizations_url": "https://api.github.com/users/hramos/orgs",
      "repos_url": "https://api.github.com/users/hramos/repos",
      "events_url": "https://api.github.com/users/hramos/events{/privacy}",
      "received_events_url": "https://api.github.com/users/hramos/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "53f9e6a65980c16d7d5bec78095024c00ebc4f4c",
        "url": "https://api.github.com/repos/facebook/react-native/commits/53f9e6a65980c16d7d5bec78095024c00ebc4f4c",
        "html_url": "https://github.com/facebook/react-native/commit/53f9e6a65980c16d7d5bec78095024c00ebc4f4c"
      }
    ]
  },
  {
    "sha": "53f9e6a65980c16d7d5bec78095024c00ebc4f4c",
    "commit": {
      "author": {
        "name": "Héctor Ramos",
        "email": "hramos@users.noreply.github.com",
        "date": "2017-03-23T18:09:07Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T18:20:46Z"
      },
      "message": "Update ISSUE_TEMPLATE.md\n\nSummary:\nThanks for submitting a PR! Please read these instructions carefully:\n\n- [ ] Explain the **motivation** for making this change.\n- [ ] Provide a **test plan** demonstrating that the code is solid.\n- [ ] Match the **code formatting** of the rest of the codebase.\n- [ ] Target the `master` branch, NOT a \"stable\" branch.\n\nWhat existing problem does the pull request solve?\n\nA good test plan has the exact commands you ran and their output, provides screenshots or videos if the pull request changes UI or updates the website. See [What is a Test Plan?][1] to learn more.\n\nIf you have added code that should be tested, add tests.\n\nSign the [CLA][2], if you haven't already.\n\nSmall pull requests are much easier to review and more likely to get merged. Make sure the PR does only one thing, otherwise please split it.\n\nMake sure all **tests pass** on both [Travis][3] and [Circle CI][4]. PRs that break tests are unlikely to be merged.\nCloses https://github.com/facebook/react-native/pull/13122\n\nDifferential Revision: D4763115\n\nPulled By: hramos\n\nfbshipit-source-id: 5d4852a133d42e3fd6eb084cf491a672cf075c29",
      "tree": {
        "sha": "8dbbc806a4453b31debb249288b8af88d96d4cdd",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/8dbbc806a4453b31debb249288b8af88d96d4cdd"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/53f9e6a65980c16d7d5bec78095024c00ebc4f4c",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/53f9e6a65980c16d7d5bec78095024c00ebc4f4c",
    "html_url": "https://github.com/facebook/react-native/commit/53f9e6a65980c16d7d5bec78095024c00ebc4f4c",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/53f9e6a65980c16d7d5bec78095024c00ebc4f4c/comments",
    "author": {
      "login": "hramos",
      "id": 165856,
      "avatar_url": "https://avatars0.githubusercontent.com/u/165856?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/hramos",
      "html_url": "https://github.com/hramos",
      "followers_url": "https://api.github.com/users/hramos/followers",
      "following_url": "https://api.github.com/users/hramos/following{/other_user}",
      "gists_url": "https://api.github.com/users/hramos/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/hramos/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/hramos/subscriptions",
      "organizations_url": "https://api.github.com/users/hramos/orgs",
      "repos_url": "https://api.github.com/users/hramos/repos",
      "events_url": "https://api.github.com/users/hramos/events{/privacy}",
      "received_events_url": "https://api.github.com/users/hramos/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "337daa3d192d4da7768c638552df83ceb79f3f7d",
        "url": "https://api.github.com/repos/facebook/react-native/commits/337daa3d192d4da7768c638552df83ceb79f3f7d",
        "html_url": "https://github.com/facebook/react-native/commit/337daa3d192d4da7768c638552df83ceb79f3f7d"
      }
    ]
  },
  {
    "sha": "337daa3d192d4da7768c638552df83ceb79f3f7d",
    "commit": {
      "author": {
        "name": "Jean Lauliac",
        "email": "jeanlauliac@fb.com",
        "date": "2017-03-23T18:07:12Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T18:20:46Z"
      },
      "message": "packager: ResolutionRequest.js: sync _resolveHasteDependency()\n\nSummary: Some more synchronicity, one step at a time.\n\nReviewed By: davidaurelio\n\nDifferential Revision: D4756542\n\nfbshipit-source-id: 0c56dbca61b3da764aa8d28e29c0e20b54de091e",
      "tree": {
        "sha": "f726073e03b96990e31dbd59ef740b8f4b25ea6e",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/f726073e03b96990e31dbd59ef740b8f4b25ea6e"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/337daa3d192d4da7768c638552df83ceb79f3f7d",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/337daa3d192d4da7768c638552df83ceb79f3f7d",
    "html_url": "https://github.com/facebook/react-native/commit/337daa3d192d4da7768c638552df83ceb79f3f7d",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/337daa3d192d4da7768c638552df83ceb79f3f7d/comments",
    "author": {
      "login": "jeanlauliac",
      "id": 1733570,
      "avatar_url": "https://avatars0.githubusercontent.com/u/1733570?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jeanlauliac",
      "html_url": "https://github.com/jeanlauliac",
      "followers_url": "https://api.github.com/users/jeanlauliac/followers",
      "following_url": "https://api.github.com/users/jeanlauliac/following{/other_user}",
      "gists_url": "https://api.github.com/users/jeanlauliac/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jeanlauliac/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jeanlauliac/subscriptions",
      "organizations_url": "https://api.github.com/users/jeanlauliac/orgs",
      "repos_url": "https://api.github.com/users/jeanlauliac/repos",
      "events_url": "https://api.github.com/users/jeanlauliac/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jeanlauliac/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "3f0f7357cf7350483fd83c6c9b8f2eb87c93db45",
        "url": "https://api.github.com/repos/facebook/react-native/commits/3f0f7357cf7350483fd83c6c9b8f2eb87c93db45",
        "html_url": "https://github.com/facebook/react-native/commit/3f0f7357cf7350483fd83c6c9b8f2eb87c93db45"
      }
    ]
  },
  {
    "sha": "3f0f7357cf7350483fd83c6c9b8f2eb87c93db45",
    "commit": {
      "author": {
        "name": "Jean Lauliac",
        "email": "jeanlauliac@fb.com",
        "date": "2017-03-23T18:07:10Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T18:20:46Z"
      },
      "message": "packager: ResolutionRequest.js: sync _resolveFileOrDir\n\nReviewed By: davidaurelio\n\nDifferential Revision: D4754138\n\nfbshipit-source-id: d19792a726220a673dead1c8c6cdf487e34a6808",
      "tree": {
        "sha": "170474b9e87d47b1ba172488298ad28bd0e374a6",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/170474b9e87d47b1ba172488298ad28bd0e374a6"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/3f0f7357cf7350483fd83c6c9b8f2eb87c93db45",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/3f0f7357cf7350483fd83c6c9b8f2eb87c93db45",
    "html_url": "https://github.com/facebook/react-native/commit/3f0f7357cf7350483fd83c6c9b8f2eb87c93db45",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/3f0f7357cf7350483fd83c6c9b8f2eb87c93db45/comments",
    "author": {
      "login": "jeanlauliac",
      "id": 1733570,
      "avatar_url": "https://avatars0.githubusercontent.com/u/1733570?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jeanlauliac",
      "html_url": "https://github.com/jeanlauliac",
      "followers_url": "https://api.github.com/users/jeanlauliac/followers",
      "following_url": "https://api.github.com/users/jeanlauliac/following{/other_user}",
      "gists_url": "https://api.github.com/users/jeanlauliac/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jeanlauliac/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jeanlauliac/subscriptions",
      "organizations_url": "https://api.github.com/users/jeanlauliac/orgs",
      "repos_url": "https://api.github.com/users/jeanlauliac/repos",
      "events_url": "https://api.github.com/users/jeanlauliac/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jeanlauliac/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "f06384b1b7ed32e9acc70259800b60840478a08d",
        "url": "https://api.github.com/repos/facebook/react-native/commits/f06384b1b7ed32e9acc70259800b60840478a08d",
        "html_url": "https://github.com/facebook/react-native/commit/f06384b1b7ed32e9acc70259800b60840478a08d"
      }
    ]
  },
  {
    "sha": "f06384b1b7ed32e9acc70259800b60840478a08d",
    "commit": {
      "author": {
        "name": "Jean Lauliac",
        "email": "jeanlauliac@fb.com",
        "date": "2017-03-23T18:07:08Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T18:20:46Z"
      },
      "message": "packager: ResolutionRequest.js: _loadAsDir and _loadAsFile sync\n\nReviewed By: davidaurelio\n\nDifferential Revision: D4754090\n\nfbshipit-source-id: 84ad1d988bf097d3094d90f3738ce64cc523879c",
      "tree": {
        "sha": "422ea478f2525ae875853646adb9c76297f1cfe5",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/422ea478f2525ae875853646adb9c76297f1cfe5"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/f06384b1b7ed32e9acc70259800b60840478a08d",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/f06384b1b7ed32e9acc70259800b60840478a08d",
    "html_url": "https://github.com/facebook/react-native/commit/f06384b1b7ed32e9acc70259800b60840478a08d",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/f06384b1b7ed32e9acc70259800b60840478a08d/comments",
    "author": {
      "login": "jeanlauliac",
      "id": 1733570,
      "avatar_url": "https://avatars0.githubusercontent.com/u/1733570?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jeanlauliac",
      "html_url": "https://github.com/jeanlauliac",
      "followers_url": "https://api.github.com/users/jeanlauliac/followers",
      "following_url": "https://api.github.com/users/jeanlauliac/following{/other_user}",
      "gists_url": "https://api.github.com/users/jeanlauliac/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jeanlauliac/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jeanlauliac/subscriptions",
      "organizations_url": "https://api.github.com/users/jeanlauliac/orgs",
      "repos_url": "https://api.github.com/users/jeanlauliac/repos",
      "events_url": "https://api.github.com/users/jeanlauliac/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jeanlauliac/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "10918680eb34dd4bc4fee0846c4b2f49186c9eec",
        "url": "https://api.github.com/repos/facebook/react-native/commits/10918680eb34dd4bc4fee0846c4b2f49186c9eec",
        "html_url": "https://github.com/facebook/react-native/commit/10918680eb34dd4bc4fee0846c4b2f49186c9eec"
      }
    ]
  },
  {
    "sha": "10918680eb34dd4bc4fee0846c4b2f49186c9eec",
    "commit": {
      "author": {
        "name": "Héctor Ramos",
        "email": "hramos@users.noreply.github.com",
        "date": "2017-03-23T18:05:26Z"
      },
      "committer": {
        "name": "Facebook Github Bot",
        "email": "facebook-github-bot@users.noreply.github.com",
        "date": "2017-03-23T18:20:46Z"
      },
      "message": "Fix grammar in the \"Running on a device\" docs\n\nSummary:\nThe wording had some grammar issues. The instructions were also not as precise as they could be.\n\nVerified on Xcode 8.2.1.\nCloses https://github.com/facebook/react-native/pull/13093\n\nDifferential Revision: D4763071\n\nPulled By: hramos\n\nfbshipit-source-id: fe9da098f0e457efba4712db704692f6f4857624",
      "tree": {
        "sha": "742a255b6e815eac6fb9fd163d5498f87c1b8b65",
        "url": "https://api.github.com/repos/facebook/react-native/git/trees/742a255b6e815eac6fb9fd163d5498f87c1b8b65"
      },
      "url": "https://api.github.com/repos/facebook/react-native/git/commits/10918680eb34dd4bc4fee0846c4b2f49186c9eec",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/facebook/react-native/commits/10918680eb34dd4bc4fee0846c4b2f49186c9eec",
    "html_url": "https://github.com/facebook/react-native/commit/10918680eb34dd4bc4fee0846c4b2f49186c9eec",
    "comments_url": "https://api.github.com/repos/facebook/react-native/commits/10918680eb34dd4bc4fee0846c4b2f49186c9eec/comments",
    "author": {
      "login": "hramos",
      "id": 165856,
      "avatar_url": "https://avatars0.githubusercontent.com/u/165856?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/hramos",
      "html_url": "https://github.com/hramos",
      "followers_url": "https://api.github.com/users/hramos/followers",
      "following_url": "https://api.github.com/users/hramos/following{/other_user}",
      "gists_url": "https://api.github.com/users/hramos/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/hramos/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/hramos/subscriptions",
      "organizations_url": "https://api.github.com/users/hramos/orgs",
      "repos_url": "https://api.github.com/users/hramos/repos",
      "events_url": "https://api.github.com/users/hramos/events{/privacy}",
      "received_events_url": "https://api.github.com/users/hramos/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "facebook-github-bot",
      "id": 6422482,
      "avatar_url": "https://avatars0.githubusercontent.com/u/6422482?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook-github-bot",
      "html_url": "https://github.com/facebook-github-bot",
      "followers_url": "https://api.github.com/users/facebook-github-bot/followers",
      "following_url": "https://api.github.com/users/facebook-github-bot/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook-github-bot/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook-github-bot/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook-github-bot/orgs",
      "repos_url": "https://api.github.com/users/facebook-github-bot/repos",
      "events_url": "https://api.github.com/users/facebook-github-bot/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook-github-bot/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "04ccbdd8877424edafab815c7f7ed36adcd0e149",
        "url": "https://api.github.com/repos/facebook/react-native/commits/04ccbdd8877424edafab815c7f7ed36adcd0e149",
        "html_url": "https://github.com/facebook/react-native/commit/04ccbdd8877424edafab815c7f7ed36adcd0e149"
      }
    ]
  }
]

it('renders the CommitsScreen from snapshot', () => {
	const navigation = {
  		state: {
  			params: {
  				commits: {
  					result: commits
  				}
  			}
  		}
  	}
  expect(renderer.create(
    <CommitsScreen navigation={navigation}/>
  )).toMatchSnapshot()
})