import React, { SFC } from 'react';
import { Query } from 'react-apollo';

interface IFetch {
  children: any;
  query: string;
}

const Fetch: SFC<IFetch> = ({ children, ...props }) => (
  <Query query={props.query}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'loading';
      }
      if (error) {
        return `Error!: ${error}`;
      }
      return children(data);
    }}
  </Query>
);

export default Fetch;
