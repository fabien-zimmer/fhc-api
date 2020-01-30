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
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { XHR } from "./XHR"
import * as models from "../model/models"

export class fhcConsultrncontrollerApi {
  host: string
  headers: Array<XHR.Header>
  fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  constructor(
    host: string,
    headers: any,
    fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  ) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
    this.fetchImpl = fetchImpl
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.Data) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }

  historyUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    ssin: string
  ): Promise<models.ConsultCurrentSsinResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/consultrn/history/{ssin}".replace("{ssin}", ssin + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.ConsultCurrentSsinResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  identifyUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    ssin: string
  ): Promise<models.SearchBySSINReplyDto | any> {
    let _body = null

    const _url =
      this.host + "/consultrn/{ssin}".replace("{ssin}", ssin + "") + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.SearchBySSINReplyDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  registerPersonUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    mid: models.PersonMid
  ): Promise<models.RegisterPersonResponseDto | any> {
    let _body = null
    _body = mid

    const _url = this.host + "/consultrn" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.RegisterPersonResponseDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  searchUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    dateOfBirth: number,
    lastName: string,
    firstName?: string,
    middleName?: string,
    gender?: string,
    tolerance?: number,
    limit?: number
  ): Promise<models.SearchPhoneticReplyDto | any> {
    let _body = null

    const _url =
      this.host +
      "/consultrn/{dateOfBirth}/{lastName}"
        .replace("{dateOfBirth}", dateOfBirth + "")
        .replace("{lastName}", lastName + "") +
      "?ts=" +
      new Date().getTime() +
      (firstName ? "&firstName=" + firstName : "") +
      (middleName ? "&middleName=" + middleName : "") +
      (gender ? "&gender=" + gender : "") +
      (tolerance ? "&tolerance=" + tolerance : "") +
      (limit ? "&limit=" + limit : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.SearchPhoneticReplyDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}