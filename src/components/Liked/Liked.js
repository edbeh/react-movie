import React from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config';
import Header from '../elements/Header/Header';
import HeroImage from '../elements/HeroImage/HeroImage';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';
import './Liked.css';

class Liked extends React.Component {
    constructor(props) {
        super(props);
        this.selectGenre = this.selectGenre.bind(this);
        this.selectPopular = this.selectPopular.bind(this);
    }

    state = {
        movies: [],
        heroImage: null,
        loading: false,
        // currentPage: 0,
        // totalPages: 0,
        // searchTerm: '',
        genres: [],
        genreId: 0,
        // genreName: 'Liked'
    }

    selectGenre = (genreId, genreName) => {
        let endpoint = '';
        this.setState({
            movies: [],
            loading: true,
            heroImage: null,
            genreId,
            genreName
        })

        endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}&page=1`;

        this.fetchItems(endpoint);
    }

    selectPopular = () => {
        this.props.history.push("/");
    }

    componentDidMount() {
        if (localStorage.getItem('LikedMovieState')) {
            const likedMovies = JSON.parse(localStorage.getItem('LikedMovieState'));
            this.setState({
                movies: [ ...likedMovies ],
                heroImage: likedMovies[0]
            });

            // fetch the genre list   
            let endpoint = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
            fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    genres: result.genres
                })
                console.log(this.state.genres)
            })
        } else {
            this.setState({
                loading: true
            })
    
            // fetch the genre list   
            let endpoint = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
            fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    genres: result.genres
                })
                console.log(this.state.genres)
            })
        }
    }

    render() {
        return (
            <div className="rmdb-home">
                {this.state.heroImage ? // render hero image and searchbar if present, otherwise return null
                <div>
                    <Header genres={this.state.genres} handleClick={this.selectPopular} handleClick2={this.selectPopular}/>
                    <HeroImage 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
                        title={this.state.heroImage.original_title}
                        text={this.state.heroImage.overview}
                            />
                </div> : null}

                    <div className="rmdb-home-grid">
                        <FourColGrid 
                            header={'Liked Movies'}
                            loading={this.state.loading}
                        >
                            {this.state.movies.map((element, i) => {
                                return <MovieThumb 
                                            key={i}
                                            clickable={true}
                                            image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                                            movieId={element.id}
                                            movieName={element.original_title} 
                                            />
                            })}
                        </FourColGrid>
                        {this.state.loading ? <Spinner /> : null}
                    </div>
            </div>
        )
    }
}

export default Liked;