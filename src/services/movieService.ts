import { IResponse } from "@/types/movies";

class MovieService {
    fetchMovies = async (): Promise<IResponse> => {
        const response = await fetch("/api/v1/movies/list", {
            method: "GET",
        });

        return response.json();
    };

    searchMovies = async (searchQuery: string): Promise<IResponse> => {
        const response = await fetch(
            `/api/v1/movies/search?title=${searchQuery}`,
            {
                method: "GET",
            }
        );

        return response.json();
    };
}

export default new MovieService();
