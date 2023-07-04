import axios from "axios";

export const BASE_URL = "http://localhost:8001"

export const axio = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-Custom-Header": "foobar",
        "Accept": "application/json",
        "Content-Type": undefined
    }
})
