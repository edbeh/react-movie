import React from 'react'
import {
  CORS_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from '../../config'
import Header from '../elements/Header/Header'
import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from '../elements/SearchBar/SearchBar'
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import MovieThumb from '../elements/MovieThumb/MovieThumb'
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn'
import Spinner from '../elements/Spinner/Spinner'
import './Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.selectGenre = this.selectGenre.bind(this)
    this.selectPopular = this.selectPopular.bind(this)
  }

  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: '',
    genres: [],
    genreId: 0,
    genreName: 'Popular',
  }

  componentDidMount() {
    if (localStorage.getItem('HomeState')) {
      const state = JSON.parse(localStorage.getItem('HomeState'))
      this.setState({ ...state })
    } else {
      this.setState({
        loading: true,
      })

      // fetch the genre list
      let endpoint = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`
      fetch(endpoint)
        .then((result) => result.json())
        .then((result) => {
          this.setState({
            genres: result.genres,
          })
          console.log(this.state.genres)
        })

      // fetch popular movies or movies from selected genre
      let endpoint2 = ''
      endpoint2 =
        this.state.genreId === 0
          ? `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
          : `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${this.state.genreId}&page=1`
      this.fetchItems(endpoint2)
    }
  }

  searchItems = (searchTerm) => {
    console.log(searchTerm)
    let endpoint = ''
    this.setState({
      movies: [],
      loading: true,
      searchTerm, // equal to SearchTerm = searchTerm
    })

    if (this.state.searchTerm === '') {
      endpoint =
        this.state.genreId === 0
          ? `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
          : `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${this.state.genreId}&page=1`
    } else {
      endpoint = `${CORS_URL}${API_URL}search/movie/?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`
      console.log(endpoint)
    }

    this.fetchItems2(endpoint)
  }

  selectGenre = (genreId, genreName) => {
    let endpoint = ''
    this.setState({
      movies: [],
      loading: true,
      heroImage: null,
      genreId,
      genreName,
    })

    endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}&page=1`

    this.fetchItems(endpoint)
  }

  selectPopular = () => {
    let endpoint = ''
    this.setState({
      movies: [],
      loading: true,
      heroImage: null,
      genreId: 0,
      genreName: 'Popular',
    })

    endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    this.fetchItems(endpoint)
  }

  loadMoreItems = () => {
    let endpoint = ''
    this.setState({
      loading: true,
    })

    if (this.state.searchTerm === '' && this.state.genreId === 0) {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
        this.state.currentPage + 1
      }`
    } else if (this.state.searchTerm === '' && this.state.genreId !== 0) {
      endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${
        this.state.genreId
      }&page=${this.state.currentPage + 1}`
    } else {
      endpoint = `${CORS_URL}${API_URL}search/movie/?api_key=${API_KEY}&language=en-US&query=${
        this.state.searchTerm
      }&page=${this.state.currentPage + 1}`
    }

    this.fetchItems(endpoint)
  }

  // connect to API and fetch results
  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        console.log(result)
        this.setState(
          {
            movies: [...this.state.movies, ...result.results],
            heroImage: this.state.heroImage || result.results[0],
            loading: false,
            currentPage: result.page,
            totalPages: result.total_pages,
          },
          () => {
            localStorage.setItem('HomeState', JSON.stringify(this.state))
          }
        )
      })
  }

  // connect to API and fetch results
  fetchItems2 = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        console.log(result)
        this.setState({
          movies: [...this.state.movies, ...result.results],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages,
        })
      })
      .catch((err) => {
        console.log('error fetching movies', err)
      })
  }

  render() {
    return (
      <div className='rmdb-home'>
        {this.state.heroImage ? ( // render hero image and searchbar if present, otherwise return null
          <div>
            <Header
              genres={this.state.genres}
              handleClick={this.selectGenre}
              handleClick2={this.selectPopular}
            />
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
              title={this.state.heroImage.original_title}
              text={this.state.heroImage.overview}
            />
            <SearchBar callback={this.searchItems} />
          </div>
        ) : null}

        <div className='rmdb-home-grid'>
          <FourColGrid
            header={
              this.state.searchTerm
                ? 'Search Results'
                : this.state.genreName + ' Movies'
            }
            loading={this.state.loading}
          >
            {this.state.movies.map((element, i) => {
              return (
                <MovieThumb
                  key={i}
                  clickable={true}
                  image={
                    element.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                      : './images/no_image.jpg'
                  }
                  movieId={element.id}
                  movieName={element.original_title}
                />
              )
            })}
          </FourColGrid>
          {this.state.loading ? <Spinner /> : null}
          {this.state.currentPage < this.state.totalPages &&
          !this.state.loading ? (
            <LoadMoreBtn text='Load More' onClick={this.loadMoreItems} />
          ) : null}
        </div>
      </div>
    )
  }
}

export default Home
