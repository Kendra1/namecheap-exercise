import { mapMovies } from "@/utils/movies";
import type { NextApiRequest, NextApiResponse } from "next";
import moviesList from "./data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        status: "OK",
        movies: mapMovies(
            moviesList.results,
            process.env.IMAGES_BASE_PATH ?? ""
        ),
    });
}
