class Product < ApplicationRecord
    mount_uploader :video, AvatarUploader
end
