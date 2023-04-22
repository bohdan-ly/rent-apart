import cn from 'classnames';

import './Avatar.scss';

export const Avatar = ({
                         size,
                         avatarSrc,
                         avatarAlt,
                         modifiers,
                         ...props
                       }) => {
  const avatarClasses = modifiers?.map(modifier => `avatar--${modifier}`);

  return <img width={size}
              height={size}
              className={cn('avatar', avatarClasses)}
              src={avatarSrc}
              alt={avatarAlt} {...props} />;
};