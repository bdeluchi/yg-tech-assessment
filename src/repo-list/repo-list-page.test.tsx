import {render, screen, waitFor} from "@testing-library/react";
import {RepoListPage} from "./repo-list-page";
import {RepoItem} from "./repo-item";

const getAll = jest.fn();
it("displays a repo with all relevant fields", async() => {
    const repo: RepoItem = {id: 1, name: 'React', forks: 1, stars: 2, url: 'random.org'}

    getAll.mockResolvedValue([repo])
    render(<RepoListPage repository={{getAll}}/>)
    await waitFor(() => {
        expect(screen.getByText(/React/i)).toBeInTheDocument();
    })
    expect(screen.getByText(/Forks: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Stars: 2/i)).toBeInTheDocument();
})

it.todo("displays a list of repos");

it.todo("navigates to url when repo name is clicked");

