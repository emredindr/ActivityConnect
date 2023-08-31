import React from 'react';
import {apiGet} from '../api/API';

class ActivityService {
  async getGetAll(searchText, venueId, activityTypeId) {
    return await apiGet('Activity/GetActivityList', {
      searchText,
      venueId,
      activityTypeId,
    },);
  }
}
export default new ActivityService();
