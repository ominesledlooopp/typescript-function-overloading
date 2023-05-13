import * as tttt from 'trythistrythat'
import * as types_exports from '../index.js'

export default async ( id: string ): Promise<void> => {

  let success: boolean = true
  let error: undefined | string = undefined
  const actual: string[] = Object.keys( types_exports )
  const expected: string[] = [ 'amazing_types' ]

  const result: Error | boolean = await tttt.deepStrictEqual( async (): Promise<TTTT.ResolversType> => {

    return tttt.resolvers( actual, expected )
  } )

  if ( result instanceof Error ) {
    error = result.message
    success = false
  }

  if ( success )
    tttt.end( id, true, 'index.js exports', expected.join( ', ' ) )
  else {
    tttt.failed( 'index.js exports' )
    tttt.end( id, false, 'index.js exports', error )
  }
}