import axios from "axios";

export const api = axios.create({
  baseURL: `https://crm.rdstation.com/api/v1/contacts?token=${process.env.NEXT_PUBLIC_RD_STATION_TOKEN}`,
});
