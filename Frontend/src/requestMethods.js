import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjkzNTY3N2RhZTYwNTBlMjI2ZmFmNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjQ2Mjk2OSwiZXhwIjoxNjU2NzIyMTY5fQ.UE-tlQ-0eiLcMbusd0_YpwJbQH8DiyondMKr6yW0fSk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
