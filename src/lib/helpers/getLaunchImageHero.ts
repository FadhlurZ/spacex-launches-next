import { Launch } from "@/gql/graphql";

export function getLaunchHeroImage(launch: Launch) {
  return launch?.links?.flickr_images &&
    launch?.links?.flickr_images?.length > 0 &&
    launch?.links?.flickr_images[0] &&
    typeof launch?.links?.flickr_images[0] === "string"
    ? launch?.links?.flickr_images[0]
    : null;
}
