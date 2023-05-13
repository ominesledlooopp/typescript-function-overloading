export default async function* params_type_check( params: TFO.params ): AsyncGenerator<boolean|string, void, void>{

  if ( params.length < 1 )
    yield 'necessary one argument'

  if( params.length === 1 )
    yield params[ 0 ]?.constructor.name === 'String' ? true : `param 'name' must have a type 'string'. given type: '${params[ 0 ]?.constructor.name}'`

  if( params.length === 2 ) {

    if ( params[ 0 ]?.constructor.name !== 'String' )
      yield `param 'name' must have a type 'string'. given type: '${ params[ 0 ]?.constructor.name }'`

    if ( params[ 1 ]?.constructor.name !== 'String' &&  params[ 1 ]?.constructor.name !== 'Function' )
      yield `param 'quote' OR 'cb' must have type 'string' OR 'function' respectively. given type: '${ params[ 1 ]?.constructor.name }'`
  }

  if( params.length === 3 ){

    if ( params[ 0 ]?.constructor.name !== 'String' )
      yield `param 'name' must have a type 'string'. given type: '${ params[ 0 ]?.constructor.name }'`

    if ( params[ 1 ]?.constructor.name !== 'String' )
      yield `param 'quote' must have a type 'string'. given type: '${ params[ 1 ]?.constructor.name }'`

    if ( params[ 2 ]?.constructor.name !== 'Function' )
      yield `param 'cb' must have a type 'function'. given type: '${ params[ 2 ]?.constructor.name }'`
  }

  yield true
}