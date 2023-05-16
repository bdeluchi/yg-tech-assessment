import React, {ReactElement} from "react";
import {RepoItemRepository} from "./domain/repo-item-repository";
import {RepoItem} from "./domain/repo-item";
import {CircularProgress, ListItem, Typography} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';


export function RepoListPage({repository}: { repository: RepoItemRepository }): ReactElement {
    const [repos, setRepos] = React.useState<RepoItem[]>([]);
    const [status, setStatus] = React.useState<string>('idle')
    const SUCCESS = 'success';
    const LOADING = 'loading';
    const FAILURE = 'failure';

    const isSuccess = status === SUCCESS
    const isLoading = status === LOADING
    const isFailure = status === FAILURE

    React.useEffect(() => {
        setStatus(LOADING)
        repository.getAll().then((repos) => {
            setRepos(repos)
            setStatus(SUCCESS)
        }).catch(() => {
            setStatus(FAILURE)
        })
    }, [repository])

    return (
        <>
            <Typography variant="h1">Repo list</Typography>
            {isLoading &&
              <>
                <CircularProgress/>
                <p>Loading...</p>
              </>}
            {isFailure && <p>An error happened, please try again</p>}
            {isSuccess && <ul>{repos.map(({id, name, forks, stars, url}, i) => {
                return (
                    <ListItem key={`${id}-${i}`}>
                        <a href={url}>{name}</a> -
                        <DinnerDiningIcon/>{`forks: ${forks}`}
                        <StarIcon/>{`stars: ${stars}`}
                    </ListItem>)
            })}</ul>
            }
        </>

    )
}