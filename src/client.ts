import axios, { AxiosInstance } from "axios";
import { WorkSchema, Work } from "../schemas/work";

export class OpenLibraryClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "https://openlibrary.org",
      headers: {
        "User-Agent": "openlibrary.js",
      },
    });
  }

  private async request<T>(endpoint: string): Promise<T> {
    try {
      const res = await this.client.get<T>(endpoint);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status ?? 0;
        const message = error.response?.data?.message ?? "Unknown error";
        throw new Error(`Failed to fetch ${endpoint}: ${status} ${message}`);
      }
      throw new Error(`Failed to fetch ${endpoint}: ${error}`);
    }
  }

  async getWork(id: string): Promise<Work> {
    const data = await this.request<any>(`/works/${id}.json`);
    return WorkSchema.parse(data);
  }
}
