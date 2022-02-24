// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

const search = (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  console.log(data);

  res.statusCode = 200;
  res.json({ name: "Typora" });
};

export default search;
