const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_parent, _args, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: (parent, _args, { dataSources }) => {
      const { authorId } = parent;
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

export { resolvers };
