
<script setup>
  defineProps({
  permissao_titulo: {
    type: String,
    default: null
  },
  permissao_name: {
    type: String,
    default: null
  }
})
</script>
<template>
    <StaticElement name="title" :attrs="{ class: 'bg-gray-200 text-center rounded-sm p-1 text-sm font-bold' }" tag="p" :content="permissao_titulo" :columns="2"/>
    <CheckboxElement :name="`${permissao_name}_cadastrar`" text="Cadastrar" :columns="2" />
    <CheckboxElement :name="`${permissao_name}_editar`" text="Editar" :columns="2" />
    <CheckboxElement :name="`${permissao_name}_deletar`" text="Deletar" :columns="2" />
    <CheckboxElement :name="`${permissao_name}_imprimir`" text="Imprimir" :columns="2" />
    <CheckboxElement :name="`${permissao_name}_visualizar`" text="Visualizar" :columns="2" />
</template>
