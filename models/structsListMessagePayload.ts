/**
 * WhatsAPI Go
 * The V2 of WhatsAPI Go
 *
 * The version of the OpenAPI document: 2.0
 * Contact: manjit@sponsorbook.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { StructsListSection } from './structsListSection';


export interface StructsListMessagePayload { 
    button_text?: string;
    description?: string;
    multi_select?: boolean;
    sections: Array<StructsListSection>;
    text?: string;
    title?: string;
    to: string;
}
