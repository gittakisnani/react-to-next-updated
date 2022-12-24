import axios from "./axios";

export async function fetcher(url, token) {
    const { data } = await axios.get(url, {
        headers: {
            Authorization: token
        }
    })

    return data.data
}