import React, {ReactElement} from "react";
import {RepoItemRepository} from "./repo-item-repository";
import {RepoItem} from "./repo-item";

export function RepoListPage({repository}: { repository: RepoItemRepository }): ReactElement {
    const [data, setData] = React.useState<RepoItem[]>();

    React.useEffect(() => {
        repository.getAll().then((repos) => {
            setData(repos)
        }).catch(() => {
            throw new Error('error')
        })
    })

    return (
        <>
            <h1>Repo list</h1>
            {data && <ul>{data.map(({id, name, forks, stars, url}, i) => {
                return (
                    <li key={`${id}-${i}`}>
                        <a href={url}>{`${name}`}</a>, {`forks: ${forks}, stars: ${stars}`}
                    </li>)
            })}</ul>
            }
        </>

    )
}
