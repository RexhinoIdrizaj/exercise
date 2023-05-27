# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
node ">=18.5.0"

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

# Assumptions

This project is build assuming that it will do a small and simple task, to retrieve device logs and display what is needed.
For this particular reason it is not chosen to use any state management library like redux but doing it directly from the useEffect of the main screen.

As the task is simple and will consist in two lists one for academies and one for the devices of the chosen academy it is decided to best display data
side by side as soon as any academy is selected. This is the reason why routing is not implemented.

The data for battery consumption are calculated by finding the total battery usage in a total number of hours and checking if the average passes or not the
threshold of 30% per day. All intervals equally weighted.

Not everything is included in tests but I think enough are written for the purpose of this tasks.

# Possibilities to evolve

1. The project is build in a way that if it is needed to evolve there can easily be added a state management library (just configure the store and add provider in the index)
2. The function responsible can be easily removed and used inside a thunk/saga and in the use effect we can just dispatch an action.
3. The state can be easily removed and replaced by reducer state.
3. The Main screen is build as a screen component to be easily moved and used with a router.
4. All apis that will be needed to use can be added inside services and can be called inside thunk/saga
5. The project uses MUI for faster layout development. They can be easily extended inside theme.
6. UI folder is used for stateless only UI responsible components. Others can go into components folder.

# Left out and next steps.

Possibility:
1. to add a search for particular academy or other filters to choose for example range of dates to retrieve logs.
2. maybe to be able to select a different threshold with dropdown.
3. to create a done section to check and add fixed devices and finished schools. 
3.1 Maybe to send this data to server to keep information up to date or history logs of the service provided like time and staff included in the service.
4. to add routing and other screen if more details or operations are needed for devices.
5. pull to refresh.
6. to distinguish more between critical devices and those who are green but near threshold by showing more details about their usage.
7. maybe a button where user can put a alert for those particular devices.
8. if possible to retrieve from server also data for academies location.
9. add more detailed documentation.
10. add more tests.









