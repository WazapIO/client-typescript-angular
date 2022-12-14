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


export interface TemplateButton { 
    /**
     * Make sure this is unique
     */
    button_id?: string;
    payload?: string;
    title: string;
    /**
     * Valid types are replyButton, urlButton & callButton
     */
    type: string;
}

