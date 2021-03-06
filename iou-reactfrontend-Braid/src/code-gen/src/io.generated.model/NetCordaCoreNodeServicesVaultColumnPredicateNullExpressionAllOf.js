/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf model module.
 * @module io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf
 * @version 1.0.0
 */
class NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf {
    /**
     * Constructs a new <code>NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf</code>.
     * @alias module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf
     */
    constructor() { 
        
        NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf} The populated <code>NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf();

            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf.OperatorEnum} operator
 */
NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf.prototype['operator'] = undefined;





/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */
NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf['OperatorEnum'] = {

    /**
     * value: "IS_NULL"
     * @const
     */
    "IS_NULL": "IS_NULL",

    /**
     * value: "NOT_NULL"
     * @const
     */
    "NOT_NULL": "NOT_NULL"
};



export default NetCordaCoreNodeServicesVaultColumnPredicateNullExpressionAllOf;

