import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/jefersonwillian/ignite-rocketseat'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem  />
                <RepositoryItem  />
            </ul>
        </section>
    )
}