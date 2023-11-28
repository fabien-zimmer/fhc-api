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
import { XHR } from "./XHR"
import { Code } from "../model/Code"
import { Feedback } from "../model/Feedback"
import { GetPrescriptionStatusResult } from "../model/GetPrescriptionStatusResult"
import { Prescription } from "../model/Prescription"
import { PrescriptionFullWithFeedback } from "../model/PrescriptionFullWithFeedback"
import { PrescriptionRequest } from "../model/PrescriptionRequest"
import { PutVisionResult } from "../model/PutVisionResult"
import { RecipeKmehrmessageType } from "../model/RecipeKmehrmessageType"
import { UpdateFeedbackFlagResult } from "../model/UpdateFeedbackFlagResult"
import { PrescriptionListV4 } from "../model/PrescriptionListV4";

export class fhcRecipeApi {
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

  handleError(e: XHR.XHRError): never {
    throw e
  }

  /**
   *
   * @summary createPrescription
   * @param body prescription
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpQuality hcpQuality
   * @param hcpNihii hcpNihii
   * @param hcpSsin hcpSsin
   * @param hcpName hcpName
   */
  createPrescriptionUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin?: string,
    hcpName?: string,
    body?: PrescriptionRequest
  ): Promise<Prescription> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/recipe` +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + encodeURIComponent(String(hcpQuality)) : "") +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpName ? "&hcpName=" + encodeURIComponent(String(hcpName)) : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new Prescription(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary createPrescriptionV4
   * @param body prescription
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpQuality hcpQuality
   * @param hcpNihii hcpNihii
   * @param hcpSsin hcpSsin
   * @param hcpName hcpName
   */
  createPrescriptionV4UsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin?: string,
    hcpName?: string,
    body?: PrescriptionRequest
  ): Promise<Prescription> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/recipe/v4` +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + encodeURIComponent(String(hcpQuality)) : "") +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpName ? "&hcpName=" + encodeURIComponent(String(hcpName)) : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new Prescription(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary getGalToAdministrationUnit
   * @param galId galId
   */
  getGalToAdministrationUnitUsingGET(galId: string): Promise<Code> {
    let _body = null

    const _url =
      this.host + `/recipe/gal/${encodeURIComponent(String(galId))}` + "?ts=" + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new Code(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary getPrescriptionMessage
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param rid rid
   * @param hcpNihii hcpNihii
   * @param hcpQuality hcpQuality
   * @param hcpSsin hcpSsin
   * @param hcpName hcpName
   */
  getPrescriptionMessageUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    rid: string,
    hcpNihii: string,
    hcpQuality?: string,
    hcpSsin?: string,
    hcpName?: string
  ): Promise<RecipeKmehrmessageType> {
    let _body = null

    const _url =
      this.host +
      `/recipe/prescription/${encodeURIComponent(String(rid))}` +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (hcpQuality ? "&hcpQuality=" + encodeURIComponent(String(hcpQuality)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpName ? "&hcpName=" + encodeURIComponent(String(hcpName)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new RecipeKmehrmessageType(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary getPrescriptionStatus
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpNihii hcpNihii
   * @param rid rid
   */
  getPrescriptionStatusUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    rid: string
  ): Promise<GetPrescriptionStatusResult> {
    let _body = null

    const _url =
      this.host +
      `/recipe/${encodeURIComponent(String(rid))}/status` +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new GetPrescriptionStatusResult(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary getPrescription
   * @param rid rid
   */
  getPrescriptionUsingGET(rid: string): Promise<PrescriptionFullWithFeedback> {
    let _body = null

    const _url =
      this.host + `/recipe/${encodeURIComponent(String(rid))}` + "?ts=" + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new PrescriptionFullWithFeedback(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary listFeedbacks
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpQuality hcpQuality
   * @param hcpNihii hcpNihii
   * @param hcpSsin hcpSsin
   * @param hcpName hcpName
   */
  listFeedbacksUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpQuality?: string,
    hcpNihii?: string,
    hcpSsin?: string,
    hcpName?: string
  ): Promise<Array<Feedback>> {
    let _body = null

    const _url =
      this.host +
      `/recipe/all/feedbacks` +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + encodeURIComponent(String(hcpQuality)) : "") +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpName ? "&hcpName=" + encodeURIComponent(String(hcpName)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new Feedback(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary listOpenPrescriptionsByPatient
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpNihii hcpNihii
   * @param patientId patientId
   * @param hcpQuality hcpQuality
   * @param hcpSsin hcpSsin
   * @param hcpName hcpName
   */
  listOpenPrescriptionsByPatientUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    patientId: string,
    hcpQuality?: string,
    hcpSsin?: string,
    hcpName?: string
  ): Promise<Array<Prescription>> {
    let _body = null

    const _url =
      this.host +
      `/recipe/patient` +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (patientId ? "&patientId=" + encodeURIComponent(String(patientId)) : "") +
      (hcpQuality ? "&hcpQuality=" + encodeURIComponent(String(hcpQuality)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpName ? "&hcpName=" + encodeURIComponent(String(hcpName)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new Prescription(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary listPrescriptionsByPatient
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpNihii hcpNihii
   * @param patientId patientId
   * @param prescriberId
   * @param from
   * @param toInclusive
   * @param statuses
   * @param expiringFrom
   * @param expiringToInclusive
   * @param pageYear
   * @param pageMonth
   * @param pageNumber
   * @param hcpQuality hcpQuality
   * @param hcpSsin hcpSsin
   * @param hcpName hcpName
   */
  listPrescriptionsByPatientUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    patientId: string,
    prescriberId?: string,
    from?: number,
    toInclusive?: number,
    statuses?: string,
    expiringFrom?: number,
    expiringToInclusive?: number,
    pageYear?: number,
    pageMonth?: number,
    pageNumber?: number,
    hcpQuality?: string,
    hcpSsin?: string,
    hcpName?: string
  ): Promise<PrescriptionListV4> {
    let _body = null

    const _url =
      this.host +
      `/recipe/patient/all` +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (patientId ? "&patientId=" + encodeURIComponent(String(patientId)) : "") +
      (prescriberId ? "&prescriberId=" + encodeURIComponent(String(prescriberId)) : "") +
      (from ? "&from=" + encodeURIComponent(String(from)) : "") +
      (toInclusive ? "&toInclusive=" + encodeURIComponent(String(toInclusive)) : "") +
      (statuses ? "&statuses=" + encodeURIComponent(String(statuses)) : "") +
      (expiringFrom ? "&expiringFrom=" + encodeURIComponent(String(expiringFrom)) : "") +
      (expiringToInclusive
        ? "&expiringToInclusive=" + encodeURIComponent(String(expiringToInclusive))
        : "") +
      (pageYear !== undefined ? "&pageYear=" + encodeURIComponent(String(pageYear)) : "") +
      (pageMonth !== undefined ? "&pageMonth=" + encodeURIComponent(String(pageMonth)) : "") +
      (pageNumber !== undefined ? "&pageNumber=" + encodeURIComponent(String(pageNumber)) : "") +
      (hcpQuality ? "&hcpQuality=" + encodeURIComponent(String(hcpQuality)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpName ? "&hcpName=" + encodeURIComponent(String(hcpName)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (new PrescriptionListV4(doc.body)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary revokePrescription
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpNihii hcpNihii
   * @param rid rid
   * @param reason reason
   * @param hcpQuality hcpQuality
   * @param hcpSsin hcpSsin
   * @param hcpName hcpName
   */
  revokePrescriptionUsingDELETE(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    rid: string,
    reason: string,
    hcpQuality?: string,
    hcpSsin?: string,
    hcpName?: string
  ): Promise<any | Boolean> {
    let _body = null

    const _url =
      this.host +
      `/recipe/${encodeURIComponent(String(rid))}` +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (reason ? "&reason=" + encodeURIComponent(String(reason)) : "") +
      (hcpQuality ? "&hcpQuality=" + encodeURIComponent(String(hcpQuality)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpName ? "&hcpName=" + encodeURIComponent(String(hcpName)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("DELETE", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary sendNotification
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpQuality hcpQuality
   * @param hcpNihii hcpNihii
   * @param hcpSsin hcpSsin
   * @param hcpName hcpName
   * @param patientId patientId
   * @param executorId executorId
   * @param rid rid
   * @param text text
   */
  sendNotificationUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpName: string,
    patientId: string,
    executorId: string,
    rid: string,
    text: string
  ): Promise<any | Boolean> {
    let _body = null

    const _url =
      this.host +
      `/recipe/notify/${encodeURIComponent(String(rid))}` +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + encodeURIComponent(String(hcpQuality)) : "") +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpName ? "&hcpName=" + encodeURIComponent(String(hcpName)) : "") +
      (patientId ? "&patientId=" + encodeURIComponent(String(patientId)) : "") +
      (executorId ? "&executorId=" + encodeURIComponent(String(executorId)) : "") +
      (text ? "&text=" + encodeURIComponent(String(text)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary setVision
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param rid rid
   * @param vision vision
   * @param visionOthers visionOthers
   */
  setVisionUsingPUT(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    rid: string,
    vision: string,
    visionOthers?: string
  ): Promise<PutVisionResult> {
    let _body = null

    const _url =
      this.host +
      `/recipe/${encodeURIComponent(String(rid))}/vision` +
      "?ts=" +
      new Date().getTime() +
      (vision ? "&vision=" + encodeURIComponent(String(vision)) : "") +
      (vision ? "&visionOthers=" + encodeURIComponent(String(visionOthers)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new PutVisionResult(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary updateFeedbackFlag
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param rid rid
   * @param feedbackFlag feedbackFlag
   * @param hcpNihii hcpNihii
   * @param hcpQuality hcpQuality
   * @param hcpSsin hcpSsin
   * @param hcpName hcpName
   */
  updateFeedbackFlagUsingPUT(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    rid: string,
    feedbackFlag: boolean,
    hcpNihii: string,
    hcpQuality?: string,
    hcpSsin?: string,
    hcpName?: string
  ): Promise<UpdateFeedbackFlagResult> {
    let _body = null

    const _url =
      this.host +
      `/recipe/${encodeURIComponent(String(rid))}/feedback/${encodeURIComponent(
        String(feedbackFlag)
      )}` +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (hcpQuality ? "&hcpQuality=" + encodeURIComponent(String(hcpQuality)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpName ? "&hcpName=" + encodeURIComponent(String(hcpName)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new UpdateFeedbackFlagResult(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
