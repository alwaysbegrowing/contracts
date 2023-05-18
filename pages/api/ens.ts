import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { address } = JSON.parse(req.body);
    try {
      const response = await fetch(
        "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
        {
          method: "POST",
          body: JSON.stringify({
            query: `query getRecords($id: String!) {
  domain(id: $id) {
    resolver {
      texts
    }
  }
}
`,
            variables: {
              id: address,
            },
            operationName: "getRecords",
          }),
        }
      ).then((response) => response.json());

      if (response?.data?.domain?.resolver?.texts) {
        res.status(200).json({
          texts: response.data.domain.resolver.texts,
        });
      } else {
        res
          .status(400)
          .json({ error: "Invalid response from the ENS subgraph" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error fetching data from the ENS subgraph" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
