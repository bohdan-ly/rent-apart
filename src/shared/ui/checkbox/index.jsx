import classNames from 'classnames';

export const Checkbox = ({ value = false, label, groupName, checked, onSelect = () => {} }) => {
  return (
    <label
      htmlFor={label}
      className={classNames(
        'cursor-pointer focus:ring-2 focus:ring-blue-300 flex items-center py-3 lg:text-lg 2xl:text-3xl text-black rounded-lg capitalize',
      )}
    >
      <input
        type="checkbox"
        id={label}
        checked={checked}
        name={groupName}
        className="hidden"
        onChange={() => {
          if (typeof onSelect === 'function') {
            onSelect(!checked);
          }
        }}
      />
      <span
        className={classNames('check w-4 h-4 border rounded-lg', {
          'bg-transparent': !checked,
          'bg-lime-400': checked,
        })}
      />
      <span className="whitespace-nowrap block ml-2 text-sm lg:text-lg 2xl:text-2xl font-medium cursor-pointer">
        {label}
      </span>
    </label>
  );
};
