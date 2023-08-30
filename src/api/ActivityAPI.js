import api from './API';

export const getActivities = async () => {
    const response = await api.get('Activity/GetActivityList');
    const {data} = response.data.result;
    
    return data;
    };

export const getActivityDetail = async (id) => {
    const response = await api.get(`Activity/GetActivityDetail/${id}`);
    const {data} = response.data.result;
    
    return data;
    };


