import app from './app';
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

setTimeout(() => {
  process.exit(0);
}, 60 * 60 * 1000);