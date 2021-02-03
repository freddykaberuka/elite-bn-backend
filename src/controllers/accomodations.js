import accomodationService from '../services/accomodationServices';
// import { cloudinaryUploader } from '../helpers/cloudinaryUploader';
import Util from '../helpers/utils';

const util = new Util();

export default class Accomodations {
  static async createAccomodations(req, res) {
    try {
      // const { path } = req.files[0];
      // const image = await cloudinaryUploader(path);
      const accomodation = {
        name: req.body.name,
        description: req.body.description,
        location_id: req.body.location_id,
        facilities: req.body.facilities,
        roomSize: req.body.roomSize,
      };
      console.log(accomodation);
      const newAccomodation = await accomodationService.create(accomodation);
      util.setSuccess(201, 'You have successfully created an accomodation', newAccomodation);
      util.send(res);
    } catch (error) {
      util.setError(500, console.log(error));
      util.send(res);
    }
  }

  static async getAccomodations(req, res) {
    try {
      const accomodations = await accomodationService.getAccomodations();
      util.setSuccess(200, 'All available accomodations', accomodations);
      util.send(res);
    } catch (error) {
      util.setError(500, console.log(error));
      util.send(res);
    }
  }

  static async getAccomBylocatonId(req, res) {
    try {
      // eslint-disable-next-line camelcase
      const { location_id } = req.params;
      const accomodation = await accomodationService.findByProp({ location_id });
      util.setSuccess(200, 'Accomodation', accomodation);
      util.send(res);
    } catch (error) {
      util.setError(500, error);
      util.send(res);
    }
  }

  static async deleteAcoomodations(req, res) {
    try {
      const { accomodation } = req.params;
      const takeOutAccomodation = await accomodationService.deleteAccomodation(accomodation);
      if (takeOutAccomodation) {
        util.setSuccess(200, 'You deleted an accomodation');
        util.send(res);
      } else {
        util.setError(200, 'There is nothing to delete');
        util.send(res);
      }
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }

  static async updateAccomodation(req, res) {
    try {
      const { newUpdatedAccomodation } = req;
      const select = {
        id: req.params.accomodation
      };
      const updated = await accomodationService.updateAtt(newUpdatedAccomodation, select);
      if (updated) {
        util.setSuccess(200, 'You have successfuly updated an accomodation');
        util.send(res);
      }
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }
}
