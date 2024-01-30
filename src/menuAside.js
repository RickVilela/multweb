import {
  mdiAccountCircle,
  mdiMonitor,
  mdiApps,
  mdiLock,
  mdiAlertCircle,
  mdiAccount,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact
} from '@mdi/js'

export default [
  {
    to: '/dashboard',
    icon: mdiMonitor,
    label: 'Início'
  },
  {
    label: 'Cadastros',
    icon: mdiAccount,
    menu: [
      {
        label: 'Clientes',
        to: '/cadastro/cliente'
      },
      {
        label: 'Fornecedores',
        to: '/forms'
      }
    ]
  },
  {
    label: 'Processos',
    icon: mdiApps,
    menu: [
      {
        label: 'Nota Fiscal',
        to: '/forms'
      },
      {
        label: 'Venda',
        to: '/forms'
      },
      {
        label: 'Orçamento',
        to: '/forms'
      }
    ]
  },

  {
    to: '/tables',
    label: 'Tables',
    icon: mdiTable
  },
  {
    to: '/ui',
    label: 'UI',
    icon: mdiTelevisionGuide
  },
  {
    to: '/responsive',
    label: 'Responsive',
    icon: mdiResponsive
  },
  {
    to: '/',
    label: 'Styles',
    icon: mdiPalette
  },
  {
    to: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle
  },
  {
    to: '/login',
    label: 'Login',
    icon: mdiLock
  },
  {
    to: '/error',
    label: 'Error',
    icon: mdiAlertCircle
  },
  {
    label: 'Dropdown',
    icon: mdiViewList,
    menu: [
      {
        label: 'Item One'
      },
      {
        label: 'Item Two'
      }
    ]
  },

]
