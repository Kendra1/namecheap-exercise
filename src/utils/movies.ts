import { IMovie, IMovieSnakeCase } from "@/types/movies";

export const mapMovies = (movies: IMovieSnakeCase[], imagesBasePath: string): IMovie[] => 
    movies.map((movie) => ({
        adult: movie.adult,
        backdropPath: `${imagesBasePath}${movie.backdrop_path}`,
        genreIds: movie.genre_ids,
        id: movie.id,
        originalLanguage: movie.original_language,
        originalTitle: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: `${imagesBasePath}${movie.poster_path}`,
        releaseDate: new Date(movie.release_date),
        title: movie.title,
        video: movie.video,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count
    }))
