<script setup lang="ts">
import ConnectedListItem from './ConnectedListItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <ConnectedListItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>BSc. Computer Science, University Of Birmingham</template>
    Dissertation: "Offline Character-Based Handwriting Recognition with Deep 2D Convolutional Neural Network"
    <a href="https://mega.nz/folder/cBlkDIjS#ygPP9QaUM7iDwZl5JQrtEw" target="_blank" rel="noopener">Link to dissertation abstract</a>
  </ConnectedListItem>

  <ConnectedListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>2019 - Kainos</template>
    <em><u>Trainee Software Engineer</u></em>
    <p>Full-stack engineer in highly agile teams for the digitalisation of Company House services.</p>
    <br>

    <em><u>Associate Software Engineer</u></em>
    <p>Full-stack engineer developing the post-brexit imports system for DEFRA (Department for Environment, Food and Rural Affairs).</p>
  </ConnectedListItem>

  <ConnectedListItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>2021 - Thriva Health</template>
    <em><u>Backend Engineer</u></em>
    <p>Full-stack engineer in highly agile teams for the digitalisation of Company House services.</p>
    <br>

    <em><u>Senior Backend Engineer</u></em>
    <p>Senior Backend Engineer of the Product Experience team. Designing and building backend solutions that better support users to improve their health and allow users to engage on a frequent basis through our web page and mobile app. From Health Plans, to integrating our own digital currency with the shop infrastructure, been involved in all things B2C</p>
  </ConnectedListItem>

  <ConnectedListItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Present</template>
  </ConnectedListItem>
</template>
