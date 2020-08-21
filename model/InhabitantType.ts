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
import { GenderType } from "./GenderType"
import { NameType } from "./NameType"

export class InhabitantType {
  constructor(json: JSON | any) {
    Object.assign(this as InhabitantType, json)
  }

  birthDate?: string
  gender?: GenderType
  name?: NameType
  ssin?: string
}