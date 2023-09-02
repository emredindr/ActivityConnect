import {apiGet} from '../api/API';

class ActivityService {
  
  async getAll() {
    return await apiGet('Activity/GetActivityList');
  }
}
export default new ActivityService();
