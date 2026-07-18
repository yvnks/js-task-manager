const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://jjyankson19_db_user:KQVPV7thWxlSRabM@clusterfreetier.oxfbhyt.mongodb.net/TaskManager?appName=ClusterFreeTier';

const init = async () => {
  try {
    const response = await mongoose.connect(connectionString);
    console.log('Connected to db successfully.');
  } catch (error) {
    console.log(error);
  }
};

init();
