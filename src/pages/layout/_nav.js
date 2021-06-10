export default [
  {
    "_tag": 'CSidebarNavItem',
    "name": 'Dashboard',
    "to":   '/dashboard',
    "icon": 'cil-home'
  },
  {
    "_tag": 'CSidebarNavDropdown',
    "name": 'Wallet',
    "route":'/wallet',
    "icon": 'cil-wallet',
    "_children": [
      {
        "_tag": 'CSidebarNavItem',
        "name": 'Overview',
        "icon": 'cil-wallet',
        "to":   '/wallet?type=overview',
      },
      {
        "_tag": 'CSidebarNavItem',
        "name": 'Spot',
        "icon": 'cil-wallet',
        "to":   '/wallet?type=spot',
      },
      {
        "_tag": 'CSidebarNavItem',
        "name": 'P2P',
        "icon": 'cil-wallet',
        "to":     '/wallet?type=p2p',
      },
      {
       "_tag": 'CSidebarNavItem',
       "name": 'Future',
       "icon": 'cil-wallet',
       "to":   '/wallet?type=future',
      },
    ],
  },
  {
    "_tag": 'CSidebarNavDropdown',
    "name": 'Transaction',
    "route": '/transaction',
    "icon": 'cib-bitcoin',
    "_children": [
      {
        "_tag": 'CSidebarNavItem',
        "name": 'Spot',
        "icon": 'cib-bitcoin',
        "to":   '/transaction?type=spot',
      },
      {
        "_tag": 'CSidebarNavItem',
        "name": 'P2P',
        "icon": 'cib-bitcoin',
        "to":   '/transaction?type=p2p',
      },
      {
        "_tag": 'CSidebarNavItem',
        "name": 'Future',
        "icon": 'cib-bitcoin',
        "to":   '/transaction?type=future',
      },
    ],
  },
  {
    "_tag": 'CSidebarNavItem',
    "name": 'Profile',
    "to":   '/profile',
    "icon": 'cib-opsgenie'
  }
]

