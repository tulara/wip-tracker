## Structure

The app directory holds a CRA bootstrapped front end. The api directory holds a graphql api backed by mongo, served via Apollo. Instructions for running each are in the respective project READMEs.

## To Do
[ ] list all wip projects in app from api
    [X] ~~apollo client hooks to retrieve api data~~
    [X] ~~mobile-first list to display projects and their recipients.~~
    [ ] functional test
    [ ] environment variables
[X] add a project
    [ ] reorganise
[ ] reload page once project added
[ ] PWA (do it all offline?)

## Interesting Notes/Things to explore
Mongoose is managing mongo ids?
Is there a way to have more separation between presentation and apollo interface or would it be superfluous abstraction?