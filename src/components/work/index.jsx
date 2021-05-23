import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Work = ({ data }) => {
    return (
        <div className="single-project-slide">
            <div className="thumb">
                <Link to="/" className="image">
                    <img
                        className="fit-image"
                        src={process.env.PUBLIC_URL + data.media.thumb}
                        alt="Product"
                    />
                </Link>
            </div>

            <div className="content">
                <h4 className="subtitle">{data.categories}</h4>
                <h3 className="title">
                    <Link to="/">{data.title}</Link>
                </h3>
            </div>
        </div>
    );
};

Work.propTypes = {
    data: PropTypes.object,
};

export default Work;
