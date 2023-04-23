import classNames from 'classnames';

export const Tag = ({
  tag,
  value = '',
  checked = false,
  checkedClassName = '',
  className = 'rounded-lg border border-black px-2.5 py-1 text-xs',
  labelClassName = '',
  onClick = () => {},
}) => {
  return (
    <label className={labelClassName}>
      <input
        type="radio"
        name="type"
        value="Powder"
        className="peer sr-only"
        checked={checked}
        onChange={() => onClick(value)}
      />
      <p
        className={classNames(className, {
          [checkedClassName || 'peer-checked:bg-black peer-checked:text-white']: checked,
        })}
      >
        {tag}
      </p>
    </label>
  );
};
