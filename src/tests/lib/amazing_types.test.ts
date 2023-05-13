import * as tttt from 'trythistrythat'
import { amazing_types } from '../../index.js'
import { rejects, deepStrictEqual, doesNotReject } from 'node:assert/strict'

export default async ( id: string ): Promise<void> => {

  let success: boolean = true
  let error: string | undefined = undefined
  const actual: string = await amazing_types( 'John Doe', 'my fantastic quote', () => 'amazing_types are amazing' )
  const expected: string = 'Hello, John Doe\nQuote: my fantastic quote\nExtra:\n amazing_types are amazing'

  const result: Error | boolean = await tttt.deepStrictEqual( async (): Promise<TTTT.ResolversType> => {
    return tttt.resolvers( actual, expected )
  } )

  if ( result instanceof Error ) {
    error = result.message
    success = false
  }

  if ( success )
    tttt.end( id, true, 'all parameters', expected )
  else {
    tttt.failed( 'all parameters' )
    tttt.end( id, false, 'all parameters', error )
  }
}

export async function rejectsNotArgs( id: string ): Promise<void> {

  const name: string = 'amazing_test rejects because no arguments are given'
  let success: boolean = true
  let message: string = 'rejected with:\n`necessary one argument`'

  try{
    //@ts-ignore: @test
    await rejects( amazing_types(), ( err ): boolean => {
      deepStrictEqual( err, 'necessary one argument' )

      return true
    } )
  }catch ( AssertionError ) {
    tttt.failed( name )
    success = false
    message = AssertionError.message
  }

  tttt.end( id, success, name, message )
}

export async function resolveOnlyName( id: string ): Promise<void> {

  const name: string = 'amazing_test resolve only name argument'
  let success: boolean = true
  let message: string = 'resolve with:\n`Hello, John Doe`'

  try{
    await doesNotReject( amazing_types( 'John Doe'  ) )

    const result: string = await amazing_types( 'John Doe' )
    try{
      deepStrictEqual( result, 'Hello, John Doe' )
    }catch ( AssertionError ) {
      tttt.failed( name )
      success = false
      message = AssertionError.message
    }

  }catch ( AssertionError ) {
    tttt.failed( name )
    success = false
    message = AssertionError.message
  }

  tttt.end( id, success, name, message )
}

export async function resolveNameQuote( id: string ): Promise<void> {

  const name: string = 'amazing_test resolve name & quote arguments'
  let success: boolean = true
  let message: string = 'resolve with:\n`Hello, John Doe\nQuote: my fantastic quote`'

  try{
    await doesNotReject( amazing_types( 'John Doe', 'my fantastic quote'  ) )

    const result: string = await amazing_types( 'John Doe', 'my fantastic quote' )
    try{
      deepStrictEqual( result, 'Hello, John Doe\nQuote: my fantastic quote' )
    }catch ( AssertionError ) {
      tttt.failed( name )
      success = false
      message = AssertionError.message
    }

  }catch ( AssertionError ) {
    tttt.failed( name )
    success = false
    message = AssertionError.message
  }

  tttt.end( id, success, name, message )
}

export async function resolveNameCB( id: string ): Promise<void> {

  const name: string = 'amazing_test resolve name & cb arguments'
  let success: boolean = true
  let message: string = 'resolve with:\n`Hello, John Doe\nExtra:\n amazing_types are amazing`'

  try{
    await doesNotReject( amazing_types( 'John Doe', () => 'amazing_types are amazing'  ) )

    const result: string = await amazing_types( 'John Doe', () => 'amazing_types are amazing' )
    try{
      deepStrictEqual( result, 'Hello, John Doe\nExtra:\n amazing_types are amazing' )
    }catch ( AssertionError ) {
      tttt.failed( name )
      success = false
      message = AssertionError.message
    }

  }catch ( AssertionError ) {
    tttt.failed( name )
    success = false
    message = AssertionError.message
  }

  tttt.end( id, success, name, message )
}