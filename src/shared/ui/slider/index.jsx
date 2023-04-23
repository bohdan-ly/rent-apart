import React from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export const RangeSliderPick = ({ value = [0, 50], onChange = () => {} }) => {
  const [curValue, setCurValue] = React.useState(value);

  return (
    <RangeSlider
      className="single-thumb"
      defaultValue={[0, 50]}
      value={curValue}
      thumbsDisabled={[true, false]}
      rangeSlideDisabled={true}
      onInput={(val) => setCurValue(val)}
      onThumbDragEnd={() => onChange(curValue)}
    />
  );
};
