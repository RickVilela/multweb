<script setup>
import { computed } from 'vue'
import { mdiCashMinus, mdiCashPlus, mdiPlus, mdiTextBox, mdiAccount, mdiCashRegister, mdiPackageVariant } from '@mdi/js'
import CardBox from '@/components/CardBox.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import IconRounded from '@/components/IconRounded.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const icon = computed(() => {
  if (props.title === 'Nota Fiscal Eletrônica') {
    return {
      icon: mdiTextBox,
      color: 'info'
    }
  } else if (props.title === 'Contas a Receber') {
    return {
      icon: mdiCashPlus,
      color: 'success'
    }
  } else if (props.title === 'Contas a Pagar') {
    return {
      icon: mdiCashMinus,
      color: 'danger'
    }
  } else if (props.title === 'Cadastro de Clientes') {
    return {
      icon: mdiAccount,
      color: 'info'
    }
  } else if (props.title === 'Venda') {
    return {
      icon: mdiCashRegister,
      color: 'success'
    }
  }else if (props.title === 'Estoque') {
    return {
      icon: mdiPackageVariant,
      color: 'danger'
    }
  }

  return {
    icon: mdiTextBox,
    color: 'info'
  }
})
</script>

<template>
  <CardBox class="mb-6 last:mb-0">
    <BaseLevel>
      <BaseLevel type="justify-start">
        <IconRounded :icon="icon.icon" :color="icon.color" class="md:mr-6" />
        <div class="text-center space-y-1 md:text-left md:mr-6">
          <h4 class="text-xl">{{ title }}</h4>
          <p class="text-gray-500 dark:text-slate-400">
            <b>{{ description }}</b>
          </p>
        </div>
      </BaseLevel>
      <div class="text-center md:text-right space-y-2">

        <div>
          <IconRounded :icon="mdiPlus" :color="icon.color" class="md:mr-6" />
        </div>
      </div>
    </BaseLevel>
  </CardBox>
</template>
