## Structure

The app directory holds a CRA bootstrapped front end. The api directory holds a graphql api backed by mongo, served via Apollo. Instructions for running each are in the respective project READMEs.

## To Do
[ ] list all wip projects in app from api  
    [X] ~~apollo client hooks to retrieve api data~~  
    [X] ~~mobile-first list to display projects and their recipients.~~  
    [ ] functional test  
    [ ] environment variables  
    [ ] host somewhere
[X] add a project  
    [X] reorganise  
        - move modal outside new project button/ refactor
    [ ] loading states
    [ ] error states
[X] reload page once project added  

[X] delete a project 
[ ] optimistic feedback?

[ ] go through tutorial https://www.apollographql.com/docs/tutorial/introduction/   
[ ] PWA (do it all offline?)  
[ ] do i have overlapping dependencies with react-apollo and @apollo/react-hooks? the fact that i can import useMutation from both seems to indicate so...

## Interesting Notes/Things to explore
Mongoose is managing mongo ids?
Is there a way to have more separation between presentation and apollo interface or would it be superfluous abstraction?