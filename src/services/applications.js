import requestClient from 'libs/client';

export const getStatistics = async () => {
  return requestClient.get('/api/interview/get-statistics');
}

export const getApplications = async () => {
  return requestClient.get('/api/interview/get-applications');
}