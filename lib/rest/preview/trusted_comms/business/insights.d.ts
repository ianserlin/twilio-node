/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import TrustedComms = require('../../TrustedComms');

/**
 * Initialize the InsightsList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param businessSid - A string that uniquely identifies this Business.
 */
declare function InsightsList(version: TrustedComms, businessSid: string): InsightsListInstance;

interface InsightsListInstance {
  impressionsRate?: object;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface InsightsPayload extends InsightsResource, Page.TwilioResponsePayload {
}

interface InsightsResource {
}

interface InsightsSolution {
  businessSid?: string;
}

export { InsightsList, InsightsListInstance, InsightsPayload, InsightsResource, InsightsSolution }
