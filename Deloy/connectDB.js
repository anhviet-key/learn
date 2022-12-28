const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/DB-odo', (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.');
  } else {
    console.log('Error in DB connection: ' + err);
  }
});
const Schema = mongoose.Schema;
//TODO: options One
const AccountSchema = new Schema(
  {
    UserName: String,
    Password: String,
    CoursesId: { type: Schema.Types.ObjectId, ref: 'Courses' },
  },
  {
    collection: 'Account',
  }
);
//TODO: options Two
const CourseSchema = new Schema(
  {
    Job: String,
    Teacher: { type: Schema.Types.ObjectId, ref: 'Account' },
    Age: Number,
    Address: Object,
  },
  {
    collection: 'Courses',
  }
);

const AccountModel = mongoose.model('Account', AccountSchema);
const CourseModel = mongoose.model('Courses', CourseSchema);

AccountModel.find({})
  .populate('CoursesId')
  .populate({
    path: 'CoursesId',
    populate: 'Teacher',
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
