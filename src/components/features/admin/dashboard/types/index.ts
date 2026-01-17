export type DashboardNavigationType = {
  name: string;
  href: string;
  icon?: React.ReactElement | string;
  children?: DashboardNavigationType[];
};
