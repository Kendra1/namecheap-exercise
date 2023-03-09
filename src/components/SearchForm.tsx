import { FunctionComponent, useState } from "react";
import { Button, Col, Form, FormControl } from "react-bootstrap";

export const SearchForm: FunctionComponent<{
    searchMovies: (searchQuery: string) => Promise<void>;
}> = ({ searchMovies }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearchMovies = () => {
        searchMovies(searchQuery);
    };

    return (
        <Form className="row mb-3">
            <div className="mb-3 input-group w-50 col-6 offset-3 ">
                {/* <div className="input-group-addon">
                    <i className="fa fa-envelope-o"></i>
                </div> */}
                <Form.Control
                    id="search"
                    aria-describedby="basic-addon"
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
