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
      <SectionTitleLineWithButton :icon="mdiBallotOutline" title="Cadastro de Funcionário" main>
        <BaseButton v-if="!showForm.novo" @click="toggleForm" label="Novo Funcionário" color="success" :icon="mdiAccountPlus"/>
        <BaseButton v-else @click="toggleForm" label="Ver Funcionarios" color="info" :icon="mdiAccountEye"/>
      </SectionTitleLineWithButton>

      <CardBox v-if="!showForm.novo" has-table>
        <TableSampleClients />
      </CardBox>

      <CardBox form v-if="showForm.novo" @submit.prevent="submit" >
        <Vueform>
          <template #empty>
            <FormTabs class="overflow-x-auto text-base sm:text-sm md:text-base lg:text-sm whitespace-nowrap ">
              <FormTab name="informacoes_principais" label="Informações Principais"
                :elements="['pessoa', 'cpf_cnpj', 'razao_nome', 'apelido_fantasia', 'data_nascimento', 'rg', 'insc_estadual', 'insc_municipal', 'nacionalidade', 'website', 'grau_instrucao', 'estado_civil', 'nome_mae', 'nome_pai', 'dependentes' , 'observacoes', 'button_submit']"
                :columns="{ sm: 12, md: 6, lg: 4 }" />

              <FormTab name="enderecos" label="Endereços"
                :elements="['cep', 'logradouro', 'numero', 'bairro', 'complemento', 'cidade', 'ibge_cidade', 'uf', 'pais', 'ibge_pais', 'tipo_endereco', 'button_submit']"
                :columns="{ sm: 12, md: 6, lg: 4 }" />
              <FormTab name="telefones" label="Telefones" :elements="['telefones', 'button_submit']" :columns="{ sm: 12, md: 6, lg: 4 }" />

              <FormTab name="email" label="E-mail" :elements="['email','button_submit']" :columns="{ sm: 12, md: 6, lg: 4 }" />

              <FormTab name="dados_admissionais" label="Dados Admissionais"
                :elements="['cartao_ponto', 'numero_registro', 'data_admissao', 'data_demissao', 'salario', 'departamento', 'cargo','alteracoes_salariais', 'afastamento_ferias', 'observacoes_funcionario', 'button_submit']"
                :columns="{ sm: 12, md: 6, lg: 4 }" />

              <FormTab name="dados_registro" label="Dados de Registro"
                :elements="['data_emissao_cpf', 'data_emissao_rg', 'local_emissao_rg', 'numero_ctps', 'numero_serie_ctps', 'data_emissao_ctps', 'local_emissao_ctps','pis', 'data_emissao_pis', 'cnh', 'categoria_cnh', 'data_emissao_cnh', 'data_validade_cnh', 'numero_titulo_eleitor', 'zona', 'secao', 'numero_reservista', 'data_emissao_reservista', 'numero_sus', 'data_emissao_sus', 'local_emissao_sus', 'button_submit']"
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

                <SelectElement name="grau_instrucao" label="Grau de Instrução" :native="false" :items="[
                  'Educação Básica',
                  'Ensino Médio',
                  'Graduação',
                  'Pós-Graduação'
                ]" :columns="6" />

                <SelectElement name="estado_civil" label="Estado Civil" :native="false" :items="[
                  'Solteiro(a)',
                  'Casado(a)',
                  'Divorciado(a)',
                  'Viúvo(a)'
                ]" :columns="6" />

                <TextElement name="nome_mae" label="Nome da Mãe" :columns="6" />

                <TextElement name="nome_pai" label="Nome do Pai" :columns="6" />

                <EditorElement name="dependentes" label="Dependentes" />

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

                      <TextElement name="email_principal" label="E-mail" :columns="12" />

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

              <!--Início Dados Admissionais-->
                  <TextElement name="cartao_ponto" label="Cartão Ponto"  :columns="3" />

                  <TextElement name="numero_registro" label="Número de Registro"  :columns="3" />

                  <DateElement name="data_admissao" label="Data de Admissão" :columns="3" />

                  <DateElement name="data_demissao" label="Data de Demissão" :columns="3" />

                  <TextElement name="salario" label="Salário" :columns="4" />

                  <SelectElement name="departamento" label="Departamento" :search="true" :native="false" :items="[
                    '',
                  ]" :columns="4" />

                  <SelectElement name="cargo" label="Cargo" :search="true" :native="false" :items="[
                    '',
                  ]" :columns="4" />

                  <EditorElement name="alteracoes_salariais" label="Alterações Salariais" />

                  <EditorElement name="afastamento_ferias" label="Afastamento ou Férias" />

                  <EditorElement name="observacoes_funcionario" label="Observações" />
              <!-- Fim  Dados Admissionais-->

              <!--Início Dados de Registro-->
                <DateElement name="data_emissao_cpf" label="Data de Emissão CPF" :columns="3" />

                <DateElement name="data_emissao_rg" label="Data de Emissão RG" :columns="3" />

                <TextElement name="local_emissao_rg" label="Local de Emissão RG"  :columns="3" />

                <TextElement name="numero_ctps" label="Número CTPS" input-type="number"  info="Número da Carteira de Trabalho"  :columns="3" />

                <TextElement name="numero_serie_ctps" label="Número de Série CTPS" input-type="number"  :columns="3" />

                <DateElement name="data_emissao_ctps" label="Data de Emissão CTPS" :columns="3" />

                <TextElement name="local_emissao_ctps" label="Local de Emissão CTPS"  :columns="3" />

                <TextElement name="pis" label="PIS"  :columns="3" />

                <DateElement name="data_emissao_pis" label="Data de Emissão PIS" :columns="3" />

                <TextElement name="cnh" label="CNH"  :columns="3" />

                <MultiselectElement
                  name="categoria_cnh"
                  label="Categoria CNH"
                  info="Selecione as categorias correspondentes"
                  :native="false"
                  :close-on-select="false"
                  :items="[
                    'A',
                    'B',
                    'C',
                    'D',
                    'E'
                  ]"
                  :columns="3"
                />

                <DateElement name="data_emissao_cnh" label="Data de Emissão CNH" :columns="3" />

                <DateElement name="data_validade_cnh" label="Data de Validade CNH" :columns="3" />

                <TextElement name="numero_titulo_eleitor" label="Número Titulo de Eleitor"  :columns="3" />

                <TextElement name="zona" label="Zona Eleitoral" :columns="3" />

                <TextElement name="secao" label="Seção Eleitoral" :columns="3" />

                <TextElement name="numero_reservista" label="Número Reservista" :columns="3" />

                <DateElement name="data_emissao_reservista" label="Data de Emissão Reservista" :columns="3" />

                <TextElement name="numero_sus" label="Número Cartão SUS" :columns="3" />

                <DateElement name="data_emissao_sus" label="Data de Emissão Cartão SUS" :columns="3" />

                <TextElement name="local_emissao_sus" label="Local de Emissão Cartão SUS" :columns="3" />
              <!-- Fim  Dados de Registro-->

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
