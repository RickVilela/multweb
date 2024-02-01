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
      <SectionTitleLineWithButton :icon="mdiBallotOutline" title="Cadastro de Cliente" main>
        <BaseButton v-if="!showForm.novo" @click="toggleForm" label="Novo Cliente" color="success" :icon="mdiAccountPlus"/>
        <BaseButton v-else @click="toggleForm" label="Ver Clientes" color="info" :icon="mdiAccountEye"/>
      </SectionTitleLineWithButton>

      <CardBox v-if="!showForm.novo" has-table>
        <TableSampleClients />
      </CardBox>

      <CardBox form v-if="showForm.novo" @submit.prevent="submit" >
        <Vueform>
          <template #empty>
            <FormTabs class="overflow-x-auto text-base sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
              <FormTab name="informacoes_principais" label="Informações Principais"
                :elements="['pessoa', 'cpf_cnpj', 'razao_nome', 'apelido_fantasia', 'data_nascimento', 'rg', 'insc_estadual', 'insc_municipal', 'nacionalidade', 'website', 'observacoes', 'button_submit']"
                :columns="{ sm: 12, md: 6, lg: 4 }" />

              <FormTab name="enderecos" label="Endereços"
                :elements="['cep', 'logradouro', 'numero', 'bairro', 'complemento', 'cidade', 'ibge_cidade', 'uf', 'pais', 'ibge_pais', 'tipo_endereco', 'button_submit']"
                :columns="{ sm: 12, md: 6, lg: 4 }" />
              <FormTab name="telefones" label="Telefones" :elements="['telefones', 'button_submit']" :columns="{ sm: 12, md: 6, lg: 4 }" />

              <FormTab name="email" label="E-mail" :elements="['email','button_submit']" :columns="{ sm: 12, md: 6, lg: 4 }" />

              <FormTab name="dados_adicionais" label="Dados Adicionais"
                :elements="['condicao_pagamento', 'tipo_pagamento', 'regiao', 'transportadoras', 'regiao_suframa', 'cod_ean','button_submit']"
                :columns="{ sm: 12, md: 6, lg: 4 }" />

              <FormTab name="dados_financeiros" label="Dados Financeiros" :elements="['dados_financeiros', 'button_submit']"
                :columns="{ sm: 12, md: 6, lg: 4 }" />

              <FormTab name="configuracoes" label="Configurações"
                :elements="['situacao', 'tipo_contribuinte', 'finalidade_faturamento', 'aliquota_carga_tributaria', 'plano_contas', 'button_submit']"
                :columns="{ sm: 12, md: 6, lg: 4 }" />
              </FormTabs>


            <FormElements>
              <!-- Início Informações Principais-->
                <SelectElement name="pessoa" label="Pessoa" rules="required" :messages="{ required: 'Por favor, selecione uma Opção' }" :native="false" :items="[
                  'Física',
                  'Jurídica',
                  'Estrageiro(a)',
                ]" :columns="6" />

                <TextElement name="cpf_cnpj" label="CNPJ/CPF" :columns="6" />

                <TextElement name="razao_nome" label="Razao Social/Nome" :columns="6" />

                <TextElement name="apelido_fantasia" label="Apelido / Nome Fantasia" :columns="6" />

                <DateElement name="data_nascimento" label="Data de Nascimento" :columns="4" />

                <TextElement name="rg" label="RG" :columns="4" />

                <TextElement name="insc_estadual" label="Insc.Estadual" :columns="4" />

                <TextElement name="insc_municipal" label="Insc.Municipal" :columns="4" />

                <TextElement name="nacionalidade" label="Nacionalidade" :columns="4" />

                <TextElement name="website" label="Website" :columns="4" />

                <EditorElement name="observacoes" label="Observações" />
              <!-- Fim Informações Principais-->

              <!-- Início Endereços-->
                <TextElement name="cep" label="CEP" :columns="4" />

                <TextElement name="logradouro" label="Logradouro" :columns="4" />

                <TextElement name="numero" input-type="number" label="Nº" :columns="4" />

                <TextElement name="bairro" label="Bairro" :columns="6" />

                <TextElement name="complemento" label="Complemento" :columns="6" />

                <TextElement name="cidade" label="Cidade" :columns="3" />

                <TextElement name="ibge_cidade" label="IBGE Cidade" :columns="3" />

                <TextElement name="uf" label="UF" :columns="3" />

                <TextElement name="pais" label="Pais" :columns="3" />

                <TextElement name="ibge_pais" label="IBGE Pais" :columns="3" />

                <SelectElement name="tipo_endereco" label="Tipo" rules="required" :messages="{ required: 'Por favor, selecione uma Opção' }" :native="false" :items="[
                  'Faturamento',
                  'Entrega',
                  'Residência',
                ]" :columns="6" />
              <!-- Fim Endereços-->

              <!-- Início Telefones-->
                <ListElement name="telefones" add-text="+" :sort="true" :override-classes="{
                  ListElement: {
                    add: 'bg-green-500 w-10 h-10 text-white flex items-center justify-center text-xl font-bold mx-auto rounded-full',
                    add_md: '',
                  }
                }">
                  <template #default="{ index }">
                      <ObjectElement :name="index" add-class="mb-4" :override-classes="{
                        ElementLayout: {
                          outerWrapper: 'flex flex-wrap',
                          innerWrapper: 'bg-white rounded-lg py-8 px-10 shadow-box-circle',
                        }
                      }">
                      <StaticElement name="title">
                        <div class="text-xl mb-4 font-semibold">Telefone {{ index + 1 }}</div>
                      </StaticElement>

                      <TextElement name="label" label="Telefone" placeholder="Número" :columns="3" />

                      <SelectElement name="tipo_telefone" label="Tipo" :search="true" :native="false" :items="[
                        'Whatsapp',
                        'Celular',
                        'Telefone',
                      ]" :columns="3" />

                      <TextElement name="contato" label="Contato" :columns="3" />

                      <TextElement name="departamento" label="Departamento" :columns="3" />

                      <ListElement name="items" label="Options" add-text="+ Add option" :conditions="[
                        ['questions.*.type', ['select', 'checkboxgroup', 'radiogroup']]
                      ]">
                        <template #default="{ index }">
                          <TextElement :name="index" />
                        </template>
                      </ListElement>
                    </ObjectElement>
                  </template>
                </ListElement>
              <!-- Fim Telefones-->

              <!-- Início E-mail -->
                <ListElement name="email" add-text="+" :sort="true" :override-classes="{
                  ListElement: {
                    add: 'bg-green-500 w-10 h-10 text-white flex items-center justify-center text-xl font-bold mx-auto rounded-full',
                    add_md: '',
                  }
                }">
                  <template #default="{ index }">

                    <ObjectElement :name="index" add-class="mb-4" :override-classes="{
                      ElementLayout: {
                        outerWrapper: 'flex flex-wrap',
                        innerWrapper: 'bg-white rounded-lg py-8 px-10 shadow-box-circle',
                      }
                    }">

                      <StaticElement name="title">
                        <div class="text-xl mb-4 font-semibold">E-mail {{ index + 1 }}</div>
                      </StaticElement>

                      <TextElement name="email_principal" label="E-mail Principal" :columns="4" />

                      <TextElement name="email_financeiro" label="E-mail Financeiro" :columns="4" />

                      <TextElement name="email_nfe" label="E-mail NFe" :columns="4" />

                      <ListElement name="items" label="Options" add-text="+ Add option" :conditions="[
                        ['questions.*.type', ['select', 'checkboxgroup', 'radiogroup']]
                      ]">
                        <template #default="{ index }">
                          <TextElement :name="index" />
                        </template>
                      </ListElement>
                    </ObjectElement>
                  </template>
                </ListElement>
              <!-- Fim E-mail-->

              <!--Início Dados Adicionais-->
                  <SelectElement name="condicao_pagamento" label="Condição de Pagamento" :search="true" :native="false" :items="[
                    '',

                  ]" :columns="6" />

                  <SelectElement name="tipo_pagamento" label="Tipos de Pagamentos" :search="true" :native="false" :items="[
                    '',
                  ]" :columns="6" />

                  <SelectElement name="regiao" label="Região" :search="true" :native="false" :items="[
                    '',
                  ]" :columns="6" />

                  <SelectElement name="transportadoras" label="Transportadoras" :search="true" :native="false" :items="[
                    '',
                  ]" :columns="6" />

                  <TextElement name="regiao_suframa" label="Região Suframa"  :columns="6" />

                  <TextElement name="cod_ean" label="Cód. do EAN Comprador"  :columns="6" />
              <!-- Fim  Dados Adicionais-->

              <!--Início Dados Financeiros-->
                <ListElement name="dados_financeiros" add-text="+" :sort="true" :override-classes="{
                  ListElement: {
                    add: 'bg-green-500 w-10 h-10 text-white flex items-center justify-center text-xl font-bold mx-auto rounded-full',
                    add_md: '',
                  }
                }">
                  <template #default="{ index }">
                    <ObjectElement :name="index" add-class="mb-4" :override-classes="{
                      ElementLayout: {
                        outerWrapper: 'flex flex-wrap',
                        innerWrapper: 'bg-white rounded-lg py-8 px-10 shadow-box-circle',
                      }
                    }">

                      <StaticElement name="title">
                        <div class="text-xl mb-4 font-semibold">Conta Bancária {{ index + 1 }}</div>
                      </StaticElement>

                      <TextElement name="descricao" label="Descrição" :columns="6" />

                      <SelectElement name="banco" label="Banco" :search="true" :native="false" :items="[
                        '',
                      ]" :columns="6" />

                      <TextElement name="agencia" label="Agência" :columns="3" />

                      <TextElement name="digito_agencia" label="Digito da Agência" :columns="3" />

                      <TextElement name="conta" label="Conta" :columns="3" />

                      <TextElement name="digito_conta" label="Digito da Conta" :columns="3" />

                      <SelectElement name="tipo" label="Tipo" :search="true" :native="false" :items="[
                        '',
                      ]" :columns="12" />

                      <ListElement name="items" label="Options" add-text="+ Add option" :conditions="[
                        ['questions.*.type', ['select', 'checkboxgroup', 'radiogroup']]
                      ]">
                        <template #default="{ index }">
                          <TextElement :name="index" />
                        </template>
                      </ListElement>
                    </ObjectElement>
                  </template>
                </ListElement>
              <!--Fim Dados Financeiros-->

              <!--Início Configurações-->
                <SelectElement name="situacao" default="Ativo" label="Situação" rules="required" :messages="{ required: 'Por favor, selecione uma Opção' }" :native="false" :items="[
                  'Ativo',
                  'Inativo'
                ]" :columns="6" />

                <SelectElement name="tipo_contribuinte" :search="true" rules="required" :messages="{ required: 'Por favor, selecione uma Opção' }" label="Tipo contribuinte" :native="false" :items="[
                  'Não contribuinte, que pode ou não possuir Inscrição Estadual',
                  'Contribuinte isento de inscrição',
                  'Contribuinte de ICMS'
                ]" :columns="6" />

                <SelectElement name="finalidade_faturamento" :search="true" label="Finalidade Faturamento" :native="false" :items="[
                  'Revenda',
                  'Consumo',
                  'Industrialização',
                  'Devolução'
                ]" :columns="4" />

                <TextElement name="aliquota_carga_tributaria" label="Alíquota Carga Tributária Média" input-type="number" :columns="4" />

                <SelectElement name="plano_contas" label="Plano de Contas" :native="false" :items="[
                  ''
                ]" :columns="4" />
              <!--Fim Configurações-->
              <BtnSubmit/>
            </FormElements>
          </template>
        </Vueform>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
