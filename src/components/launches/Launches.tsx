"use client";

import { launchesOptions } from "@/lib/getLaunches";
import { useSuspenseQuery } from "@tanstack/react-query";
import { LaunchCard } from "@/components/cards/LaunchCard";
import { SelectedLaunchesOverlay } from "../overlays/SelectedLaunchesOverlay";
import { SelectedLaunchesDrawer } from "../drawers/SelectedLaunchesDrawer";
import { SelectedLaunchesDialog } from "../dialogs/SelectedLaunchesDialog";
import { useSelectedLaunches } from "@/hooks/useSelectedLaunches";

export function Launches() {
  const { data } = useSuspenseQuery(launchesOptions);
  const {
    selectedLaunches,
    setSelectedLaunches,
    isSelectedLaunchesDrawerOpen,
    setIsSelectedLaunchesDrawerOpen,
    isSelectedLaunchesDialogOpen,
    setIsSelectedLaunchesDialogOpen,
  } = useSelectedLaunches();

  return (
    <div className="mt-4">
      <SelectedLaunchesDrawer
        isDrawerOpen={isSelectedLaunchesDrawerOpen}
        setIsDrawerOpen={setIsSelectedLaunchesDrawerOpen}
        selectedLaunches={selectedLaunches}
        setSelectedLaunches={setSelectedLaunches}
        setIsSelectedLaunchesDialogOpen={setIsSelectedLaunchesDialogOpen}
      />
      {!isSelectedLaunchesDrawerOpen && (
        <SelectedLaunchesOverlay
          setIsDrawerOpen={setIsSelectedLaunchesDrawerOpen}
          selectedLaunches={selectedLaunches}
          setSelectedLaunches={setSelectedLaunches}
          setIsSelectedLaunchesDialogOpen={setIsSelectedLaunchesDialogOpen}
        />
      )}
      <SelectedLaunchesDialog
        isSelectedLaunchesDialogOpen={isSelectedLaunchesDialogOpen}
        setIsSelectedLaunchesDialogOpen={setIsSelectedLaunchesDialogOpen}
        selectedLaunches={selectedLaunches}
      />
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {data.launches?.map((launch) => (
          <LaunchCard
            key={launch?.id}
            launch={launch}
            selectedLaunches={selectedLaunches}
            setSelectedLaunches={setSelectedLaunches}
          />
        ))}
      </ul>
    </div>
  );
}
