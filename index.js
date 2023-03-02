const express = require('express');
const Parser = require('rss-parser');
const cors = require('cors');
const app = express();
const parser = new Parser();

app.use(cors());


app.get('/rss', async (req, res) => {
  try {
    const feed = await parser.parseURL('https://www.patreon.com/rss/cumtownRSS?auth=Sk3CTXwaTx0Aw_bT2PxSmYnN-st3sdxB');
    res.send(feed);
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong');
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});