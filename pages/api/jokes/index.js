import { jokes } from "@/lib/data";

export default function handler(request, response) {
// hole Daten aus der DB

  return response.status(200).json(jokes);
}
