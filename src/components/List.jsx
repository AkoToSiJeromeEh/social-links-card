import PropTypes from 'prop-types';

export const List = ({
  name ,
  link
}) => {
  return (
	<li className='li p-2 cursor-pointer rounded-md font-semibold bg-grey hover:bg-green  hover:text-off-black transition-all ' alt={`Go to ${name}`}>
    <a href={link}>{name}</a>
  </li>
  )
}

List.propTypes = {
  name: PropTypes.string , 
  link : PropTypes.string,
};
