import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

export enum AlcoholSalesCategory {
    ON_SALES = 'ON_SALES',
    OFF_SALES = 'OFF_SALES',
    ON_AND_OFF_SALES = 'ON_AND_OFF_SALES'
}

export enum ApplicationType {
    CONVERSION_FULL = 'CONVERSION_FULL',
    CONVERSION_PROVISIONAL = 'CONVERSION_PROVISIONAL',
    NEW = 'NEW',
    NEW_PROVISIONAL = 'NEW_PROVISIONAL'
}

export enum LicenseStatus {
    CURRENT = 'CURRENT',
    SURRENDERED = 'SURRENDERED',
    EXPIRED = 'EXPIRED',
    REVOKED = 'REVOKED',
    NOT_CONSIDERED = 'NOT_CONSIDERED',
    REFUSED = 'REFUSED',
    WITHDRAWN = 'WITHDRAWN',
    INPUT = 'INPUT', // Check these, they should mostly be withdrawn or refused
    INCOMPETENT = 'INCOMPETENT'
}

@Entity('premises_license')
export class PremisesLicense {

    @PrimaryColumn({ type: 'text', nullable: false, unique: true })
    uuid: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt?: Date;

    @Column({ type: 'date', nullable: false})
    dateReceived: Date;

    @Column({ type: 'enum', enum: AlcoholSalesCategory, nullable: false })
    status: AlcoholSalesCategory;

    @Column({ type: 'text', nullable: false, unique: true })
    licenseNumber: string;

    @Column({ type: 'enum', enum: ApplicationType, nullable: false })
    applicationType: ApplicationType;

    @Column({ type: 'text', nullable: false })
    applicantName: string;

    @Column({ type: 'text', nullable: false })
    premisesAddress: string;

    @Column({ type: 'date', nullable: true})
    dateOfDecision?: Date;

    @Column({ type: 'text', nullable: false })
    applicationDecisionRaw: string;

    @Column({ type: 'text', array: true, nullable: true })
    applicationDecisionDetails?: string[];

    @Column({ type: 'date', nullable: false })
    licensedFrom: Date;

    @Column({ type: 'date', nullable: true})
    licensedTo?: Date;

    @Column({ type: 'enum', enum: LicenseStatus, nullable: false})
    licenseStatus: LicenseStatus

    @Column({ type: 'text', nullable: true })
    commentsRaw?: string

    @Column({ type: 'text', array: true, nullable: true })
    commentsDetails?: string[]

    @Column({ type: 'boolean', nullable: false, default: false })
    membersClub: boolean

    @Column({ type: 'text', nullable: false})
    postcode: string

}