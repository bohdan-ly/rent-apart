import React from 'react';
import { Characteristics } from './characteristics';
import { Button } from 'shared/ui/button';
import TextareaAutosize from 'react-textarea-autosize';
import { Gallery } from './gallery';

export const Form = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <h2>Realty characteristics</h2>
        <Button title="Save" />
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <Characteristics />
        <Gallery />
      </div>
      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 mt-8">
        Short summary
      </label>
      <TextareaAutosize
        id="description"
        minRows={1}
        maxRows={1}
        className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
        placeholder="Summary"
      />
      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 mt-8">
        Description
      </label>
      <TextareaAutosize
        id="description"
        minRows={4}
        maxRows={4}
        className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
        placeholder="Write description here..."
      />
    </div>
  );
};