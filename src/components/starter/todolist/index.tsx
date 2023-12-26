import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint',
  cache: new InMemoryCache()
});

const TODOS_QUERY = gql`\n  query GetTodos {\n    todos {\n      id\n      text\n      completed\n    }\n  }\n`;

const { loading, error, data } = useQuery(TODOS_QUERY);
