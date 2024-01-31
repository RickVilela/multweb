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
        to: '/cadastro/fornecedor'
      },
      {
        label: 'Funcionários',
        to: '/cadastro/funcionario'
      },
      {
        label: 'Usuários',
        to: '/cadastro/usuario'
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



]
