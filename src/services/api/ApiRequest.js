import axios from 'axios';

const clientId = 'YxNSIKobI3-AvhgLd9eeO10FBmOpc_SUxw3EWW_aQsM';
const basrUrl = 'https://api.unsplash.com/';
export const getApi = async url => {
  try {
    const res = await axios.get(`${basrUrl}${url}client_id=${clientId}`);
    return res;
  } catch (err) {
    console.error('Error in ', url, err);
  }
};
