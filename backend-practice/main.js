new Promise((resolve) => {
  console.log('First step');
  resolve();
}).then((resolve) => {
  console.log('Next step');
  resolve();
});
