import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IPersistentDrawerMenuItem {
  IconEle: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  content: string;
  value: string;
}

interface IPersistentDrawer {
  menuItems: IPersistentDrawerMenuItem[];
}

type TDimensions = {
  width: undefined | number;
  height: undefined | number;
};

export type { IPersistentDrawer, IPersistentDrawerMenuItem, TDimensions };
