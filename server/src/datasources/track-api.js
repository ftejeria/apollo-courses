import { RESTDataSource } from 'apollo-datasource-rest';

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  getModule(moduleId) {
    return this.get(`module/${moduleId}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }

  getTracksForHome() {
    return this.get('tracks');
  }
  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
}

export { TrackAPI };
