import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// const credentials = {
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
// };
//console.log("creds: "+ credentials.accessKeyId, credentials.secretAccessKey)

const credentials = {
  accessKeyId: 'AKIATX27PN2A7MB6SK6O',
  secretAccessKey: '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'
};

const dbClient = new DynamoDBClient({
  region: 'eu-north-1',
  credentials: credentials,
});

export const docClient = DynamoDBDocumentClient.from(dbClient);
