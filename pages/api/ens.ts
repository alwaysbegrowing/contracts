import { NextApiRequest, NextApiResponse } from "next";
import { getAddress, resolveAddress } from "ethers";

const mockData = {
  resolver: {
    texts: ["10", "2940", "3019", "930"],
    contracts: [
      "0x2e2a42fbe7c7e2ffc031baf7442dbe1f8957770a",
      "0xc13eDA6bFF669b3858650bc34Dd8802eF93D31E9",
    ],
  },
};

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
    name
    isMigrated
    createdAt
    resolver {
      texts
      coinTypes
      contentHash
      addr {
        id
      }
    }
    id
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
