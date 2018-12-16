import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const ALL_USERS = gql`
  {
    allUsers {
      id
      name
      posts {
        id
        title
      }
    }
  }
`

const Landing = () => (
  <Query query={ALL_USERS}>
    {({loading, error, data}) => {
      if (loading) return "Loading...";
      if (error) return "Error!";

      return (
        <div>
        {data.allUsers.map( user => (
            <div>{user.name}</div>
          )
        )}
      </div>
      )
    }}
  </Query>
)

export { Landing };
