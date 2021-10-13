import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"
import Pagination from "./Pagination"

import '../styles/repository.css'

export function RepositoryList() {

    const [repositories, setRepositories] = useState([])
    const [itensPerPage, setItensPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(repositories.length / itensPerPage)

    const startIndex = currentPage * itensPerPage;
    const endItens = startIndex + itensPerPage;
    const curretItens = repositories.slice(startIndex, endItens)

    const Api = 'https://api.github.com/users/FalconiN/';

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`${Api}repos`)
                .then(response => response.json())
                .then(data => data)
            setRepositories(result)
        }
        fetchData()
    }, []);

    

    return (
        <>
            <section className="section-repository">
                <h1>Projetos</h1>
                <div>
                    <ul className="section-repository-list">
                        {curretItens.map(repository => {
                            return (
                                <RepositoryItem repository={repository} />
                            )
                        })}
                    </ul>

                    <div className="pagination">
                        <Pagination setCurrentPage={setCurrentPage} pages={pages} />
                    </div>

                </div>
            </section>
        </>
    )
}