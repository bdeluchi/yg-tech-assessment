import {RepoItemRepository} from "../../domain/repo-item-repository";

interface ApiRepoItem {
    node: {
        id: number;
        name: string;
        forkCount: number;
        stargazerCount: number;
        url: string;
    }
}

const query = `{
  search(type: REPOSITORY, query: "react", first: 20) {
    edges {
      node {
        ... on Repository {
          id
          name
          forkCount
          stargazerCount
          url
        }
      }
    }
  }
}
`;

async function getAll() {
    try {
        const res = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({query}),
        });
        const {data} = await res.json();
        return data.search.edges.map((repo: ApiRepoItem) => ({
            id: repo.node.id,
            name: repo.node.name,
            forks: repo.node.forkCount,
            stars: repo.node.stargazerCount,
            url: repo.node.url
        }))
    } catch (error) {
        throw error;
    }
}

export function getGraphQlClient(): RepoItemRepository {
    return {
        getAll,
    }
}
