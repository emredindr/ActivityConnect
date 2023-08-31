import {apiGet} from '../api/API';

class VenuesService {
  async getVenues() {
    return await apiGet('Venue/GetVenueList');
  }
}

export default new VenuesService();
