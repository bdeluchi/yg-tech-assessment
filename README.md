# Before running the app
You will need to add a github personal token in a local .env file with name `REACT_APP_GITHUB_TOKEN`.

# How to run the app
You can use `npm start` to start the app and `npm test` to run all tests.

# Additional comments
- The number of repos fetched from GraphQL is fixed to 20 in the query. 
It was the first time I used GraphQL so I had to research how to integrate it and didn't have enough time to add pagination.
As I wasn't familiar with GraphQL, I decided to start with a simple json for mock data and implemented it in a way that could be easily replaced with the GraphQL API.



