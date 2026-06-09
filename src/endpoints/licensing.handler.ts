import type { HonoRequest } from "hono";
import { ApiDataSource } from "../database";
import { PremisesLicenseRepository } from "../database/repositories/premises-license.repository";

interface LicensingDependencies {
    premisesLicenseRepository: PremisesLicenseRepository
}

export const get_licensing_handler = async (query: Record<string, string>, { premisesLicenseRepository }: LicensingDependencies) => {
    console.log(query)
    const premisesLicenses = await premisesLicenseRepository.getPremisesLicenses();
    return { premisesLicenses: premisesLicenses };
}

export const licensingHandler = async (
    request: HonoRequest
): Promise<any> => {
    const api = new ApiDataSource()
    const dataSource = await api.connect()

    const premisesLicenseRepository = new PremisesLicenseRepository(dataSource)
    
    const httpMethod = request.method

    if(httpMethod === "GET") {
        return get_licensing_handler(request.query(), {premisesLicenseRepository})
    } else if(httpMethod === "POST") {
        // Handle POST request
    }
}
