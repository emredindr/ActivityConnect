import {apiGet} from '../api/API';

class ActivityService {
  async getAll(searchText, venueId, activityTypeId) {
    return await apiGet('Activity/GetActivityList', {
      searchText,
      venueId,
      activityTypeId,
    },);
  }
}
export default new ActivityService();
