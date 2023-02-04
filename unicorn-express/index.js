const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
