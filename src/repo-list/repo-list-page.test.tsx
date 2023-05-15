import {render, screen} from "@testing-library/react";
import {RepoListPage} from "./repo-list-page";
import {RepoItem} from "./repo-item";

const getAll = jest.fn();
it("displays a repo with all relevant fields", async () => {
    const repo: RepoItem = {id: 1, name: 'React', forks: 1, stars: 2, url: 'random.org'}

    getAll.mockResolvedValue([repo])
    render(<RepoListPage repository={{getAll}}/>)
    expect(await screen.findByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/Forks: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Stars: 2/i)).toBeInTheDocument();
})

it("repo name contains external url", async () => {
    const repo: RepoItem = {id: 1, name: 'React', forks: 1, stars: 2, url: 'random.org'}

    getAll.mockResolvedValue([repo])
    render(<RepoListPage repository={{getAll}}/>)
    expect(await screen.findByRole('link', {name: /React/i})).toHaveAttribute('href', 'random.org')
});

it.todo("displays a list of repos");

