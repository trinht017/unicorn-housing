const AWS = require('aws-sdk')
require('dotenv').config();

const s3Config = {
    apiVersion: '2006-03-01',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN,
    region: 'us-east-1',
}
const S3 = new AWS.S3(s3Config)

module.exports.uploadImages = (req, res, next) => {
    var imageUrls = []
    for(var i = 1; i <= req.body.numImages; i++){
        params = {
            Bucket: process.env.S3_POSTING_IMAGE_BUCKET,
            Key: `${req.body.postingID}-${i}.png`,
            ContentType: "image/png",
            Expires: 60 * 10
        }
        imageUrls.push(S3.getSignedUrl('putObject', params))
    }
    res.send(imageUrls);
}

module.exports.listImages = (req, res, next) => {
    params = {
        Bucket: process.env.S3_POSTING_IMAGE_BUCKET,
        Delimiter: '/',
        Prefix: req.params.id
    }
    images = S3.listObjects(params,
        function (err, data) {
            if (err){
                res.status(err.statusCode).send(err.message)
            } else {
                var imageUrls = [];
                for(var object of data["Contents"]) {
                    key = object["Key"]
                    params = { Bucket: process.env.S3_POSTING_IMAGE_BUCKET, Key: key, Expires: 60 * 60 * 2}
                    imageUrls.push(S3.getSignedUrl('getObject', params))
                }
                res.send(imageUrls)
            }
        })
}
