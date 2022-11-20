const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_parent, _args, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    // Returns a single track by trackId
    track: (_parent, { id }, { dataSources }, _info) => {
      return dataSources.trackAPI.getTrack(id);
    },

    // Returns a single module by moduleId
    module: (_parent, { id }, { dataSources }) => {
      return dataSources.trackAPI.getModule(id);
    },
  },

  Mutation: {
    incrementTrackViews: async (_parent, { trackId }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(trackId);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${trackId}`,
          track,
        };
      } catch (err) {
        console.log(err.extensions.response)
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
    }},
  Track: {
    author: (parent, _args, { dataSources }) => {
      const { authorId } = parent;
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _args, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

export { resolvers };
