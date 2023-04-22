import React from 'react';
import { ListItem } from './list-item';

export const Activity = () => {
  const [activities, setActivities] = React.useState([{}, {}, {}, {}]);

  return (
    <ul className="divide-y divide-gray-200">
      {activities.map((a, idx) => (
        <ListItem key={idx} />
      ))}
    </ul>
  );
};
