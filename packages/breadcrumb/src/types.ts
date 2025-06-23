export interface BreadcrumbItem {
  title: string;
  href?: string;
  icon?: React.ComponentType;
  current?: boolean;
}
