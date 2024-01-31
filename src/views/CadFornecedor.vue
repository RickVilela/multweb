<script setup>
import { reactive, ref } from 'vue'
import { mdiBallotOutline, mdiAccount, mdiMail, mdiGithub } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import BaseButton from '@/components/BaseButton.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'

const selectOptions = [
  { id: 1, label: 'Business development' },
  { id: 2, label: 'Marketing' },
  { id: 3, label: 'Sales' }
]

const form = reactive({
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '',
  department: selectOptions[0],
  subject: '',
  question: ''
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
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiBallotOutline" title="Cadastro de Fornecedor" main>

      </SectionTitleLineWithButton>
      <CardBox form @submit.prevent="submit">
        <Vueform>
    <template #empty>
      <FormTabs>
        <FormTab
          name="informacoes_principais"
          label="Informações Principais"
          :elements="['pessoa', 'cpf_cnpj', 'razao_nome', 'apelido_fantasia', 'data_nascimento', 'rg', 'insc_estadual', 'insc_municipal', 'nacionalidade', 'website', 'observacoes']"
          />
        <FormTab
          name="enderecos"
          label="Endereços"
          :elements="['cep', 'logradouro', 'numero', 'bairro', 'complemento', 'cidade', 'ibge_cidade', 'uf', 'pais', 'ibge_pais' ,'tipo_endereco']"
        />
        <FormTab
          name="telefones"
          label="Telefones"
          :elements="['questions']"
        />
      </FormTabs>

      <FormElements>
        <SelectElement
          name="pessoa"
          label="Pessoa"
          :native="false"
          :items="[
            'Física',
            'Jurídica',
            'Estrageiro(a)',
          ]"
          :columns="6"
        />

        <TextElement
          name="cpf_cnpj"
          label="CNPJ/CPF"
          :columns="6"
        />

        <TextElement
          name="razao_nome"
          label="Razao Social/Nome"
          :columns="6"
        />

        <TextElement
          name="apelido_fantasia"
          label="Apelido / Nome Fantasia"
          :columns="6"
        />

        <DateElement
          name="data_nascimento"
          label="Data de Nascimento"
          :columns="4"
        />

        <TextElement
          name="rg"
          label="RG"
          :columns="4"
        />

        <TextElement
          name="insc_estadual"
          label="Insc.Estadual"
          :columns="4"
        />

        <TextElement
          name="insc_municipal"
          label="Insc.Municipal"
          :columns="4"
        />

        <TextElement
          name="nacionalidade"
          label="Nacionalidade"
          :columns="4"
        />

        <TextElement
          name="website"
          label="Website"
          :columns="4"
        />

        <EditorElement name="observacoes" label="Observações" />


        <TextElement
          name="cep"
          label="CEP"
          :columns="4"
        />

        <TextElement
          name="logradouro"
          label="Logradouro"
          :columns="4"
        />

        <TextElement
          name="numero"
          input-type="number"
          label="Nº"
          :columns="4"
        />

        <TextElement
          name="bairro"
          label="Bairro"
          :columns="6"
        />

        <TextElement
          name="complemento"
          label="Complemento"
          :columns="6"
        />

        <TextElement
          name="cidade"
          label="Cidade"
          :columns="3"
        />

        <TextElement
          name="ibge_cidade"
          label="IBGE Cidade"
          :columns="3"
        />

        <TextElement
          name="uf"
          label="UF"
          :columns="3"
        />

        <TextElement
          name="pais"
          label="Pais"
          :columns="3"
        />

        <TextElement
          name="ibge_pais"
          label="IBGE Pais"
          :columns="3"
        />

        <SelectElement
          name="tipo_endereco"
          label="Tipo"
          :native="false"
          :items="[
            'Faturamento',
            'Entrega',
            'Residência',
          ]"
          :columns="6"
        />

        <ListElement
          name="questions"
          add-text="+"
          :sort="true"
          :override-classes="{
            ListElement: {
              add: 'bg-green-500 w-10 h-10 text-white flex items-center justify-center text-xl font-bold mx-auto rounded-full',
              add_md: '',
            }
          }"
        >
        <template #default="{ index }">

          <!-- One question -->
          <ObjectElement
            :name="index"
            add-class="mb-4"
            :override-classes="{
              ElementLayout: {
                outerWrapper: 'flex flex-wrap',
                innerWrapper: 'bg-white rounded-lg py-8 px-10 shadow-box-circle',
              }
            }"
          >
            <!-- Question title -->
            <StaticElement name="title">
              <div class="text-xl mb-4 font-semibold">Telefone {{ index + 1 }}</div>
            </StaticElement>

            <!-- Question -->
            <TextElement
              name="label"
              label="Telefone"
              placeholder="Número"
              :columns="3"
            />

            <SelectElement
              name="tipo_telefone"
              label="Tipo"
              :native="false"
              :items="[
                'Whatsapp',
                'Celular',
                'Telefone',
              ]"
              :columns="3"
            />

            <!-- Question description -->
            <TextElement
              name="contato"
              label="Contato"
              :columns="3"
            />

            <TextElement
              name="departamento"
              label="Departamento"
              :columns="3"
            />




            <!-- Answer options (if any) -->
            <ListElement
              name="items"
              label="Options"
              add-text="+ Add option"
              :conditions="[
                ['questions.*.type', ['select', 'checkboxgroup', 'radiogroup']]
              ]"
            >
              <template #default="{ index }">
                <TextElement :name="index" />
              </template>
            </ListElement>
          </ObjectElement>
        </template>
      </ListElement>

        <TextElement
          name="facebook"
          label="Facebook"
        />
        <TextElement
          name="twitter"
          label="Twitter"
        />
      </FormElements>
    </template>
  </Vueform>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
