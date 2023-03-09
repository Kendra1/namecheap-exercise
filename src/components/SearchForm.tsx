import { FunctionComponent, useState, KeyboardEvent } from "react";
import { Button, Col, Form } from "react-bootstrap";

export const SearchForm: FunctionComponent<{
    searchMovies: (searchQuery: string) => Promise<void>;
}> = ({ searchMovies }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearchMovies = () => {
        searchMovies(searchQuery);
    };

    const handleSearch = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSearchMovies();
        }
    };

    return (
        <Form className="row mb-3">
            <div className="mb-3 input-group w-50 col-6 offset-3 ">
                <span className="input-group-append">
                    <i className="fa fa-search">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </i>
                </span>
                <Form.Control
                    onKeyDown={handleSearch}
                    className="search-field"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <Col xs={6} className="offset-3 text-center">
                <Button className="btn-dark" onClick={handleSearchMovies}>
                    Search
                </Button>
            </Col>
        </Form>
    );
};
