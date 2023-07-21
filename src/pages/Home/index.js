import { useEffect, useState } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom"

import './home.css'

// url da api: movie/now_playing?api_key=1e29fd4e7a21e0e3f45d2ae8abbf9dad&language=pt-BR

function Home() {

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: '1e29fd4e7a21e0e3f45d2ae8abbf9dad',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)

        }

        loadFilmes()

    }, [])


    if(loading) {
        return(
            <div className="loading" >
                <h2  >Carregando filmes...</h2>
            </div>
        )
    }
    return(
        <div className="container" >
            <div className="lista-filme" >
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id} >
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home