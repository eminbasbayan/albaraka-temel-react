import PropTypes from 'prop-types';

import './Button.css';

function Button(props) {
  console.log(props);
  
  return (
    <button className={`btn btn-${props.color} btn-${props.size}`}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Button.defaultProps = {
  color: 'primary',
  size: 'md',
};

export default Button;
