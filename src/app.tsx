import React, {ReactElement} from 'react';
import {RepoListPage} from "./repo-list/repo-list-page";
import {getGraphQlClient} from "./repo-list/infra/graphql/graphql-api-client";

function App(): ReactElement {
const repository = getGraphQlClient();
  return (
    <div className="App">
      <RepoListPage repository={repository} />
    </div>
  );
}

export default App;
