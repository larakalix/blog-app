import { GraphQLClient } from "graphql-request";

interface Props {
  query: any;
  variables: any;
  preview: boolean;
}

export function request({ query, variables, preview }: Props) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  // const key = process.env.NEXT_DATOCMS_API_TOKEN;
  const key = "ee469604eb94aed6b960eef4c0e861";

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${key}`,
    },
  });
  return client.request(query, variables);
}
