export const FieldError = ({ isVisible, errorMessage }) => {
  return (isVisible && <span className={'text-red-500'}>{errorMessage}</span>);
};