import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";
import { leafGreen, lightGreen } from "./colors";

const DRAWER_MENU = [
  {
    IconEle: DashboardIcon,
    content: "Dashboard",
    value: "Dashboard",
  },
  {
    IconEle: AccountBalanceWalletIcon,
    content: "Accounts",
    value: "Accounts",
  },
  {
    IconEle: AttachMoneyIcon,
    content: "Payroll",
    value: "Payroll",
  },
  {
    IconEle: DescriptionIcon,
    content: "Reports",
    value: "Reports",
  },
  {
    IconEle: PersonIcon,
    content: "Advisor",
    value: "Advisor",
  },
  {
    IconEle: ContactsIcon,
    content: "Contacts",
    value: "Contacts",
  },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const INVOICE_GRAPH_LABELS = [
  "Older",
  "Jan 01-08",
  "Jan 09-16",
  "Jan 17-24",
  "Jan 25-31",
  "Future",
];

const CASH_FLOW_GRAPH_LABELS = [
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
];

const CASH_FLOW_GRAPH_BADGES = [
  {
    color: leafGreen,
    label: "In",
  },
  {
    color: lightGreen,
    label: "Out",
  },
];

export {
  DRAWER_MENU,
  MONTHS,
  INVOICE_GRAPH_LABELS,
  CASH_FLOW_GRAPH_LABELS,
  CASH_FLOW_GRAPH_BADGES,
};
