import { notify } from 'app/providers/with-notifications';

const hasExtension = (fileName) => {
  const patternPart = ['jpg', 'jpeg', 'png'].map((a) => a.toLowerCase()).join('|');
  const pattern = '(' + patternPart.replace(/\./g, '\\.') + ')$';
  return new RegExp(pattern, 'i').test(fileName.toLowerCase());
};

const maxFileSize = 5242880;

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // Read the image via FileReader API and save image result in state.
    reader.onload = function (e) {
      // Add the file name to the data URL
      let dataUrl = e.target.result;
      dataUrl = dataUrl.replace(';base64', `;name=${file.name};base64`);
      resolve({ file, dataUrl });
    };

    reader.readAsDataURL(file);
  });
};

export const fileSelected = async (e) => {
  if (!e.target.files || !e.target.files[0]) {
    notify({
      message: 'Invalid file selected',
      type: '10000',
    });
    return;
  }
  const file = e.target.files[0];
  if (!hasExtension(file.name)) {
    notify({
      message: 'Bad file extension',
      type: '10000',
    });
    return;
  }
  if (file.size > maxFileSize) {
    notify({
      message: 'Image size exceeds',
      type: '10000',
    });
    return;
  }

  const base64 = await readFile(file);
  return base64;
};
