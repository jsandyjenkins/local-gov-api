import { DataSource, Repository } from "typeorm";
import { PremisesLicense } from "../entities/premises-license.entity";

export class PremisesLicenseRepository {
    private repository: Repository<PremisesLicense>

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(PremisesLicense);
    }

    async getPremisesLicenses(): Promise<PremisesLicense[]> {
        const premisesLicenses = await this.repository.find();
        console.log('Got premises licenses', premisesLicenses);
        return premisesLicenses
    }
}