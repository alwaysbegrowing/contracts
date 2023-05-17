import { NextApiRequest, NextApiResponse } from "next";

const ALCHEMY_API_KEY = "fieltHTgL7ziK_257vD8V92R5qwsD19B";

const ethereumHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { method, params } = JSON.parse(req.body);
    try {
      const response = await fetch(
        `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method,
            params,
          }),
        }
      ).then((response) => response.json());
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "Error fetching data from Ethereum network" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default ethereumHandler;
