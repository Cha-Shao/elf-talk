<script setup lang="ts">
import { ref } from "vue";
import Card from "../components/Base/Card.vue";
import { servers } from "../lib/server";
import Input from "../components/Base/Input.vue";
import Button from "../components/Base/Button.vue";

const inputUrl = ref<string>("");
const inputPwd = ref<string>("");
</script>

<template>
  <div class="flex h-[calc(100vh-1rem)]">
    <Card title="添加服务器" class="m-auto">
      <p>服务器地址</p>
      <Input v-model="inputUrl" />
      <p>服务器密码</p>
      <Input v-model="inputPwd" />
      <pre>{{ servers }}</pre>
      <p>{{ inputUrl }}</p>
      <p>{{ inputPwd }}</p>
      <Button>加入</Button>
    </Card>
  </div>
</template>
