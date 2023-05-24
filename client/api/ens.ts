const query = `query getRecords($id: String!) {
  domain(id: $id) {
    resolver {
      texts
    }
  }
}
`;

export async function getRecordsForHash(
  hash: string
): Promise<{ texts: any[] } | void> {
  try {
    const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
      {
        method: "POST",
        body: JSON.stringify({
          query,
          variables: {
            id: hash,
          },
          operationName: "getRecords",
        }),
      }
    ).then((response) => response.json());

    if (response?.data?.domain?.resolver?.texts) {
      return {
        texts: response.data.domain.resolver.texts,
      };
    } else {
      return console.error("Invalid response from the ENS subgraph");
    }
  } catch (error) {
    return console.error("Error fetching data from the ENS subgraph");
  }
}
