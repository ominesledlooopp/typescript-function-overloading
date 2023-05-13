import * as tttt from 'trythistrythat'
import { deepStrictEqual, rejects } from 'node:assert/strict'
import params_type_check from '../../../lib/functions/params_type_check.js'

export default async ( id: string ): Promise<void> => {

  const name: string = 'params type check for `name`'
  let message: string = 'rejects with:  \nparam \'name\' must have a type \'string\'. given type: \'Number\''
  let success: boolean = true

  const function_to_check = async () => {

    let message: boolean|string = true

    // @ts-ignore: @test
    for await ( const type_check_result of params_type_check( [ 3 ] ) ){

      if( type_check_result?.constructor.name === 'String' ) {
        message = type_check_result
        break
      }
    }

    return new Promise( ( resolve, reject ) => {
      if( message.constructor.name === 'String' )
        reject( message )

      resolve( true )
    } )
  }
  try {
    await rejects( function_to_check(), ( error ) => {

      deepStrictEqual( error, `param 'name' must have a type 'string'. given type: 'Number'` )

      return true
    } )
  }catch ( AssertionError ) {
    tttt.failed( name )
    success = false
    message = AssertionError.message
  }

  tttt.end( id, success, name, message )
}

export async function rejectsQuoteNotString ( id: string ): Promise<void> {

  const name: string = 'params type check for `quote`'
  let message: string = 'rejects with:  \nparam \'quote\' OR \'cb\' must have type \'string\' OR \'function\' respectively. given type: \'Object\''
  let success: boolean = true

  const function_to_check = async () => {

    let message: boolean|string = true

    // @ts-ignore: @test
    for await ( const type_check_result of params_type_check( [ 'John Doe', { quote: 'string' } ] ) ){

      if( type_check_result?.constructor.name === 'String' ) {
        message = type_check_result
        break
      }
    }

    return new Promise( ( resolve, reject ) => {
      if( message.constructor.name === 'String' )
        reject( message )

      resolve( true )
    } )
  }
  try {
    await rejects( function_to_check(), ( error ) => {

      deepStrictEqual( error, `param 'quote' OR 'cb' must have type 'string' OR 'function' respectively. given type: 'Object'` )

      return true
    } )
  }catch ( AssertionError ) {
    tttt.failed( name )
    success = false
    message = AssertionError.message
  }

  tttt.end( id, success, name, message )
}

export async function rejectsNameNotStringCB ( id: string ): Promise<void> {

  const name: string = 'params type check for `name` when given also cb.'
  let message: string = 'rejects with:  \nparam \'name\' must have a type \'string\'. given type: \'Function\''
  let success: boolean = true

  const function_to_check = async () => {

    let message: boolean|string = true

    // @ts-ignore: @test
    for await ( const type_check_result of params_type_check( [ () => '`name` must be a string', () => 'cb' ] ) ){

      if( type_check_result?.constructor.name === 'String' ) {
        message = type_check_result
        break
      }
    }

    return new Promise( ( resolve, reject ) => {
      if( message.constructor.name === 'String' )
        reject( message )

      resolve( true )
    } )
  }
  try {
    await rejects( function_to_check(), ( error ) => {

      deepStrictEqual( error, `param 'name' must have a type 'string'. given type: 'Function'` )

      return true
    } )
  }catch ( AssertionError ) {
    tttt.failed( name )
    success = false
    message = AssertionError.message
  }

  tttt.end( id, success, name, message )
}

export async function rejectsNameAll ( id: string ): Promise<void> {

  const name: string = 'params type check for `name` when given all params.'
  let message: string = 'rejects with:  \nparam \'name\' must have a type \'string\'. given type: \'Object\''
  let success: boolean = true

  const function_to_check = async () => {

    let message: boolean|string = true

    // @ts-ignore: @test
    for await ( const type_check_result of params_type_check( [ {}, 'quote', () => 'cb' ] ) ){

      if( type_check_result?.constructor.name === 'String' ) {
        message = type_check_result
        break
      }
    }

    return new Promise( ( resolve, reject ) => {
      if( message.constructor.name === 'String' )
        reject( message )

      resolve( true )
    } )
  }
  try {
    await rejects( function_to_check(), ( error ) => {

      deepStrictEqual( error, `param 'name' must have a type 'string'. given type: 'Object'` )

      return true
    } )
  }catch ( AssertionError ) {
    tttt.failed( name )
    success = false
    message = AssertionError.message
  }

  tttt.end( id, success, name, message )
}

export async function rejectsQuoteAll ( id: string ): Promise<void> {

  const name: string = 'params type check for `quote` when given all params.'
  let message: string = 'rejects with:  \nparam \'quote\' must have a type \'string\'. given type: \'Number\''
  let success: boolean = true

  const function_to_check = async () => {

    let message: boolean|string = true

    // @ts-ignore: @test
    for await ( const type_check_result of params_type_check( [ 'name', 2, () => 'cb' ] ) ){

      if( type_check_result?.constructor.name === 'String' ) {
        message = type_check_result
        break
      }
    }

    return new Promise( ( resolve, reject ) => {
      if( message.constructor.name === 'String' )
        reject( message )

      resolve( true )
    } )
  }
  try {
    await rejects( function_to_check(), ( error ) => {

      deepStrictEqual( error, `param 'quote' must have a type 'string'. given type: 'Number'` )

      return true
    } )
  }catch ( AssertionError ) {
    tttt.failed( name )
    success = false
    message = AssertionError.message
  }

  tttt.end( id, success, name, message )
}

export async function rejectsCBAll ( id: string ): Promise<void> {

  const name: string = 'params type check for `cb` when given all params.'
  let message: string = 'rejects with:  \nparam \'cb\' must have a type \'function\'. given type: \'String\''
  let success: boolean = true

  const function_to_check = async () => {

    let message: boolean|string = true

    // @ts-ignore: @test
    for await ( const type_check_result of params_type_check( [ 'name', 'quote', '() => string ]' ] ) ){

      if( type_check_result?.constructor.name === 'String' ) {
        message = type_check_result
        break
      }
    }

    return new Promise( ( resolve, reject ) => {
      if( message.constructor.name === 'String' )
        reject( message )

      resolve( true )
    } )
  }
  try {
    await rejects( function_to_check(), ( error ) => {

      deepStrictEqual( error, `param 'cb' must have a type 'function'. given type: 'String'` )

      return true
    } )
  }catch ( AssertionError ) {
    tttt.failed( name )
    success = false
    message = AssertionError.message
  }

  tttt.end( id, success, name, message )
}