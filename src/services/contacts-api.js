import axios from "axios";

const BASE_URL = "https://61ad23ced228a9001703ad12.mockapi.io/contacts";

export async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
}

export async function fetchAddContact(item) {
  const { data } = await axios.post(`${BASE_URL}`, item);
  return data;
}

export async function fetchDeleteContact(id) {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);
  return data;
}
