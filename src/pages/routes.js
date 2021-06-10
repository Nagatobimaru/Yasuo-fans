import React from 'react';

// const Toaster = React.lazy(() => import('./admin/sample/notifications/toaster/Toaster'));
// const Tables = React.lazy(() => import('./admin/sample/base/tables/Tables'));
//
// const Breadcrumbs = React.lazy(() => import('./admin/sample/base/breadcrumbs/Breadcrumbs'));
// const Cards = React.lazy(() => import('./admin/sample/base/cards/Cards'));
// const Carousels = React.lazy(() => import('./admin/sample/base/carousels/Carousels'));
// const Collapses = React.lazy(() => import('./admin/sample/base/collapses/Collapses'));
// const BasicForms = React.lazy(() => import('./admin/sample/base/forms/BasicForms'));
//
// const Jumbotrons = React.lazy(() => import('./admin/sample/base/jumbotrons/Jumbotrons'));
// const ListGroups = React.lazy(() => import('./admin/sample/base/list-groups/ListGroups'));
// const Navbars = React.lazy(() => import('./admin/sample/base/navbars/Navbars'));
// const Navs = React.lazy(() => import('./admin/sample/base/navs/Navs'));
// const Paginations = React.lazy(() => import('./admin/sample/base/paginations/Pagnations'));
// const Popovers = React.lazy(() => import('./admin/sample/base/popovers/Popovers'));
// const ProgressBar = React.lazy(() => import('./admin/sample/base/progress-bar/ProgressBar'));
// const Switches = React.lazy(() => import('./admin/sample/base/switches/Switches'));
//
// const Tabs = React.lazy(() => import('./admin/sample/base/tabs/Tabs'));
// const Tooltips = React.lazy(() => import('./admin/sample/base/tooltips/Tooltips'));
// const BrandButtons = React.lazy(() => import('./admin/sample/buttons/brand-buttons/BrandButtons'));
// const ButtonDropdowns = React.lazy(() => import('./admin/sample/buttons/button-dropdowns/ButtonDropdowns'));
// const ButtonGroups = React.lazy(() => import('./admin/sample/buttons/button-groups/ButtonGroups'));
// const Buttons = React.lazy(() => import('./admin/sample/buttons/buttons/Buttons'));
// const Charts = React.lazy(() => import('./admin/sample/charts/Charts'));
// const CoreUIIcons = React.lazy(() => import('./admin/sample/icons/coreui-icons/CoreUIIcons'));
// const Flags = React.lazy(() => import('./admin/sample/icons/flags/Flags'));
// const Brands = React.lazy(() => import('./admin/sample/icons/brands/Brands'));
// const Alerts = React.lazy(() => import('./admin/sample/notifications/alerts/Alerts'));
// const Badges = React.lazy(() => import('./admin/sample/notifications/badges/Badges'));
// const Modals = React.lazy(() => import('./admin/sample/notifications/modals/Modals'));
// const Colors = React.lazy(() => import('./admin/sample/theme/colors/Colors'));
// const Typography = React.lazy(() => import('./admin/sample/theme/typography/Typography'));
// const Widgets = React.lazy(() => import('./admin/sample/widgets/Widgets'));
//
const Dashboard = React.lazy(() => import('./dashboard/Dashboard'));
const Wallet = React.lazy(() => import('./wallet/Wallet'));
const Transaction = React.lazy(() => import('./transaction/Transaction'));
const Profile = React.lazy(() => import('./profile/Profile'));
// const Users = React.lazy(() => import('./admin/users/Users'));
// const User = React.lazy(() => import('./admin/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/wallet', name: 'Dashboard', component: Wallet },
  { path: '/transaction', name: 'Dashboard', component: Transaction },
  { path: '/profile', name: 'Dashboard', component: Profile }
  // { path: '/theme', name: 'Theme', component: Colors, exact: true },
  // { path: '/theme/colors', name: 'Colors', component: Colors },
  // { path: '/theme/typography', name: 'Typography', component: Typography },
  // { path: '/base', name: 'Base', component: Cards, exact: true },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', component: Cards },
  // { path: '/base/carousels', name: 'Carousel', component: Carousels },
  // { path: '/base/collapses', name: 'Collapse', component: Collapses },
  // { path: '/base/forms', name: 'Forms', component: BasicForms },
  // { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  // { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  // { path: '/base/navbars', name: 'Navbars', component: Navbars },
  // { path: '/base/navs', name: 'Navs', component: Navs },
  // { path: '/base/paginations', name: 'Paginations', component: Paginations },
  // { path: '/base/popovers', name: 'Popovers', component: Popovers },
  // { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  // { path: '/base/switches', name: 'Switches', component: Switches },
  // { path: '/base/tables', name: 'Tables', component: Tables },
  // { path: '/base/tabs', name: 'Tabs', component: Tabs },
  // { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/charts', name: 'Charts', component: Charts },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/brands', name: 'Brands', component: Brands },
  // { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
  // { path: '/users', exact: true,  name: 'Users', component: Users },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
