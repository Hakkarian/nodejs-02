const path = require("path");
const fs = require("fs").promises;
const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../", "../", "public", "avatars");


const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  const filename = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarDir, filename);
  const avatarURL = path.join('avatars', filename)
  console.log(avatarDir);
  console.log(`${avatarDir}/${filename}`);

  try {
    // Resize the image to 250x250 using Jimp library
    await fs.rename(tempUpload, resultUpload);
    const image = await Jimp.read(resultUpload);
    image.resize(250, 250);
    image.write(resultUpload);
  } catch (error) {
    console.error("Error occurred while resizing image:", error);
  }

  // Update the avatar URL in the user document in the database
  await User.findOneAndUpdate({ _id }, { avatarURL }, { runValidators: true });
  res.json({ avatarURL });
};

module.exports = {
  updateAvatar: ctrlWrapper(updateAvatar),
};
