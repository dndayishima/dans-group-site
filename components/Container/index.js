import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
