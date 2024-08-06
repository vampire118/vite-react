const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
  const { username, password, email, birthday, address, position, education, bio } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const user = new User({ username, password: hashedPassword, email, birthday, address, position, education, bio });
    await user.save();
    res.send('User registered');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Generate token
    res.json({ token });
  } catch (err) {
    res.status(500).send('Error logging in');
  }
};

exports.updateUser = async (req, res) => {
  const { username, email, birthday, address, position, education, bio } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).send('User not found');

    user.username = username || user.username;
    user.email = email || user.email;
    user.birthday = birthday || user.birthday;
    user.address = address || user.address;
    user.position = position || user.position;
    user.education = education || user.education;
    user.bio = bio || user.bio;

    await user.save();
    res.send('User updated');
  } catch (err) {
    res.status(500).send('Error updating user');
  }
};

exports.forgotPassword = async (req, res) => {
  const { username, email, birthday } = req.body;
  try {
    const user = await User.findOne({ username, email, birthday });
    if (!user) return res.status(400).send('User not found or incorrect personal information');

    const newPassword = '111111';
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.send('Password has been reset');
  } catch (err) {
    res.status(500).send('Error resetting password');
  }
};