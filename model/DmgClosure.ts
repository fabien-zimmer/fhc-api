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

import * as models from "./models"

export class DmgClosure {
  constructor(json: JSON | any) {
    Object.assign(this as DmgClosure, json)
  }
  appliesTo?: string

  beginOfNewDmg?: Date

  birthday?: Date

  commonOutput?: models.CommonOutput

  complete?: boolean

  deceased?: Date

  endOfPreviousDmg?: Date

  errors?: Array<models.MycarenetError>

  firstName?: string

  inss?: string

  io?: string

  lastName?: string

  mutuality?: string

  mycarenetConversation?: models.MycarenetConversation

  newHcParty?: models.HcpartyType

  newHcPartyId?: string

  previousHcParty?: models.HcpartyType

  reference?: string

  regNrWithMut?: string

  sex?: string

  valueHash?: string
}
