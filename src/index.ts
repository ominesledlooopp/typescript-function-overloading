export { amazing_types } from './lib/amazing_types.js'

// **overloading definitions.**
/**
 * Full signature for {amazing_types} function.
 *
 * @param name {string} - say your name.
 * @param [quote] {string} - tell us your favorite quote.
 * @param [cb] {()=>string} - express your self with a call back returning a string.
 */
declare function amazing_types( name: string, quote?: string, cb?: () => string ): Promise<string>;
/**
 * Overload for {amazing_types} function.
 *
 * {quote} parameter is now required.
 *
 * {cb} parameter is now ignored.
 *
 * @param name {string} - say your name.
 * @param quote {string} - tell us your favorite quote.
 */
declare function amazing_types( name: string, quote: string ): Promise<string>;
/**
 * Overload for {amazing_types} function.
 *
 * {quote} parameter is now ignored.
 *
 * {cb} parameter is now required.
 *
 * @param name {string} - say your name.
 * @param cb {()=>string} - express your self with a call back returning a string.
 */
declare function amazing_types( name: string, cb: () => string ): Promise<string>;
/**
 * Overload for {amazing_types} function.
 *
 * {quote} parameter is now ignored.
 *
 * {cb} parameter is now ignored.
 *
 * @param name {string} - say your name.
 */
declare function amazing_types( name: string ): Promise<string>;

/**
 * Original signature typescript.
 */
declare function amazing_types(...params: TFO.params): Promise<string>;