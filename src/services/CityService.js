import {apiGet} from '../api/API';

class CityService {
  async getAll() {
    return await apiGet('City/GetCityList');
  }
}
export default new CityService();
