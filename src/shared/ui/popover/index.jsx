import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CloseIcon } from 'shared/icons';
import { selectPopup } from 'store/popup/selector';
import { closePopup } from 'store/popup/slice';
import { useOnClickOutside } from 'usehooks-ts';

export const Popover = () => {
  const ref = React.useRef();

  const dispatch = useDispatch();
  const { isVisible, content } = useSelector(selectPopup);

  React.useEffect(() => {}, [isVisible]);

  useOnClickOutside(ref, () => {
    handleClosePopup();
  });

  const handleClosePopup = () => {
    dispatch(closePopup({}));
  };

  if (!isVisible) return null;

  return (
    <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed h-full inset-0 max-h-screen overflow-hidden py-3 w-full z-40">
        <div className="flex h-full justify-center max-h-screen min-h-full overflow-hidden p-4 sm:items-center sm:p-0 text-center">
          <div
            ref={ref}
            className="flex flex-col bg-white h-full overflow-hidden relative rounded-lg shadow-xl sm:max-w-lg sm:my-8 sm:w-full text-left transform transition-all"
          >
            <div className="sticky top-0 right-0 flex justify-end px-4 py-2">
              <CloseIcon className="h-6 w-6 cursor-pointer" onClick={handleClosePopup} />
            </div>

            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
