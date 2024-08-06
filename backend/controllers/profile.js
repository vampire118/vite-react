const User = require('../models/user');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id, '-password'); // Exclude password from the response
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
