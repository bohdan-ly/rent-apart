import React from 'react';
import { ListItem } from './list-item';
import { PROLabel } from 'shared/ui/pro';

export const Activity = () => {
  const [activities, setActivities] = React.useState([{}, {}, {}, {}]);

  return (
    <ul className="divide-y divide-gray-200 relative">
      <PROLabel className={'-top-14 right-0'} />
      {activities.map((a, idx) => (
        <ListItem key={idx} />
      ))}
    </ul>
  );
};
