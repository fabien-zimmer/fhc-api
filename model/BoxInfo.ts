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
import { ErrorDto } from "./ErrorDto"

export class BoxInfo {
  constructor(json: JSON | any) {
    Object.assign(this as BoxInfo, json)
  }

  boxId?: string
  currentSize?: number
  error?: ErrorDto
  maxSize?: number
  nbrMessagesInStandBy?: number
  quality?: string
}