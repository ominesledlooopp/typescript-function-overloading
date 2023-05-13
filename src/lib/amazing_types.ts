import params_type_check from './functions/params_type_check.js'

type resolve = ( value: string ) => void // Promise (resolve) => string
type reject = ( reason?: string ) => void // Promise (reject) => string

/**
 * - amazing_types function
 * It gets a rest parameter called `...param` and resolves as string.
 * It rejects if `...params` is undefined.
 */
export async function amazing_types( ...params: TFO.params ): Promise<string> {

  let message: boolean|string = true
  for await ( const type_check_result of params_type_check( params ) ){

    if( type_check_result?.constructor.name === 'String' ) {
      message = type_check_result
      break
    }
  }

  return new Promise( ( resolve: resolve, reject: reject ): void => {

    if( message.constructor.name === 'String' )
      reject( message as string )

    if ( params.length === 1 )
      resolve( `Hello, ${ params[ 0 ] }` )

    if ( params.length > 1 && params.length === 2 ) {

      if ( typeof params[ 1 ] === 'string' )
        resolve( `Hello, ${ params[ 0 ] }\nQuote: ${ params[ 1 ] }` )
      else if( typeof params[ 1 ] === 'function' )
        resolve( `Hello, ${ params[ 0 ] }\nExtra:\n ${ params[ 1 ]() }` )
    }
    else resolve( `Hello, ${ params[ 0 ] }\nQuote: ${ params[ 1 ] }\nExtra:\n ${ params[ 2 ]() }` )


  } )
}