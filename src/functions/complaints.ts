import { Handler } from "@netlify/functions";
import { GoogleComplaintsRepository } from "../repository/google-sheets/GoogleComplaintsRepository";

const handler: Handler = async (event, context) => {
  // your server-side functionality

  const complaintRepo = new GoogleComplaintsRepository();
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST",
    "content-type": "application/json",
  };
  switch (event.httpMethod) {
    case "GET":
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(await complaintRepo.getComplaints()),
      };
    case "POST":
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(
          await complaintRepo.addComplaint(
            JSON.parse(event.body ? event.body : "")
          )
        ),
      };
    case "OPTIONS":
      return {
        statusCode: 204,
        headers,
      };
    default:
      return {
        statusCode: 500,
        body: "Method not implemented",
      };
  }
};

export { handler };
