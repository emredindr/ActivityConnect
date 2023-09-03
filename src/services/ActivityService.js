import {apiGet, apiGetById} from '../api/API';

class ActivityService {
  async getAll() {
    return await apiGet('Activity/GetActivityList');
  }

  async getAllByVenueId(id) {
    return await apiGetById('Activity/GetActivityListByVenueId', {
      params: {venueId: id},
    });
  }
}
export default new ActivityService();
