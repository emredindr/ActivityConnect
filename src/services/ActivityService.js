import {apiGet, apiGetById} from '../api/API';

class ActivityService {
  async getAll({activityTypeId, cityId, venueId, startDate, endDate}) {
    return await apiGet('Activity/GetActivityList', {
      params: {
        venueId,
        activityTypeId,
        cityId,
        startDate,
        endDate,
      },
    });
  }

  async getAllByVenueId(id) {
    return await apiGetById('Activity/GetActivityListByVenueId', {
      params: {venueId: id},
    });
  }
}
export default new ActivityService();
