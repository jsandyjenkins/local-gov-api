import { __decorate, __metadata } from "tslib";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
export var AlcoholSalesCategory;
(function (AlcoholSalesCategory) {
    AlcoholSalesCategory["ON_SALES"] = "ON_SALES";
    AlcoholSalesCategory["OFF_SALES"] = "OFF_SALES";
    AlcoholSalesCategory["ON_AND_OFF_SALES"] = "ON_AND_OFF_SALES";
})(AlcoholSalesCategory || (AlcoholSalesCategory = {}));
export var ApplicationType;
(function (ApplicationType) {
    ApplicationType["CONVERSION_FULL"] = "CONVERSION_FULL";
    ApplicationType["CONVERSION_PROVISIONAL"] = "CONVERSION_PROVISIONAL";
    ApplicationType["NEW"] = "NEW";
    ApplicationType["NEW_PROVISIONAL"] = "NEW_PROVISIONAL";
})(ApplicationType || (ApplicationType = {}));
export var LicenseStatus;
(function (LicenseStatus) {
    LicenseStatus["CURRENT"] = "CURRENT";
    LicenseStatus["SURRENDERED"] = "SURRENDERED";
    LicenseStatus["EXPIRED"] = "EXPIRED";
    LicenseStatus["REVOKED"] = "REVOKED";
    LicenseStatus["NOT_CONSIDERED"] = "NOT_CONSIDERED";
    LicenseStatus["REFUSED"] = "REFUSED";
    LicenseStatus["WITHDRAWN"] = "WITHDRAWN";
    LicenseStatus["INPUT"] = "INPUT";
    LicenseStatus["INCOMPETENT"] = "INCOMPETENT";
})(LicenseStatus || (LicenseStatus = {}));
let PremisesLicense = class PremisesLicense {
};
__decorate([
    PrimaryColumn({ type: 'text', nullable: false, unique: true }),
    __metadata("design:type", String)
], PremisesLicense.prototype, "uuid", void 0);
__decorate([
    CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PremisesLicense.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], PremisesLicense.prototype, "updatedAt", void 0);
__decorate([
    Column({ type: 'date', nullable: false }),
    __metadata("design:type", Date)
], PremisesLicense.prototype, "dateReceived", void 0);
__decorate([
    Column({ type: 'enum', enum: AlcoholSalesCategory, nullable: false }),
    __metadata("design:type", String)
], PremisesLicense.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', nullable: false, unique: true }),
    __metadata("design:type", String)
], PremisesLicense.prototype, "licenseNumber", void 0);
__decorate([
    Column({ type: 'enum', enum: ApplicationType, nullable: false }),
    __metadata("design:type", String)
], PremisesLicense.prototype, "applicationType", void 0);
__decorate([
    Column({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], PremisesLicense.prototype, "applicantName", void 0);
__decorate([
    Column({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], PremisesLicense.prototype, "premisesAddress", void 0);
__decorate([
    Column({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PremisesLicense.prototype, "dateOfDecision", void 0);
__decorate([
    Column({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], PremisesLicense.prototype, "applicationDecisionRaw", void 0);
__decorate([
    Column({ type: 'text', array: true, nullable: true }),
    __metadata("design:type", Array)
], PremisesLicense.prototype, "applicationDecisionDetails", void 0);
__decorate([
    Column({ type: 'date', nullable: false }),
    __metadata("design:type", Date)
], PremisesLicense.prototype, "licensedFrom", void 0);
__decorate([
    Column({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PremisesLicense.prototype, "licensedTo", void 0);
__decorate([
    Column({ type: 'enum', enum: LicenseStatus, nullable: false }),
    __metadata("design:type", String)
], PremisesLicense.prototype, "licenseStatus", void 0);
__decorate([
    Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PremisesLicense.prototype, "commentsRaw", void 0);
__decorate([
    Column({ type: 'text', array: true, nullable: true }),
    __metadata("design:type", Array)
], PremisesLicense.prototype, "commentsDetails", void 0);
__decorate([
    Column({ type: 'boolean', nullable: false, default: false }),
    __metadata("design:type", Boolean)
], PremisesLicense.prototype, "membersClub", void 0);
__decorate([
    Column({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], PremisesLicense.prototype, "postcode", void 0);
PremisesLicense = __decorate([
    Entity('premises_license')
], PremisesLicense);
export { PremisesLicense };
