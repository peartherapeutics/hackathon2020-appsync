import gql from "graphql-tag";

export default gql(`
mutation($input: UpdateEventInput!) {
  updateEvent(input: $input) {
    id
    _version
    description
    id
    name
    when
    where
    comments {
      nextToken
    }
  }
}`);
