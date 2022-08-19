import { Handler } from "@netlify/functions";
import { GoogleComplaintsRepository } from "../repository/google-sheets/GoogleComplaintsRepository";

const handler: Handler = async (event, context) => {
  // your server-side functionality

  const complaintRepo = new GoogleComplaintsRepository();
  switch (event.httpMethod) {
    case "GET":
      return {
        statusCode: 200,
        body: JSON.stringify(await complaintRepo.getComplaints()),
      };
    case "POST":
      return {
        statusCode: 201,
        body: JSON.stringify(
          await complaintRepo.addComplaint(
            JSON.parse(event.body ? event.body : "")
          )
        ),
      };
    default:
      return {
        statusCode: 500,
        body: "Method not implemented",
      };
  }
};

export { handler };
