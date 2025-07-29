import { Launch } from "@/gql/graphql";
import { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

interface Props {
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  selectedLaunches: Array<Launch> | null;
  setSelectedLaunches: Dispatch<SetStateAction<Array<Launch> | null>>;
  setIsSelectedLaunchesDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export function SelectedLaunchesOverlay({
  setIsDrawerOpen,
  selectedLaunches,
  setSelectedLaunches,
  setIsSelectedLaunchesDialogOpen,
}: Props) {
  const t = useTranslations("Overlays.SelectedLaunches");

  if (!selectedLaunches) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div className="fixed bottom-0 left-0 right-0 bg-white w-full p-4">
          <div className="mx-auto max-w-screen-xl flex justify-between items-center flex-wrap gap-4">
            <p className="text-black">
              {t("amountSelected", { count: selectedLaunches.length })}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="default"
                onClick={() => setSelectedLaunches(null)}
              >
                {t("deselectAllButton")}
              </Button>
              <Button variant="secondary" onClick={() => setIsDrawerOpen(true)}>
                {t("seeSelectedButton")}
              </Button>
              {selectedLaunches.length > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setIsSelectedLaunchesDialogOpen(true)}
                >
                  {t("compareButton")}
                </Button>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
