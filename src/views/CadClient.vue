<script setup>
import { reactive, ref } from 'vue'
import { mdiBallotOutline, mdiAccount, mdiMail, mdiCalendarAccount, mdiCellphone, mdiAt } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadioGroup from '@/components/FormCheckRadioGroup.vue'
import FormFilePicker from '@/components/FormFilePicker.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import NotificationBarInCard from '@/components/NotificationBarInCard.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'

const selectOptions = [
  { id: 1, label: 'Pessoa Física' },
  { id: 2, label: 'Pessoa Jurídica' },
  { id: 3, label: 'Estrangeiro(a)' }
]

const form = reactive({
  tipoPessoa: selectOptions[0],
  cpf_cnpj: '',
  razao_social: '',
  telefone: '',
  fantasia: '',
  data_nascimento: '',
  rg: '',
  insc_estadual: '',
  insc_municipal: '',
  nacionalidade: '',
  website: '',
  obs: ''
})

const customElementsForm = reactive({
  checkbox: ['lorem'],
  radio: 'one',
  switch: ['one'],
  file: null
})

const submit = () => {
  //
}

const formStatusWithHeader = ref(true)

const formStatusCurrent = ref(0)

const formStatusOptions = ['info', 'success', 'danger', 'warning']

const formStatusSubmit = () => {
  formStatusCurrent.value = formStatusOptions[formStatusCurrent.value + 1]
    ? formStatusCurrent.value + 1
    : 0
}
</script>

<template>
  <LayoutAuthenticated >
    <SectionMain class="w-100">
      <SectionTitleLineWithButton :icon="mdiBallotOutline" title="Cadastro de Cliente" main>

      </SectionTitleLineWithButton>

      <CardBox has-table>
        <TableSampleClients />
      </CardBox>

      <CardBox form @submit.prevent="submit" >
        <div class="w-1/2 mx-auto">
            <FormKit type="form" :actions="false" >
            <FormKit type="multi-step" tab-style="progress" :allow-incomplete="false">
              <FormKit type="step" name="contactInformation" label="Informações Principais">
                <!-- collect name, email, and company info -->
                <FormKit
                  type="select"
                  label="Pessoa"
                  prefix-icon="people"
                  placeholder="Selecione o Tipo de Pessoa"
                  name="tipo_pessoa"
                  :options="{
                    fisica: 'Física',
                    juridica: 'Jurídica',
                    estrangeiro: 'Estrangeiro(a)',
                  }"
                  validation="required"
                  validation-visibility="dirty"
                />
                <FormKit type="text" label="CPF / CNPJ / Documento"/>
                <FormKit type="text" label="Razão Social / Nome" validation="required"/>
                <FormKit type="text" label="Apelido / Nome Fantasia"/>
                <FormKit type="date" label="Data de Nascimento"/>
                <FormKit type="text" label="RG"/>
                <FormKit type="text" label="Insc.Estadual"/>
                <FormKit type="text" label="Insc.Municipal"/>
                <FormKit type="text" label="Nacionalidade"/>
              </FormKit>

              <FormKit type="step" name="endereco" label="Endereços">
                <!-- Get talk title, brief, and track -->
                <FormKit type="text" label="CEP" validation="required" />
                <FormKit type="text" label="Logradouro" validation="required" />
                <FormKit type="text" label="Nº" validation="required" />
                <FormKit type="text" label="Bairro" validation="required" />
                <FormKit type="text" label="Complemento"/>
                <FormKit type="text" label="Cidade" validation="required" />
                <FormKit type="text" label="IBGE Cidade"/>
                <FormKit type="text" label="UF" validation="required" />
                <FormKit type="text" label="Pais" validation="required" value="Brasil"/>
                <FormKit type="text" label="IBGE Pais" value="1058"/>
                <FormKit
                  type="select"
                  label="Tipo de Endereço"
                  placeholder="Selecione o Tipo de Endereço"
                  name="tipo_endereco"
                  :options="{
                    padrao: 'Padrão',
                    entrega: 'Entrega',
                    coleta: 'Coleta',
                    redespacho: 'Redespacho',
                    cobranca: 'Cobrança',
                    retorno: 'Retorno',
                    internacional: 'Internacional',
                  }"
                  validation="required"
                  validation-visibility="dirty"
                />
              </FormKit>

              <FormKit type="step" name="outros_dados" label="Outros Dados">
                <!-- Get talk title, brief, and track -->
                <FormKit type="email" label="E-mail Principal" validation="required|email" prefix-icon="email" />
                <FormKit type="email" label="E-mail Financeiro" validation="required|email" prefix-icon="email" />
                <FormKit type="email" label="E-mail NFe" validation="required|email" prefix-icon="email" />

                  <FormCheckRadioGroup
                    v-model="customElementsForm.switch"
                    name="sample-switch"
                    type="switch"
                    :options="{ one: 'Notificações por e-mail (E-mail Principal)'}"
                  />

                  <BaseDivider />

                <FormKit
                  type="tel"
                  label="Telefone"
                  prefix-icon="telephone"
                  placeholder="(xx) xxxxx-xxxx"
                  validation="matches:^\([0-9]{2}\) [0-9][0-9]{4,4}-[0-9]{4}$"
                  :validation-messages="{
                    matches: 'O número de telefone deve ter o seguinte formato: (XX) XXXXX-XXXXX',
                  }"
                  validation-visibility="dirty"
                />

                <FormKit
                  type="tel"
                  label="Whatsapp"
                  prefix-icon="whatsapp"
                  placeholder="(xx) xxxxx-xxxx"
                  validation="matches:^\([0-9]{2}\) [0-9][0-9]{4,4}-[0-9]{4}$"
                  :validation-messages="{
                    matches: 'O número de whatsapp deve ter o seguinte formato: (XX) XXXXX-XXXXX',
                  }"
                  validation-visibility="dirty"
                />

                <FormKit
                  type="select"
                  label="Condição de Pagamento"
                  prefix-icon="mastercard"
                  placeholder="Selecione a Condição de Pagamento"
                  name="condicao_pagamento"
                  :options="{
                    a_vista: 'Á Vista - Carteira',
                    boleto: 'Boleto',
                  }"
                  validation-visibility="dirty"
                />

                <FormKit
                  type="select"
                  label="Tipos de Pagamentos"
                  placeholder="Selecione o tipo de Pagamento"
                  name="regiao"
                  :options="{
                    dinheiro: 'Dinheiro',
                    boleto: 'Boleto',
                    duplicata: 'Duplicata',
                    cheque: 'Cheque',
                    cartao_debito: 'Cartão Débito',
                    cartao_credito: 'Cartão Credito',
                    pix: 'Pix'
                  }"
                  validation-visibility="dirty"
                />

                <FormKit
                  type="select"
                  label="Região"

                  placeholder="Selecione a Região"
                  name="regiao"
                  :options="{
                    regiao: 'Limeira e Região',
                  }"
                  validation-visibility="dirty"
                />

                <FormKit type="text" label="Região Suframa" />
                <FormKit type="text" label="Cód. do EAN Comprador" />

                <FormKit
                  type="select"
                  label="Transportadoras"
                  placeholder="Selecione a Transportadora"
                  name="transportadora"
                  :options="{
                    transportadora1: 'Taubate transportes',
                  }"
                  validation-visibility="dirty"
                />

              </FormKit>

              <FormKit type="step" name="referral" label="Configurações">
                <FormKit
                  type="select"
                  label="Situação"
                  placeholder="Selecione a Situação"
                  name="situacao"
                  :options="{
                    ativo: 'Ativo',
                    inativo: 'Inativo',
                    prospect: 'Prospect',
                  }"
                  validation="required"
                  validation-visibility="dirty"
                />

                <FormKit
                  type="select"
                  label="Tipo Contribuinte"
                  placeholder="Selecione o tipo de Contribuinte"
                  name="tipo_contribuinte"
                  :options="{
                    nao_contribuinte: 'Não contribuinte que pode ou não possuir Inscrição Estadual',
                    contribuinte_isento: 'Contribuinte Isento de Inscrição',
                    contribuinte_icms: 'Contribuinte ICMS',
                  }"
                  validation="required"
                  validation-visibility="dirty"
                />

                <FormKit
                  type="select"
                  label="Finalidade Faturamento"
                  placeholder="Selecione a Finalidade de Faturamento"
                  name="finalidade_faturamento"
                  :options="{
                    revenda: 'Revenda',
                    consumo: 'Consumo',
                    amostra: 'Amostra',
                    devolucao_compra_revenda: 'Devolução de Compra para Revenda (à Fornecedor)',
                    devolucao_compra_industrializacao: 'Devolução de Compra para Industrialização (à Fornecedor)',
                    bonificacao_cliente: 'Bonificação ao Cliente',
                    industrializacao_cliente: 'Industrialização ao Cliente',
                    remessa_industrializacao: 'Remessa para Industrialização (à Fornecedor)',
                    remessa_conserto: 'Remessa para Conserto (à Fornecedor)',
                    retorno_industrializacao: 'Retorno de Industrialização (ao Cliente)',
                    retorno_conserto: 'Retorno de Conserto (ao Cliente)',
                    nf_complementar_cliente: 'NF Complementar à Cliente',
                    nf_complementar_fornecedor: 'NF Complementar à Fornecedor',
                    remessa_demonstracao_cliente: 'Remessa em Demonstração (ao Cliente)',
                    remessa_demonstracao_fornecedor: 'Remessa em Demonstração (ao Fornecedor)',
                    devolucao_compra: 'Devolução de Compra para consumo',
                  }"
                  validation-visibility="dirty"
                />

                <FormKit type="number" label="Alíquota Carga Tributária Média" />

                <FormKit
                  type="select"
                  label="Plano de Contas"
                  placeholder="Selecione o plano de contas"
                  name="plano_contas"
                  :options="{
                    venda: 'Venda à Vista',

                  }"
                  validation-visibility="dirty"
                />

                <template #stepNext>
                  <FormKit type="submit" />
                </template>
              </FormKit>
            </FormKit>
          </FormKit>
        </div>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
