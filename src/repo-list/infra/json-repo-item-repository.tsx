import reposJSON from "./list.json";
import {RepoItemRepository} from "../repo-item-repository";

interface ApiRepoItem {
    id: number;
    name: string;
    forks: number;
    stars: number;
    url: string;
}

export function getJSONRepoItemRepository(): RepoItemRepository {
    return {
        getAll,
    }
}


async function getAll(): Promise<ApiRepoItem[]> {
    const repos  = reposJSON.map((repo: ApiRepoItem) => ({
        id: repo.id,
        name: repo.name,
        forks: repo.forks,
        stars: repo.stars,
        url: repo.url
    }))
    return Promise.resolve(repos)
}

