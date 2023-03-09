import { MovieList } from "@/components/MovieList";
import { MovieModal } from "@/components/MovieModal";
import { SearchForm } from "@/components/SearchForm";
import MovieService from "@/services/movieService";
import { IMovie } from "@/types/movies";
import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Home() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);

    const getData = useCallback(async () => {
        const data = await MovieService.fetchMovies();
        setMovies(data?.movies || []);
    }, [setMovies]);

    useEffect(() => {
        getData();
    }, [getData]);

    const searchMovies = async (searchQuery: string) => {
        const data = await MovieService.searchMovies(searchQuery);
        setMovies(data?.movies || []);
    };

    return (
        movies && (
            <>
                <Container className="main-container">
                    <h1 className="text-center mt-5 mb-5">Movie List App</h1>
                    <SearchForm searchMovies={searchMovies} />
                    <MovieList
                        movies={movies}
                        setSelectedMovie={setSelectedMovie}
                    />
                </Container>
                <MovieModal
                    movie={selectedMovie}
                    closeModal={() => {
                        setSelectedMovie(null);
                    }}
                />
            </>
        )
    );
}
