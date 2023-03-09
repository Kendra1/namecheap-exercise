import "@testing-library/jest-dom";
import renderer, {
    ReactTestRenderer,
    ReactTestRendererJSON,
} from "react-test-renderer";
import { Card } from "../components/Card";

const movie = {
    adult: false,
    backdropPath:
        "https://image.tmdb.org/t/p/w500/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
    genres: ["Horror", "Mystery", "Thriller"],
    id: 631842,
    originalLanguage: "en",
    originalTitle: "Knock at the Cabin",
    direction: "M. Night Shyamalan",
    overview:
        "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
    popularity: 4969.06,
    posterPath:
        "https://image.tmdb.org/t/p/w500/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
    releaseDate: new Date("2023-02-01"),
    title: "Knock at the Cabin",
    video: false,
    voteAverage: 6.6,
    voteCount: 778,
};

let component: ReactTestRenderer;
let tree: ReactTestRendererJSON;
let root: any;
const baseProps = {
    movie: movie,
    setSelectedMovie: jest.fn(),
};

describe("Card succesfull", () => {
    beforeEach(() => {
        component = renderer.create(<Card {...baseProps}></Card>);
        tree = component.toJSON() as ReactTestRendererJSON;
        root = component.root;
    });
    it("should render the component ", () => {
        expect(tree).toMatchSnapshot();
    });
    it("should call set selected movie when clicked on", () => {
        const cardDiv = root.findByProps({
            className: "card movie-card",
        });

        cardDiv.props.onClick();
        expect(baseProps.setSelectedMovie).toHaveBeenCalled();
    });
    it("should contain a proper source for displayed image", () => {
        const img = root.findByProps({
            className: "card-img-top poster",
        });

        expect(img.props.src).toBe(movie.posterPath);
    });
    it("should display proper movie title", () => {
        const titleDiv = root.findByProps({
            className: "card-title title font-weight-bold fs-3 fw-bold",
        });

        expect(titleDiv.props.children).toBe(movie.title);
    });
    it("should display proper year", () => {
        const yearParagraph = root.findByProps({
            className: "fs-5 movie-year",
        });

        expect(yearParagraph.props.children).toBe(
            movie.releaseDate.getFullYear()
        );
    });
    it("should display proper genres", () => {
        const genresParagraph = root.findByProps({
            className: "fs-5 movie-genres",
        });

        expect(genresParagraph.props.children).toBe(movie.genres.join("/"));
    });
    it("should display proper overview", () => {
        const overviewDiv = root.findByProps({
            className: "card-text overview",
        });

        expect(overviewDiv.props.children).toBe(movie.overview);
    });
});
