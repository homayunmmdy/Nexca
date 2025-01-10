/**
 * @module ContributionsRouter
 * @description Handles HTTP requests related to contributions, including fetching all contributions and adding new contributions.
 */
import ContributionCash from "@/cash/ContributionCash";
import { ContributionModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

/**
 * @function GET
 * @description Fetches all contributions from the database or cache.
 * @returns {Promise<Response>} A promise that resolves to a response containing all contributions.
 * @example
 * // Example request to fetch all contributions
 * fetch('/api/contributions', { method: 'GET' });
 */

export async function GET() {
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.GetAll();
}

/**
 * @function POST
 * @description Adds a new contribution to the database and updates the cache.
 * @param {Request} req - The request object containing the contribution data to be added.
 * @returns {Promise<Response>} A promise that resolves to a response indicating success or failure.
 * @example
 * // Example request to add a new contribution
 * fetch('/api/contributions', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ amount: 100, contributor: 'Jane Doe', message: 'Thank you!' })
 * });
 */

export async function POST(req: Request) {
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.Post(req, "Your Contribution added successfully");
}
