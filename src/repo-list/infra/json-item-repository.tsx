import reposJSON from "./list.json";

// @ts-ignore
interface ApiRepoItem {
    id: number;
    name: string;
    forks: number;
    stars: number;
    url: string;
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

