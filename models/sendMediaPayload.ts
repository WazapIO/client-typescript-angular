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
import { FileUpload } from './fileUpload';


export interface SendMediaPayload { 
    caption?: string;
    filename?: string;
    media_data: FileUpload;
    media_type: string;
    to: string;
}

