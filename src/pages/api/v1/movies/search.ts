import { mapMovies } from "@/utils/movies";
import { NextApiRequest, NextApiResponse } from "next";
import moviesList from "./data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const titleName: string = (req.query.title as string) ?? "";

    const movies = mapMovies(
        moviesList.results,
        process.env.IMAGES_BASE_PATH ?? ""
    );
    const filteredMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().indexOf(titleName.toLowerCase()) !== -1
    );

    res.status(200).json({ status: "OK", movies: filteredMovies });
}
