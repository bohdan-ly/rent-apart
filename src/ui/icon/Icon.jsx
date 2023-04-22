import './Icon.scss';

export const Icon = (props) => {
  const {
    iconSrc,
    iconAlt,
    width,
    height,
    onClick,
  } = props;

  return <img
    onClick={onClick}
    className='icon'
    src={iconSrc}
    width={width}
    height={height}
    alt={iconAlt} />;
};