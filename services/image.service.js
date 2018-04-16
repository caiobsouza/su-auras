var AWS = require('aws-sdk');

AWS.config.update({ region: process.env.AWS_REGION });

function ImageService(data) {

  this.uploadImage = function(cb) {
    var base64data = Buffer.from(data.image, 'base64');
    var s3 = new AWS.S3();

    const params = {
      Bucket: 'tw-su-auras',
      Key: data._id + '.jpg',
      Body: base64data,
      ACL: 'public-read'
    };

    s3.upload(params, function(err, response) {
      if (err) {
        console.log(err);
        cb(err);
      } else {
        data.image_url = response.Location;
        data.datetime = new Date();
        delete data.image;
        delete data.__v;
        delete data._id;
        cb(null, data);
      }
    });
  };
}

module.exports = ImageService;