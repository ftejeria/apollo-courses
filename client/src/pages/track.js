import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';


const GET_TRACK = gql`
  query TrackQuery($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;
export const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: {
      trackId,
    },
  });
  return (
    <Layout>
      <QueryResult data={data} error={error} loading={loading}>
        <TrackDetail track={data?.track}></TrackDetail>
      </QueryResult>
    </Layout>
  );
};
