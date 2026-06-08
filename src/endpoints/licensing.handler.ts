import type { HonoRequest } from "hono";
import { ApiDataSource } from "../database";

export const get_licensing_handler = async (query: Record<string, string>) => {
    
}

export const licensingHandler = async (
    request: HonoRequest
): Promise<any> => {
    const api = new ApiDataSource()
    const dataSource = await api.connect()
    
    const httpMethod = request.method

    if(httpMethod === "GET") {
        return get_licensing_handler(request.query())
    } else if(httpMethod === "POST") {
        // Handle POST request
    }
}
