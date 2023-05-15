import React, {ReactElement} from 'react';
import './App.css';
import {RepoListPage} from "./repo-list/repo-list-page";
import {getJSONRepoItemRepository} from "./repo-list/infra/json-repo-item-repository";

function App(): ReactElement {
    const repository = getJSONRepoItemRepository();
  return (
    <div className="App">
      <RepoListPage repository={repository} />
    </div>
  );
}

export default App;
