#!/usr/bin/env/ node

import app from '../maskoret';

const port = process.env.PORT || 8080;
app().listen(port, () => console.log(`Maof-maskoret app listening on port ${port}`));

export default app;
