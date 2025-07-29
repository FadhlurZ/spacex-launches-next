import { useEffect, useState } from "react";
import { Launch } from "@/gql/graphql";

export function useSelectedLaunches() {
  const [selectedLaunches, setSelectedLaunches] =
    useState<Array<Launch> | null>(null);
  const [isSelectedLaunchesDrawerOpen, setIsSelectedLaunchesDrawerOpen] = useState(false);
  const [isSelectedLaunchesDialogOpen, setIsSelectedLaunchesDialogOpen] = useState(false);

  useEffect(() => {
    setIsSelectedLaunchesDrawerOpen(!!selectedLaunches?.length);
  }, [selectedLaunches]);

  return {
    selectedLaunches,
    setSelectedLaunches,
    isSelectedLaunchesDrawerOpen,
    setIsSelectedLaunchesDrawerOpen,
    isSelectedLaunchesDialogOpen,
    setIsSelectedLaunchesDialogOpen,
  };
}
