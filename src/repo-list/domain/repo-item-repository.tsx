import {RepoItem} from "./repo-item";

export interface RepoItemRepository {
    getAll: () => Promise<RepoItem[]>
}