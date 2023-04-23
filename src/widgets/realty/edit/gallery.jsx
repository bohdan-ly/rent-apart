import { Api } from 'app/model/api';
import { BASE_STATIC_API } from 'constants';
import { PreviewImage } from 'shared/ui/gallery/preview';
import { fileSelected } from 'shared/utils/files';

export const Gallery = ({ form, setForm }) => {
  const uploadCover = async (e) => {
    if (e.target.files[0]) {
      const formData = new FormData();
      formData.append('imageCover', e.target.files[0]);

      const res = await Api.Realty.uploadImage(formData);

      if (res?.imageCover || res?.images) {
        setForm({ ...form, ...res });
      }
    }
  };

  const uploadImages = async (e) => {
    if (e.target.files[0]) {
      const formData = new FormData();
      formData.append('images', e.target.files[0]);

      const res = await Api.Realty.uploadImage(formData);

      if (res?.imageCover || res?.images) {
        setForm({ ...form, ...res });
      }
    }
  };

  return (
    <div className="flex flex-col grid-cols-1">
      <div className="lg:flex lg:items-start lg:flex-col mt-1.5">
        <label htmlFor="coverImage" className="">
          <div className="max-w-sm overflow-hidden rounded-lg cursor-pointer">
            {form.imageCover && (
              <img
                className="h-full w-full max-w-full object-cover"
                src={`${BASE_STATIC_API}/img/realty/${form.imageCover}`}
                alt="cover image"
              />
            )}
            {!form.imageCover && (
              <div className="flex items-center justify-center rounded bg-gray-50 h-full cursor-pointer hover:border min-h-[200px]">
                <p className="text-2xl text-gray-400">+</p>
              </div>
            )}
          </div>
          <input
            id="coverImage"
            type="file"
            className="hidden"
            value={''}
            onChange={(f) => uploadCover(f)}
          />
        </label>

        <div className="mt-2 w-full lg:flex-shrink-0 flex-wrap">
          <div className="flex flex-row items-start gap-4 flex-wrap">
            {form.images?.map((image) => (
              <PreviewImage key={image} src={`${BASE_STATIC_API}/img/realty/${image}`} />
            ))}

            <label htmlFor="galleryImages" className="">
              <div className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                <div className="flex items-center justify-center rounded bg-gray-50 h-full cursor-pointer hover:border">
                  <p className="text-2xl text-gray-400">+</p>
                </div>
              </div>

              <input
                id="galleryImages"
                type="file"
                className="hidden"
                value={''}
                onChange={(f) => uploadImages(f)}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
