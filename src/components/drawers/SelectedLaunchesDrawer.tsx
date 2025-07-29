"use client";

import { Launch } from "@/gql/graphql";
import { Dispatch, SetStateAction } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { LaunchCard } from "@/components/cards/LaunchCard";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  selectedLaunches: Array<Launch> | null;
  setSelectedLaunches: Dispatch<SetStateAction<Array<Launch> | null>>;
  setIsSelectedLaunchesDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export function SelectedLaunchesDrawer({
  isDrawerOpen,
  setIsDrawerOpen,
  selectedLaunches,
  setSelectedLaunches,
  setIsSelectedLaunchesDialogOpen,
}: Props) {
  const t = useTranslations("Drawers.SelectedLaunches");

  return (
    <Drawer
      open={isDrawerOpen}
      onOpenChange={setIsDrawerOpen}
      direction="right"
    >
      <DrawerContent className="z-1000">
        <div className="flex-1 overflow-y-auto">
          <DrawerHeader>
            <DrawerTitle>{t("selectedLaunchesTitle")}</DrawerTitle>
            <DrawerDescription>
              {t("selectedLaunchesDescription")}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-2 px-4">
            {selectedLaunches &&
              selectedLaunches.length > 0 &&
              selectedLaunches.map((launch) => (
                <LaunchCard
                  key={launch.id}
                  launch={launch}
                  selectedLaunches={selectedLaunches}
                  setSelectedLaunches={setSelectedLaunches}
                />
              ))}
          </div>
        </div>
        <div className="bg-background border-t">
          <DrawerFooter className="w-full">
            <Button onClick={() => setIsSelectedLaunchesDialogOpen(true)}>
              {t("compareLaunches")}
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">{t("cancelButton")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
