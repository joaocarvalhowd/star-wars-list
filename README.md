# Star Wars - Characters List

> code challenge - [DEMO](https://mira-education-star-wars.firebaseapp.com/)

## Introduction

This project is a code challenge that has been developed with [Angular](https://angular.io/), 
[@angular/pwa](https://www.npmjs.com/package/@angular/pwa) and [@ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md)

**It basically:**
* Fetch characters from [API](https://swapi.co/)

![Image](https://imgur.com/Epak0v8.png)

## Install
- Clone the project: `git clone git@github.com:joaocarvalhowd/star-wars-list.git`
- Go to project's folder: `cd star-wars-list`
- Install dependencies: `npm i` or `yarn`

## Usage
To see this project running locally:
- Execute `npm run start` or `yarn start`
- Access [localhost:4200](http://localhost:4200)

## Tests

Some unit test has been created:

- _pipes/id-character
- _pipes/id-character(integrated)
- _reducers/loading
- _actions/loading
- _services/characters
- characters-item
- pagination

### Execute tests

`npm test` or `yarn test`
