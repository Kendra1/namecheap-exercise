import { IMovie } from "@/types/movies";
import React, { FunctionComponent } from "react";
import { Modal, CloseButton, Container } from "react-bootstrap";

export const MovieModal: FunctionComponent<{
    movie: IMovie | null;
    closeModal: () => void;
}> = ({ movie, closeModal }) => {
    const movieDate: number | string = movie
        ? new Date(movie.releaseDate).getFullYear()
        : "N/A";
    return (
        movie && (
            <Modal
                show={!!movie}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className="button-container">
                    <CloseButton onClick={closeModal} />
                </div>
                <Modal.Header className="header">
                    <div className="fs-1 text-center w-100">{movie.title}</div>
                </Modal.Header>
                <Modal.Body className="content">
                    <img className="poster" src={movie.backdropPath} />
                    <Container className="info text-center">
                        <h3>
                            {movieDate}, {movie.genreIds.join(", ")}, Guy
                            Ritchie
                        </h3>
                        <p>{movie.overview}</p>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    );
};
