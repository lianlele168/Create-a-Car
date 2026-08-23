import codes from "@/data/codes.json";
import config from "@/data/game.config.json";
import progressionPlans from "@/data/packs.json";
import vehicleBuilds from "@/data/player-cards.json";

export function getGameConfig() {
  return config;
}

export function getCodes() {
  return codes;
}

export function getActiveCodes() {
  return codes.filter((code) => code.status === "active");
}

export function getNeedsCheckCodes() {
  return codes.filter((code) => code.status === "needs-check");
}

export function getExpiredCodes() {
  return codes.filter((code) => code.status === "expired");
}

export function getCodeRewardTotals() {
  return getActiveCodes().reduce(
    (totals, code) => ({
      cash: totals.cash + code.cash,
      crates: totals.crates + code.crates,
      partsBoxes: totals.partsBoxes + code.partsBoxes,
    }),
    { cash: 0, crates: 0, partsBoxes: 0 },
  );
}

export function getVehicleBuilds() {
  return vehicleBuilds;
}

export function getProgressionPlans() {
  return progressionPlans;
}
