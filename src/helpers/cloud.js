import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
import Util from '../helpers/utils';

dotenv.config();
cloudinary.v2;
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});
export const uploadToCloud = async (file, res) => {
  try {
    const profilePicture = await cloudinary.uploader.upload(file.path, {
      folder: 'Barefoot',
      use_filename: true,
    });
    return profilePicture;
  } catch (error) {
    util.setError(500, err.message);
    return util.send(res);
  }
};