import { docClient } from "@/dynamodb.config";
import { GetCommand, PutCommand, DeleteCommand, ScanCommand} from "@aws-sdk/lib-dynamodb";
import { interviewSchema } from "@/models/schemas/InterviewSchema";

const TABLE_NAME = "interviews";

const createOrUpdate = async (interview: interviewSchema) => {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: interview,
  });
  try {
    await docClient.send(command);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

const readAll = async () => {
  const command = new ScanCommand({
    TableName: TABLE_NAME,

  });
  try {
    const res = await docClient.send(command)
    return { success: true, data: res };
  } catch (error) {
    return { success: false, data: null };
  }
};

const readOne = async (id: string) => {
  const command = new GetCommand({
    TableName: TABLE_NAME,
    Key: {
      id: id,
    },
  });

  try {
    const { Item = {} } = await docClient.send(command);
    return { success: true, data: Item };
  } catch (error) {
    return { success: false, data: null, error };
  }
};


const deleteOne = async (id: string) => {
  const command = new DeleteCommand({
    TableName: TABLE_NAME,
    Key: {
      id: id,
    },
   })
  
  try {
    await docClient.send(command);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export { createOrUpdate, readAll, readOne, deleteOne };
