import { fetcher } from "./Fetcher";

export function multiFetcher(...urls: string[]) {
    return Promise.all(urls.map(url => fetcher(url)))
}