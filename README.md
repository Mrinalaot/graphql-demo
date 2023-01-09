### GraphQL Learning for beginners

```
npm i
npm start
```

### Queries
query getAllUsers {
  users {
    id
    firstName
    email
  }
}

query getAllQuotes {
  quotes {
    name
    by
  }
}

query getAllUsersWithQuotes {
  users {
    id
    firstName
    email
    quotes {
      name
    }
  }
}

query getUser {
  user (id: 23131){
    id
    firstName
    email
  }
}