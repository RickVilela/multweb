<script setup>
import { containerMaxW } from '@/config.js'
import BaseLevel from '@/components/BaseLevel.vue'
import LightLogo from '@/components/LightLogo.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-2 px-6" :class="containerMaxW">
    <BaseLevel>
      <div class="text-center md:text-left">
        <b>&copy;{{ year }}, <a href="https://www.lightsystem.com.br/" target="_blank">Light System Software</a>.</b>
        <slot />
      </div>
      <div class="md:py-2">
        <a href="https://www.lightsystem.com.br/">
          <LightLogo class="w-auto h-8 md:h-6" />
        </a>
      </div>
    </BaseLevel>
  </footer>
</template>
