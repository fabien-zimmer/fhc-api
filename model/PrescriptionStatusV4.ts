/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
export class PrescriptionStatusV4 {
  constructor(json: JSON | any) {
    Object.assign(this as PrescriptionStatusV4, json)
  }

  code?: string
  messageCode?: string
  messages?: string[]
  prescriptionStatus?: string
  statusUpdater?: string
}
