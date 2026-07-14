<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <footer class="amz-footer">
        <div class="amz-footer__cols">
          <div class="amz-footer__col">
            <h4>Products</h4>
            <a href="https://amnezia.org" target="_blank" rel="noreferrer">Amnezia VPN</a>
            <a href="https://amnezia.host" target="_blank" rel="noreferrer">Amnezia Hosting</a>
          </div>
          <div class="amz-footer__col">
            <h4>Contacts</h4>
            <a href="https://t.me" target="_blank" rel="noreferrer">Telegram</a>
            <a href="mailto:support@amnezia.host">support@amnezia.host</a>
            <a class="amz-footer__abuse" href="mailto:abuse@amnezia.host">Report abuse: abuse@amnezia.host</a>
          </div>
          <div class="amz-footer__col">
            <h4>Legal</h4>
            <a href="https://amnezia.host/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
            <a href="https://amnezia.host/refund" target="_blank" rel="noreferrer">Refund and Compensation Policy</a>
            <a href="https://amnezia.host/terms" target="_blank" rel="noreferrer">User Agreement</a>
          </div>
        </div>
        <div class="amz-footer__legal">
          LLC "AIMor", Yerevan, 2 Avetis Aharonyan St. Registration number: 264.110.1229448<br />
          © 2026 Amnezia Hosting. All rights reserved.
        </div>
      </footer>
    </template>
  </Layout>
</template>
