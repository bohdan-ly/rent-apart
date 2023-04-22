import classNames from 'classnames';

export const Input = ({ name, value, onChange, placeholder, className, type = 'text' }) => {
    return (
      <input name={name}
             className={classNames(className, {
               'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none  outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500': !className,
             })}
             autoComplete='off'
             type={type}
             value={value}
             onChange={onChange}
             placeholder={placeholder} />
    );
  }
;
