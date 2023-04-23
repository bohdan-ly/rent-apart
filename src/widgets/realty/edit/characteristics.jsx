import { Tag } from 'shared/ui';
import { Input } from 'shared/ui/input';

const tags = [
  {
    title: 'Active',
    value: 'active',
  },
  {
    title: 'Sold Out',
    value: 'soldOut',
  },
  {
    title: 'Rented',
    value: 'rented',
  },
  {
    title: 'Ready',
    value: 'ready',
  },
  {
    title: 'Archived',
    value: 'archived',
  },
];

export const Characteristics = ({ form, setForm }) => {
  return (
    <div className="flex flex-col grid-cols-1">
      <div className="flex flex-wrap gap-4">
        {tags.map((t) => (
          <Tag
            key={t.value}
            tag={t.title}
            value={t.value}
            checked={form.status === t.value}
            labelClassName="cursor-pointer hover:bg-lime-100 transition-all"
            onClick={(val) => setForm({ ...form, status: val })}
          />
        ))}
      </div>
      <div className="space-y-5 mt-6">
        <Input
          label="name"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          label="Type of realty"
          placeholder="Type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />
        <Input
          label="Area"
          type="number"
          placeholder={'m²'}
          value={form.area}
          onChange={(e) => setForm({ ...form, area: e.target.value })}
        />
        <Input
          label="location"
          placeholder="Location"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        {/* <Input label="status" placeholder="Status" /> */}
        <Input
          label="Rooms"
          type="number"
          placeholder={'Rooms'}
          value={form.rooms}
          onChange={(e) => setForm({ ...form, rooms: e.target.value })}
        />
        <Input
          label="Price"
          type="number"
          placeholder={'100$'}
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
      </div>
    </div>
  );
};
