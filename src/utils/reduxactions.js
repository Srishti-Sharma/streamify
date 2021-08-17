/**
 | -------------------------------------------------------------------------
 | REDUX ACTION UTILS
 | -------------------------------------------------------------------------
 | Helper methods for redux actions.
 |
 */

/**
 * Get Action Type with prefix
 *
 * @param {string} prefix
 */
export const getActionOptions = prefix => ({prefix, namespace: '/'});

export const createActionString = (prefix, type) => `${prefix}/${type}`;
