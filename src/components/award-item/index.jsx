import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AwardItem = ({ data }) => {
    return (
        <div className="achieved-item">
            <span className={`sub-title ${data.className}`}>{data.cate}</span>
            <h2 className="title">
                <Link
                    to="/"
                    dangerouslySetInnerHTML={{
                        __html: data.title,
                    }}
                ></Link>
            </h2>
        </div>
    );
};

AwardItem.propTypes = {
    data: PropTypes.object,
};

export default AwardItem;
