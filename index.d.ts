// @ts-nocheck
/**
 * When we install the package from the private registry,
 * Typescript will complain about duplicate declaration of the types.
 * Use: @ts-nocheck to avoid this behaviour.
 */
/**
 * - “declare global” makes Types/Functions/Interfaces/Classes and so on
 * to be available throughout your codebase without the need for import/export statements.
 * It works great in conjunction with namespace to avoid naming conflicts.
 */
export declare global{
  export declare namespace TFO {
    export declare type params = OriginalSignature|NameCB|NameQuote;
  }
}

type OriginalSignature = [ name: string, quote?: string, cb?: () => string ];
type NameQuote = [name: string, quote: string];
type NameCB = [name: string, cb: ()=>string];
// **overloading definitions.**
/**
 * Full signature for {amazing_types} function.
 *
 * @param name {string} - say your name.
 * @param [quote] {string} - tell us your favorite quote.
 * @param [cb] {()=>string} - express your self with a call back returning a string.
 */
export declare function amazing_types( name: string, quote?: string, cb?: () => string ): Promise<string>;
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
export declare function amazing_types( name: string, quote: string ): Promise<string>;
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
export declare function amazing_types( name: string, cb: () => string ): Promise<string>;
/**
 * Overload for {amazing_types} function.
 *
 * {quote} parameter is now ignored.
 *
 * {cb} parameter is now ignored.
 *
 * @param name {string} - say your name.
 */
export declare function amazing_types( name: string ): Promise<string>;

/**
 * Original signature typescript.
 */
export declare function amazing_types(...params: TFO.params): Promise<string>;