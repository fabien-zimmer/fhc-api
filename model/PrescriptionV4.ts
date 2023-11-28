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
import { PrescriberV4 } from "./PrescriberV4";

export class PrescriptionV4 {
  constructor(json: JSON | any) {
    Object.assign(this as PrescriptionV4, json)
  }

  date?: number
  encryptedContent?: string
  encryptionKey?: string
  prescriber?: PrescriberV4
  rid?: string
  status?: string
  validUntil?: number
  visionOtherPrescribers?: string
}
