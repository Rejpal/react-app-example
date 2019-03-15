# Example React App for rendering dynamic data structure

## Description
Small react app to present my skills. The project is fully focused on logic, working with React and store management. Visual is therefore just very basic. The project is lacting separated Actions to have a complete loop Store -> View -> Action -> Dispatcher because it is too small to have any usefull actions in place (There is just one container that would be able to trigger such Actions and that is APP.tsx, everything else lacks context required for triggering global actions).

## How to run the project
1) clone the repository
2) open clonned repository folder in command line
2) run `yarn install` or `npm install` to install dependencies
3) run `yarn start` or `npm start`

## Ordered Todo list
1) DONE - create visualization of kids
2) DONE - collapsing kid tables
3) OPTIONAL - add standardjs
4) DONE - make jest and enzyme running
5) DONE - add posibility to delete row
6) DONE - create store
7) OPTIONAL - add CSS to make it look more fancy
8) Raise test coverage of project

## Performace
There are unnessesary renders happening because There are no reliable ids That I could have used without poluting data with ids of my own.

### Struggle notices
- Understanding the data structure and what exactly am I supposed to make took me few days. First two data models went out of the window because they would not match the dinamic possibilies of given data.
- Using MST is be problematic because of dynamic data. Should still be possible. After few unsuccessfull atempts to make it work with MST I've decided to use pure MobX instead.
- Typescript makes development slower but the code is more reliable. Transfer from flow is smoother than I have expected.
- I was struggling with Jest and Enzyme snapshot testing. It was caused by create-react-app missinitialization when I was creating the repository.

