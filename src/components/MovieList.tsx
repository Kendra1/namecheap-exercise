import { IMovie } from "@/types/movies";
import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "./Card";

export const MovieList: FunctionComponent<{
    movies: IMovie[];
    setSelectedMovie: Dispatch<SetStateAction<IMovie | null>>;
}> = ({ movies, setSelectedMovie }) => {
    return (
        <Container>
            <Row>
                {movies.map((movie: IMovie) => (
                    <Col key={movie.id} xs={12} sm={6} lg={4}>
                        <Card
                            movie={movie}
                            setSelectedMovie={setSelectedMovie}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
