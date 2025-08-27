import axios from "axios"

export const InstanceApi = axios.create({
  baseURL: 'http://localhost:3333'
});

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;