import { AiOutlineFundProjectionScreen } from 'react-icons/all'

export function RepositoryItem({ repository }) {
    return (
        <li>
            <div className="content-list">
                <AiOutlineFundProjectionScreen />
                <h2>{repository.name}</h2>
                <p>{repository.description}</p>
                <a href={repository.html_url} target="_blank" >Saiba Mais</a>
            </div>

        </li>
    )
}