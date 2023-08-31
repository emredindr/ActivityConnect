import {apiGet} from '../api/API';

class ActivitiesService {
  async getGetAll(searchText, venueId, activityTypeId) {
    return await apiGet('Activity/GetActivityList', {
      searchText,
      venueId,
      activityTypeId,
    },);
  }
}
export default new ActivitiesService();
