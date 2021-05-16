import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HomeItem({ flight_number, details, mission_name }) {
  return (
    <div className="item col-lg-3 col-md-4 col-xs-6 ">
      <Link to={`detail/${flight_number}`} className=" ">
        <h4 className="text-center">{flight_number}</h4>
        <h5>mission_name : {mission_name}</h5>

        <p>{details}</p>
      </Link>
    </div>
  );
}

HomeItem.propTypes = {
  flight_number: PropTypes.number.isRequired,
  details: PropTypes.string,
};
export default HomeItem;
