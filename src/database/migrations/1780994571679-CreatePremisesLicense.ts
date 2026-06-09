import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePremisesLicense1780994571679 implements MigrationInterface {
    name = 'CreatePremisesLicense1780994571679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."premises_license_status_enum" AS ENUM('ON_SALES', 'OFF_SALES', 'ON_AND_OFF_SALES')`);
        await queryRunner.query(`CREATE TYPE "public"."premises_license_applicationtype_enum" AS ENUM('CONVERSION_FULL', 'CONVERSION_PROVISIONAL', 'NEW', 'NEW_PROVISIONAL')`);
        await queryRunner.query(`CREATE TYPE "public"."premises_license_licensestatus_enum" AS ENUM('CURRENT', 'SURRENDERED', 'EXPIRED', 'REVOKED', 'NOT_CONSIDERED', 'REFUSED', 'WITHDRAWN', 'INPUT', 'INCOMPETENT')`);
        await queryRunner.query(`CREATE TABLE "premises_license" ("uuid" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "dateReceived" date NOT NULL, "status" "public"."premises_license_status_enum" NOT NULL, "licenseNumber" text NOT NULL, "applicationType" "public"."premises_license_applicationtype_enum" NOT NULL, "applicantName" text NOT NULL, "premisesAddress" text NOT NULL, "dateOfDecision" date, "applicationDecisionRaw" text NOT NULL, "applicationDecisionDetails" text array, "licensedFrom" date NOT NULL, "licensedTo" date, "licenseStatus" "public"."premises_license_licensestatus_enum" NOT NULL, "commentsRaw" text, "commentsDetails" text array, "membersClub" boolean NOT NULL DEFAULT false, "postcode" text NOT NULL, CONSTRAINT "UQ_406548b8dc2f6b91992b941bb9c" UNIQUE ("licenseNumber"), CONSTRAINT "PK_95b648e47faa66fa9abb4dc3c3e" PRIMARY KEY ("uuid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "premises_license"`);
        await queryRunner.query(`DROP TYPE "public"."premises_license_licensestatus_enum"`);
        await queryRunner.query(`DROP TYPE "public"."premises_license_applicationtype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."premises_license_status_enum"`);
    }

}
