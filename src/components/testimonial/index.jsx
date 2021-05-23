import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Testimonial = ({ data }) => {
    return (
        <div className="single-testimonial">
            <i className={data.icon}></i>

            <div className="testimonial-content">
                <h6 className="name">
                    <Link to="/">{data.name} </Link> /{" "}
                    <span> {data.designation}</span>
                </h6>
                <p>{data.excerpt}</p>
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    data: PropTypes.object,
};

export default Testimonial;
