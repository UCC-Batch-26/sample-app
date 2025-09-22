import { Sample } from '#modules/samples/models/sample.js';
import { log } from '#utils/log.js';

export async function deleteSample(req, res) {
  const { id } = req.params;
  try {
    await Sample.findByIdAndDelete(id).orFail();

    return res.status(204);
  } catch (error) {
    log('getSample', 'Unable to delete Sample:', error);

    let statusCode = 400;

    if (error.name === 'DocumentNotFoundError') {
      statusCode = 404;
    }

    return res.status(statusCode).json({
      error: error?.message ?? 'Unable to delete Sample',
    });
  }
}
