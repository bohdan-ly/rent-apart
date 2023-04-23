import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

export const SidebarButton = ({ title = 'Dashboard', icon = null, path }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/${path}`);
        }}
        className={classNames('flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100', {
          'bg-slate-200': location.pathname.indexOf(`/${path}`) === 0,
        })}
      >
        <div
          className={classNames('h-5 w-5', {
            'text-lime-600': location.pathname.indexOf(`/${path}`) === 0,
          })}
        >
          {icon}
        </div>
        <span className="ml-3">{title}</span>
      </a>
    </li>
  );
};
