from storages.backends.s3boto3 import S3Boto3Storage
from django.conf import settings

class AvatarStorage(S3Boto3Storage):
    location = settings.AVATAR_LOCATION
    default_acl = 'public-read'
    file_overwrite = True
    def get_object_parameters(self, name):
            s3_object_params = {
                'CacheControl': 'max-age=2592000'
            }
            return {**s3_object_params}

class ProductStorage(S3Boto3Storage):
    location = settings.PRODUCT_LOCATION
    default_acl = 'public-read'
    file_overwrite = True
