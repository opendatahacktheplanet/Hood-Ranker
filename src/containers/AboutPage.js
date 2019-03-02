import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const HELLO_QUERY = gql`
{
  hello
}`;

const AboutPage = () => (
  <Query query={HELLO_QUERY} >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>{data.hello}</div>
      );
    }}
  </Query>
);

export default AboutPage;
