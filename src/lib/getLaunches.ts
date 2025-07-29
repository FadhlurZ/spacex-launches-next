import { queryOptions } from "@tanstack/react-query";
import { graphql } from "@/gql/gql";
import request from "graphql-request";

const launchesQuery = graphql(`
  query Launches {
    launches {
      details
      id
      is_tentative
      launch_date_local
      launch_date_unix
      launch_date_utc
      launch_site {
        site_id
        site_name
        site_name_long
      }
      launch_success
      launch_year
      links {
        article_link
        flickr_images
        mission_patch
        mission_patch_small
        presskit
        video_link
        wikipedia
      }
      mission_id
      mission_name
      rocket {
        rocket_name
        rocket_type
        rocket {
          mass {
            kg
          }
          first_stage {
            fuel_amount_tons
          }
          second_stage {
            fuel_amount_tons
          }
          payload_weights {
            kg
          }
        }
      }
      static_fire_date_unix
      static_fire_date_utc
      tentative_max_precision
      upcoming
    }
  }
`);

export const launchesOptions = queryOptions({
  queryKey: ["launches"],
  queryFn: async () =>
    request(
      process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL || "",
      launchesQuery,
      {}
    ),
});
