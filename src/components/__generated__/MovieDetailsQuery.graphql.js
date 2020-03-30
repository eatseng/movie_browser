/**
 * @flow
 * @relayHash e2e5c57040f0ff9147fe8048cae1d9ae
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MovieDetailsQueryVariables = {|
  id: number
|};
export type MovieDetailsQueryResponse = {|
  +movie: ?{|
    +backdropPath: string,
    +genres: ?$ReadOnlyArray<string>,
    +id: string,
    +overview: string,
    +posterPath: string,
    +releaseDate: string,
    +runtime: number,
    +tagline: string,
    +title: string,
    +voteAverage: number,
  |}
|};
export type MovieDetailsQuery = {|
  variables: MovieDetailsQueryVariables,
  response: MovieDetailsQueryResponse,
|};
*/


/*
query MovieDetailsQuery(
  $id: Int!
) {
  movie(id: $id) {
    backdropPath
    genres
    id
    overview
    posterPath
    releaseDate
    runtime
    tagline
    title
    voteAverage
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "movie",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "MovieDetails",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "backdropPath",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "genres",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "overview",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "posterPath",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "releaseDate",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "runtime",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "tagline",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "voteAverage",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MovieDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MovieDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "MovieDetailsQuery",
    "id": null,
    "text": "query MovieDetailsQuery(\n  $id: Int!\n) {\n  movie(id: $id) {\n    backdropPath\n    genres\n    id\n    overview\n    posterPath\n    releaseDate\n    runtime\n    tagline\n    title\n    voteAverage\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8e6aaf0ec488dbf2d714169616b64f10';

module.exports = node;
