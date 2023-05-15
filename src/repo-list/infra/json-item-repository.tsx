import reposJSON from "./list.json";

interface ApiRepoItem {
    id: number;
    name: string;
    forks: number;
    stars: number;
    url: string;
}


export async function getAll(): Promise<ApiRepoItem[]> {
    const repos  = reposJSON.map((repo: ApiRepoItem) => ({
        id: repo.id,
        name: repo.name,
        forks: repo.forks,
        stars: repo.stars,
        url: repo.url
    }))
    return Promise.resolve(repos)
}

