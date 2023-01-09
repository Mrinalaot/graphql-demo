### GraphQL Learning for beginners

```
npm i
npm start
```

### Queries
query getAllQueries {
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

query getAllUserQueries {
  users {
    id
    firstName
    email
    quotes {
      name
    }
  }
}