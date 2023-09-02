import {apiGet} from '../api/API';

class ActivityTypeService {
  async getAll() {
    return await apiGet('ActivityType/GetActivityTypeList');
  }
}
export default new ActivityTypeService();
