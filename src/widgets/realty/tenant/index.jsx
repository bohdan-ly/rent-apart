import React from 'react';
import { Checkbox } from 'shared/ui/checkbox';
import { RRDatePicker } from 'shared/ui/datepicker';
import { Input } from 'shared/ui/input';
import { Select } from 'shared/ui/select';
import RangePicker from 'react-range-picker';
import { RangeSliderPick } from 'shared/ui/slider';
import { Button } from 'shared/ui/button';

export const TenantPopup = () => {
  const [tenant, setTenant] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    payAt: Date.now(),
    sum: '',
    reminder: false,
    remindAfter: 0,
  });

  const onChangeForm = (key, value) => {
    setTenant({ ...tenant, [key]: value });
  };

  return (
    <div className="w-full h-full flex overflow-y-auto pb-12">
      <div className="pb-12 px-10">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <Input
            label="first name"
            value={tenant.firstName}
            placeholder="First Name"
            onChange={(e) => onChangeForm('firstName', e.target.value)}
          />
          <Input
            label="last name"
            value={tenant.lastName}
            placeholder="Last Name"
            name="last-name"
            autoComplete="family-name"
            onChange={(e) => onChangeForm('lastName', e.target.value)}
          />
          <Input
            label="Email address"
            value={tenant.email}
            placeholder="Email"
            name="email"
            autoComplete="email"
            onChange={(e) => onChangeForm('email', e.target.value)}
            className="sm:col-span-4"
          />
          <div className="sm:col-span-3">
            <p className="block text-sm font-medium leading-6 text-gray-900">Rental information</p>
            <div className="w-full flex items-center mt-4">
              <Input
                label=""
                type="number"
                value={tenant.sum}
                placeholder="Price"
                name="price"
                autoComplete="price"
                onChange={(e) => onChangeForm('sum', e.target.value)}
                className="w-full"
                inputClassName=""
              />
              <p className="ml-4 text-xl">$</p>
            </div>
            <div className="w-full flex mt-4 flex-col">
              <p className="block text-sm font-medium leading-6 text-gray-400 mb-2">Payment day</p>

              <RRDatePicker
                date={tenant.payAt}
                handleDateChange={(date) => onChangeForm('payAt', date)}
              />
            </div>

            <div className="w-full flex mt-4 flex-col">
              <Checkbox
                label="Remind"
                groupName={'reminder'}
                checked={tenant.reminder}
                onSelect={(val) => onChangeForm('reminder', val)}
              />
              <p className="text-nowrap mb-2">In {tenant.remindAfter} days</p>

              {tenant.reminder && (
                <div className="flex flex-col">
                  <RangeSliderPick
                    value={[0, tenant.remindAfter]}
                    onChange={(val) => onChangeForm('remindAfter', val[1])}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between min-h-[30px] mt-10">
          <Button
            title="Send a reminder"
            className="py-1 px-3 bg-orange-400 text-white rounded hover:bg-orange-500 text-base font-medium"
          />
          <Button
            title="Save"
            className="py-1 px-4 bg-lime-400 text-black rounded hover:bg-lime-500 text-base"
          />
        </div>
      </div>
    </div>
  );
};
