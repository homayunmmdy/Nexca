/**
 * @file API route for handling contributions by ID.
 * @module /api/contributions/[id]
 */
import ContributionCash from "@/cash/ContributionCash";
import { ContributionModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

/**
 * Handles GET requests to fetch a contribution by its ID.
 * 
 * @param {Request} req - The incoming HTTP request.
 * @param {Object} params - The route parameters.
 * @param {string} params.id - The ID of the contribution to fetch.
 * @returns {Promise<Response>} A response containing the contribution data or an error message.
 */
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.Get(id);
}

/**
 * Handles PUT requests to update a contribution by its ID.
 * 
 * @param {Request} req - The incoming HTTP request containing the updated contribution data.
 * @param {Object} params - The route parameters.
 * @param {string} params.id - The ID of the contribution to update.
 * @returns {Promise<Response>} A response indicating success or failure of the update operation.
 */
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.PUT(id, req, "Contribue Update Successfully");
}

/**
 * Handles DELETE requests to delete a contribution by its ID.
 * 
 * @param {Request} req - The incoming HTTP request.
 * @param {Object} params - The route parameters.
 * @param {string} params.id - The ID of the contribution to delete.
 * @returns {Promise<Response>} A response indicating success or failure of the deletion operation.
 */
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.DELETE(id, "Contribute Deleted successfully");
}
