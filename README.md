Yet another Github client
======

To run the app, you'll need to

- Create a config.js file in the src folder, copy the __config.js file and fill it with the info you get after [registering for a github app](https://github.com/settings/applications/new)
- npm install
- react-native run-ios

Roadmap 🗺
=======

Core features:
-----

- [x] Authentication
- [x] Display the first 30 commits of a given repo
- [x] Implement ~~pagination~~ infinite scrolling
- [ ] Show commit Details
- [ ] Filter by commits that changed a specific file

Other features:
---

- [x] Store the token in asyncStorage if the user already logged in
- [x] Do not show login screen if the user is already logged in
- [ ] Detect when the use is offline and show an alert
- [ ] Work offline

Other stuff:
---

- [x] Tests