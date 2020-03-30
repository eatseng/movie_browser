/**
 * @flow
 * @relayHash 0b8635379209b5ce79c2cdf1c1ae9b53
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PopularMoviesQueryVariables = {||};
export type PopularMoviesQueryResponse = {|
  +popularMovies: ?$ReadOnlyArray<{|
    +id: string,
    +posterPath: string,
    +releaseDate: string,
    +title: string,
    +voteAverage: number,
  |}>
|};
export type PopularMoviesQuery = {|
  variables: PopularMoviesQueryVariables,
  response: PopularMoviesQueryResponse,
|};
*/


/*
query PopularMoviesQuery {
  popularMovies {
    id
    posterPath
    releaseDate
    title
    voteAverage
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "popularMovies",
    "storageKey": null,
    "args": null,
    "concreteType": "Movie",
    "plural": true,
    "selections": [
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
    "name": "PopularMoviesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PopularMoviesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "PopularMoviesQuery",
    "id": null,
    "text": "query PopularMoviesQuery {\n  popularMovies {\n    id\n    posterPath\n    releaseDate\n    title\n    voteAverage\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd03c6054d9b563ddb1d88f8a97aa5e92';

module.exports = node;
