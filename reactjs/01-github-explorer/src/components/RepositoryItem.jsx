export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description ?? 'Sem texto'}</p>

            <a target="_blank" href={props.repository?.html_url ?? '#'}>Acessar repositório</a>
        </li>
    )
}