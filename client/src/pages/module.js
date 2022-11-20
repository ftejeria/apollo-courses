import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, ModuleDetail, QueryResult } from '../components';

const GET_MODULE_AND_TRACK = gql`
  query TrackAndModuleQuery($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
      title
      modulesCount
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      length
      title
      content
      videoUrl
    }
  }
`;

export const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(GET_MODULE_AND_TRACK, {
    variables: {
      moduleId,
      trackId,
    },
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
