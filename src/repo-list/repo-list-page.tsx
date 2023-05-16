import React, {ReactElement} from "react";
import {RepoItemRepository} from "./domain/repo-item-repository";
import {RepoItem} from "./domain/repo-item";

export function RepoListPage({repository}: { repository: RepoItemRepository }): ReactElement {
    const [repos, setRepos] = React.useState<RepoItem[]>([]);
    const [status, setStatus] = React.useState<string>('idle')

    const isSuccess = status === 'success'
    const isLoading = status === 'loading'
    const isFailure = status === 'failure'

    React.useEffect(() => {
        setStatus('loading')
         repository.getAll().then((repos) => {
             setRepos(repos)
             setStatus('success')
        }).catch(() => {
             setStatus('failure')
        })
    }, [repository])

    return (
        <>
            <h1>Repo list</h1>
            {isLoading && <p>Loading...</p>}
            {isFailure && <p>An error happened, please try again</p>}
            {isSuccess && <ul>{repos.map(({id, name, forks, stars, url}, i) => {
                return (
                    <li key={`${id}-${i}`}>
                        <a href={url}>{`${name}`}</a> - {`forks: ${forks}, stars: ${stars}`}
                    </li>)
            })}</ul>
            }
        </>

    )
}