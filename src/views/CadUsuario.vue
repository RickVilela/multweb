<script setup>
import { reactive, ref } from 'vue'
import { mdiBallotOutline, mdiAccountEye, mdiAccountPlus } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import BaseButton from '@/components/BaseButton.vue'
import BtnSubmit from '@/components/BtnSubmit.vue'
import PermissionField from '@/components/PermissionField.vue'

const submit = () => {
  //
}

const formStatusCurrent = ref(0)

const formStatusOptions = ['info', 'success', 'danger', 'warning']

const formStatusSubmit = () => {
  formStatusCurrent.value = formStatusOptions[formStatusCurrent.value + 1]
    ? formStatusCurrent.value + 1
    : 0
}

const showForm = reactive({
  novoFornecedor: false,
});

const toggleForm = () => {
  showForm.novo = !showForm.novo;
};
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiBallotOutline" title="Cadastro de Usuário" main>
        <BaseButton v-if="!showForm.novo" @click="toggleForm" label="Novo Usuário" color="success" :icon="mdiAccountPlus"/>
        <BaseButton v-else @click="toggleForm" label="Ver Usuários" color="info" :icon="mdiAccountEye"/>
      </SectionTitleLineWithButton>

      <CardBox v-if="!showForm.novo" has-table>
        <TableSampleClients />
      </CardBox>

      <CardBox form v-if="showForm.novo" @submit.prevent="submit" >
        <Vueform>
          <template #empty>
            <FormTabs class="overflow-x-auto text-base sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
              <FormTab name="informacoes_principais" label="Informações Principais"
                :elements="['nome', 'email_acesso', 'senha_acesso', 'status_acesso', 'button_submit']"
                :columns="{ sm: 12, md: 6, lg: 4 }" />

              <FormTab name="permissoes" label="Permissões"
                :elements="['permissoes_list', 'button_submit']"
                :columns="{ sm: 12, md: 6, lg: 4 }" />
            </FormTabs>


            <FormElements>
              <!-- Início Informações Principais-->
                <TextElement name="nome" label="Nome" rules="required" :messages="{ required: 'Por favor, insira um nome' }" :columns="6" />

                <TextElement name="email_acesso" label="E-mail para Acesso" input-type="email" rules="required" :messages="{ required: 'Por favor, insira um e-mail' }" :columns="6" />

                <TextElement name="senha_acesso" label="Senha de Acesso" input-type="password" rules="required" :messages="{ required: 'Por favor, insira uma senha' }" :columns="6" />

                <SelectElement name="status_acesso" label="Status de Acesso" rules="required" :messages="{ required: 'Por favor, selecione uma Opção' }" default="Ativo" :native="false" :items="[
                  'Ativo',
                  'Inativo'
                ]" :columns="6" />
              <!-- Fim Informações Principais-->

              <!-- Início Permissões-->
              <GroupElement name="permissoes_list">
                <StaticElement :attrs="{ class: 'bg-teal-500 text-center rounded-sm p-1 text-white' }" tag="h3" content="Todos" />
                  <CheckboxElement name="todos" text="Marcar Todas Permissões"/>

                <StaticElement :attrs="{ class: 'bg-teal-500 text-center rounded-sm p-1 text-white' }" tag="h3" content="Cadastro" />
                  <StaticElement :attrs="{ class: 'bg-gray-400 text-center rounded-sm p-1 ' }" tag="p" content="Pessoas" />
                    <CheckboxElement name="todos_cliente" text="Marcar Todos" :columns="12"/>

                    <PermissionField permissao_titulo="Clientes" permissao_name="clientes"/>

                    <PermissionField permissao_titulo="Fornecedores" permissao_name="fornecedores"/>

                    <PermissionField permissao_titulo="Fabricantes" permissao_name="fabricantes"/>

                    <PermissionField permissao_titulo="Vendedores" permissao_name="vendedores"/>

                    <PermissionField permissao_titulo="Funcionários" permissao_name="funcionarios"/>

                    <PermissionField permissao_titulo="Usuários" permissao_name="usuarios"/>

                    <PermissionField permissao_titulo="Bancos" permissao_name="bancos"/>

                    <PermissionField permissao_titulo="Preço Individual / Cliente" permissao_name="preco"/>

                    <PermissionField permissao_titulo="Cargo" permissao_name="cargo"/>

                    <PermissionField permissao_titulo="Básico" permissao_name="basico"/>

                  <StaticElement :attrs="{ class: 'bg-gray-400 text-center rounded-sm p-1 ' }" tag="p" content="Produtos e Serviços" />
                    <CheckboxElement name="todos_produtos_servicos" text="Marcar Todos" :columns="12"/>

                      <PermissionField permissao_titulo="Produtos" permissao_name="produtos"/>

                      <PermissionField permissao_titulo="Matérias-Primas" permissao_name="materia_prima"/>

                      <PermissionField permissao_titulo="SubProdutos" permissao_name="sub_produtos"/>

                      <PermissionField permissao_titulo="Materiais Internos" permissao_name="materiais_internos"/>

                      <PermissionField permissao_titulo="Serviços" permissao_name="servicos"/>

                      <PermissionField permissao_titulo="Ativos Fixos" permissao_name="ativos_fixos"/>

                      <PermissionField permissao_titulo="Unidades de Medida" permissao_name="unidades_medida"/>

                      <PermissionField permissao_titulo="Marcas" permissao_name="marcas"/>

                  <StaticElement :attrs="{ class: 'bg-gray-400 text-center rounded-sm p-1 ' }" tag="p" content="Financeiro" />
                    <CheckboxElement name="todos_financeiro" text="Marcar Todos" :columns="12"/>

                      <PermissionField permissao_titulo="Tipo de Pagamento" permissao_name="tipo_pagamento"/>

                      <PermissionField permissao_titulo="Contas Bancárias" permissao_name="contas_bancarias"/>

                      <PermissionField permissao_titulo="Operações Bancárias" permissao_name="operacoes_bancarias"/>

                      <PermissionField permissao_titulo="Departamento" permissao_name="departamento"/>

                      <PermissionField permissao_titulo="Condições de Pagamento" permissao_name="condicoes"/>

                      <PermissionField permissao_titulo="Planos de Contas" permissao_name="plano_contas"/>

                      <PermissionField permissao_titulo="Centros de Custos" permissao_name="centro_custos"/>

                      <PermissionField permissao_titulo="Configuração de Boleto" permissao_name="config_boleto"/>

                  <StaticElement :attrs="{ class: 'bg-gray-400 text-center rounded-sm p-1 ' }" tag="p" content="Fiscal - Cadastros" />
                    <CheckboxElement name="todos_financeiro" text="Marcar Todos" :columns="12"/>

                      <PermissionField permissao_titulo="Finalidade" permissao_name="finalidade"/>

                      <PermissionField permissao_titulo="Perfil de Produtos" permissao_name="perfil_produtos"/>

                      <PermissionField permissao_titulo="Tipos de Notas Fiscais" permissao_name="tipos_nf"/>

                      <PermissionField permissao_titulo="CFOP" permissao_name="cfop"/>

                      <PermissionField permissao_titulo="CEST" permissao_name="cest"/>

                      <PermissionField permissao_titulo="NCM" permissao_name="ncm"/>

                      <PermissionField permissao_titulo="CSOSN" permissao_name="csosn"/>

                      <PermissionField permissao_titulo="ICMS Origem" permissao_name="icms_origem"/>

                      <PermissionField permissao_titulo="ICMS CST" permissao_name="icms_cst"/>

                      <PermissionField permissao_titulo="ICMS Modalidade BC" permissao_name="icms_modalidade_bc"/>

                      <PermissionField permissao_titulo="ICMS Modalidade ST" permissao_name="icms_modalidade_st"/>

                      <PermissionField permissao_titulo="IPI Operação" permissao_name="ipi_operacao"/>

                      <PermissionField permissao_titulo="ICMS Desoneração" permissao_name="icms_desoneracao"/>

                      <PermissionField permissao_titulo="ICMS Benef. Fiscal" permissao_name="icms_benef_fiscal"/>

                      <PermissionField permissao_titulo="IPI CST" permissao_name="ipi_cst"/>

                      <PermissionField permissao_titulo="IPI Enquadr. Legal" permissao_name="ipi_enquadr_legal"/>

                      <PermissionField permissao_titulo="PIS CST" permissao_name="pis_cst"/>

                      <PermissionField permissao_titulo="COFINS CST" permissao_name="cofins_cst"/>

                      <PermissionField permissao_titulo="SPED ICMS/IPI - Tipo de Item" permissao_name="sped_icms_ipi"/>

                      <PermissionField permissao_titulo="CNAE" permissao_name="cnae"/>

                      <PermissionField permissao_titulo="Origem de Produtos" permissao_name="origem_produtos"/>
              </GroupElement>

              <!--Fim Permissões-->
              <BtnSubmit/>
            </FormElements>
          </template>
        </Vueform>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
