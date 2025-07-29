/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query Launch($launchId: ID!) {\n    launch(id: $launchId) {\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_unix\n      launch_date_utc\n      launch_site {\n        site_id\n        site_name\n        site_name_long\n      }\n      launch_success\n      launch_year\n      links {\n        article_link\n        flickr_images\n        mission_patch\n        mission_patch_small\n        presskit\n        video_link\n        wikipedia\n      }\n      mission_id\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n        rocket {\n          mass {\n            kg\n          }\n          first_stage {\n            fuel_amount_tons\n          }\n          second_stage {\n            fuel_amount_tons\n          }\n          payload_weights {\n            kg\n          }\n        }\n      }\n      static_fire_date_unix\n      static_fire_date_utc\n      tentative_max_precision\n      upcoming\n    }\n  }\n": typeof types.LaunchDocument,
    "\n  query Launches {\n    launches {\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_unix\n      launch_date_utc\n      launch_site {\n        site_id\n        site_name\n        site_name_long\n      }\n      launch_success\n      launch_year\n      links {\n        article_link\n        flickr_images\n        mission_patch\n        mission_patch_small\n        presskit\n        video_link\n        wikipedia\n      }\n      mission_id\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n        rocket {\n          mass {\n            kg\n          }\n          first_stage {\n            fuel_amount_tons\n          }\n          second_stage {\n            fuel_amount_tons\n          }\n          payload_weights {\n            kg\n          }\n        }\n      }\n      static_fire_date_unix\n      static_fire_date_utc\n      tentative_max_precision\n      upcoming\n    }\n  }\n": typeof types.LaunchesDocument,
};
const documents: Documents = {
    "\n  query Launch($launchId: ID!) {\n    launch(id: $launchId) {\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_unix\n      launch_date_utc\n      launch_site {\n        site_id\n        site_name\n        site_name_long\n      }\n      launch_success\n      launch_year\n      links {\n        article_link\n        flickr_images\n        mission_patch\n        mission_patch_small\n        presskit\n        video_link\n        wikipedia\n      }\n      mission_id\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n        rocket {\n          mass {\n            kg\n          }\n          first_stage {\n            fuel_amount_tons\n          }\n          second_stage {\n            fuel_amount_tons\n          }\n          payload_weights {\n            kg\n          }\n        }\n      }\n      static_fire_date_unix\n      static_fire_date_utc\n      tentative_max_precision\n      upcoming\n    }\n  }\n": types.LaunchDocument,
    "\n  query Launches {\n    launches {\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_unix\n      launch_date_utc\n      launch_site {\n        site_id\n        site_name\n        site_name_long\n      }\n      launch_success\n      launch_year\n      links {\n        article_link\n        flickr_images\n        mission_patch\n        mission_patch_small\n        presskit\n        video_link\n        wikipedia\n      }\n      mission_id\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n        rocket {\n          mass {\n            kg\n          }\n          first_stage {\n            fuel_amount_tons\n          }\n          second_stage {\n            fuel_amount_tons\n          }\n          payload_weights {\n            kg\n          }\n        }\n      }\n      static_fire_date_unix\n      static_fire_date_utc\n      tentative_max_precision\n      upcoming\n    }\n  }\n": types.LaunchesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Launch($launchId: ID!) {\n    launch(id: $launchId) {\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_unix\n      launch_date_utc\n      launch_site {\n        site_id\n        site_name\n        site_name_long\n      }\n      launch_success\n      launch_year\n      links {\n        article_link\n        flickr_images\n        mission_patch\n        mission_patch_small\n        presskit\n        video_link\n        wikipedia\n      }\n      mission_id\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n        rocket {\n          mass {\n            kg\n          }\n          first_stage {\n            fuel_amount_tons\n          }\n          second_stage {\n            fuel_amount_tons\n          }\n          payload_weights {\n            kg\n          }\n        }\n      }\n      static_fire_date_unix\n      static_fire_date_utc\n      tentative_max_precision\n      upcoming\n    }\n  }\n"): (typeof documents)["\n  query Launch($launchId: ID!) {\n    launch(id: $launchId) {\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_unix\n      launch_date_utc\n      launch_site {\n        site_id\n        site_name\n        site_name_long\n      }\n      launch_success\n      launch_year\n      links {\n        article_link\n        flickr_images\n        mission_patch\n        mission_patch_small\n        presskit\n        video_link\n        wikipedia\n      }\n      mission_id\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n        rocket {\n          mass {\n            kg\n          }\n          first_stage {\n            fuel_amount_tons\n          }\n          second_stage {\n            fuel_amount_tons\n          }\n          payload_weights {\n            kg\n          }\n        }\n      }\n      static_fire_date_unix\n      static_fire_date_utc\n      tentative_max_precision\n      upcoming\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Launches {\n    launches {\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_unix\n      launch_date_utc\n      launch_site {\n        site_id\n        site_name\n        site_name_long\n      }\n      launch_success\n      launch_year\n      links {\n        article_link\n        flickr_images\n        mission_patch\n        mission_patch_small\n        presskit\n        video_link\n        wikipedia\n      }\n      mission_id\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n        rocket {\n          mass {\n            kg\n          }\n          first_stage {\n            fuel_amount_tons\n          }\n          second_stage {\n            fuel_amount_tons\n          }\n          payload_weights {\n            kg\n          }\n        }\n      }\n      static_fire_date_unix\n      static_fire_date_utc\n      tentative_max_precision\n      upcoming\n    }\n  }\n"): (typeof documents)["\n  query Launches {\n    launches {\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_unix\n      launch_date_utc\n      launch_site {\n        site_id\n        site_name\n        site_name_long\n      }\n      launch_success\n      launch_year\n      links {\n        article_link\n        flickr_images\n        mission_patch\n        mission_patch_small\n        presskit\n        video_link\n        wikipedia\n      }\n      mission_id\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n        rocket {\n          mass {\n            kg\n          }\n          first_stage {\n            fuel_amount_tons\n          }\n          second_stage {\n            fuel_amount_tons\n          }\n          payload_weights {\n            kg\n          }\n        }\n      }\n      static_fire_date_unix\n      static_fire_date_utc\n      tentative_max_precision\n      upcoming\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;