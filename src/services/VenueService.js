import {apiGet, apiGetById} from '../api/API';

class VenueService {
  async getAll() {
    return await apiGet('Venue/GetVenueList');
  }
  async getAllByCityId(cityId) {
    return await apiGetById('Venue/GetVenueListByCityId', {params: {cityId: cityId}});
  }
}

export default new VenueService();
