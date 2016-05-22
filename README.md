# This is a project for [meteorjs_app_store project](http://www.bittiger.io/microproject/iw5e9DsrjKEMd6ojn)

### What's the problem
In the MeteorJS App Store Class we discussed that since many apps share the same avgRating (number of stars), we
had to use the app_id as a secondary sorting mechanism.

There is a property in fixtures.js called “numberOfRecommendations”. This property should be calculated by tallying the number. of times this app appeared in another app’s recommended apps list. We will add our new logic in fixtures.js side our main if{} block right after we finish loading our data.

To achieve this:

- Query the Meteor Apps Collection to retrieve all apps in MongoDB – convert the collection cursor into an array.
- Iterate through the Apps array.
- For each App, iterate through its reccomendedApps array (if it exists).
- Use each app_id to update the appropriate MongoDB record by incrementing the numberOfRecommendations property.
- Display our new property in the appPage template.
- Tip: Our code will only run once since it’s wrapped an If{} block checking for an empty App collection. To reset the database, stop meteor (control + c in the console) and type ’meteor reset’.

### Prerequisite

This only takes roughly 10 minutes total. And you will have a fully functional app store!
- Install [nodejs](https://nodejs.org/en/)
- Install [Meteor](https://www.meteor.com/install)
- Start a terminal, execute command `meteor run`. This will install mongoDB, and do the necessary bootstrapping, starting nodejs server etc for you all in one command. 
- This may take a little a few minutes, you will need to type your password if you are running mac. Eventully you should see this line in your terminal `App running at: http://localhost:3000/`. This means everything is good, your starting project is ready.
- Browse to localhost:3000 you should see the starting project ![App Store](https://github.com/newjs/meteorjs_app_store/blob/master/images/appstore.png "Meteor App Store").


