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

export type { IPersistentDrawer, IPersistentDrawerMenuItem };
