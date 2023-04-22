import classNames from 'classnames';

export const Section = ({ title, content = null, className, titleClassName }) => {
  return (
    <section
      className={classNames(className, {
        'bg-blueGray-50 mt-16 px-4': !className,
      })}
    >
      <h2
        className={classNames(titleClassName, {
          'text-2xl font-extrabold': !titleClassName,
        })}
      >
        {title}
      </h2>
      <div className="w-full mt-8">{content}</div>
    </section>
  );
};
