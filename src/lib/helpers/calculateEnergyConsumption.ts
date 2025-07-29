import { Launch } from "@/gql/graphql";

const FUEL_MASS_WEIGHT = 15;
const FUEL_ENERGETIC_VALUE = 1.35e7;

/**
 * This method is used to calculate an estimated energy consumption for a launch
 *
 * NOTE: The payload of a launch is not included in the total mass calculation
 * @param launch
 * @returns Calculated energy consumption in Joules
 */
export function calculateEnergyConsumption(launch: Launch) {
  const rocketMass = launch.rocket?.rocket?.mass?.kg
    ? launch.rocket?.rocket?.mass.kg
    : 0;
  const fuelMass =
    (launch.rocket?.rocket?.first_stage?.fuel_amount_tons
      ? launch.rocket?.rocket?.first_stage?.fuel_amount_tons * 1000
      : 0) +
    (launch.rocket?.rocket?.second_stage?.fuel_amount_tons
      ? launch.rocket?.rocket?.second_stage?.fuel_amount_tons * 1000
      : 0);

  // I have not added the payload mass to the total mass
  const totalMass = rocketMass + fuelMass;

  // It costs about 15 kg of fuel bring 1 kg of mass to the Lower Earth Orbit
  const fuelNeeded = FUEL_MASS_WEIGHT * totalMass;

  // Fuel has an energetic value of 1.35*10^7 Joules / kg
  const amountOfEnergyNeeded = FUEL_ENERGETIC_VALUE * fuelNeeded;

  return amountOfEnergyNeeded;
}
