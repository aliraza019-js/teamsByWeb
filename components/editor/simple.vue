<template lang="pug">
v-sheet.pa-2(:elevation="editable ? '6' : '0'" rounded)
  div(v-if="editor")
    bubble-menu(:editor="editor" :tippy-options="{ duration: 100 }")
      v-toolbar(density="compact" rounded)
        v-btn(
          size="small"
          icon
          density="compact"
          :color="editor.isActive('heading', { level: 2 }) ? 'secondary' : ''"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()")
          v-icon(size="small") mdi-format-header-2
        v-btn.mr-3(
          size="small"
          icon
          density="compact"
          :color="editor.isActive('heading', { level: 3 }) ? 'secondary' : ''"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()")
          v-icon(size="small") mdi-format-header-3
        span.my-5 |
        v-btn.ml-3(
          size="small"
          icon
          density="compact"
          :color="editor.isActive('bold') ? 'secondary' : ''"
          @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }")
          v-icon(size="small") mdi-format-bold
        v-btn(
          size="small"
          icon
          density="compact"
          :color="editor.isActive('italic') ? 'secondary' : ''"
          @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('bold') }")
          v-icon(size="small") mdi-format-italic
        v-btn(
          size="small"
          icon
          density="compact"
          :color="editor.isActive('underline') ? 'secondary' : ''"
          @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor.isActive('bold') }")
          v-icon(size="small") mdi-format-underline
        v-btn.mr-3(
          size="small"
          icon
          density="compact"
          :color="editor.isActive('strike') ? 'secondary' : ''"
          @click="editor.chain().focus().toggleStrike().run()")
          v-icon(size="small") mdi-format-strikethrough
        span |
        v-btn.ml-3(
          size="small"
          icon
          density="compact")
          v-icon(size="small") mdi-link
  editor-content(:editor="editor" v-if="editor")
</template>

<script setup>
import { Editor, EditorContent, BubbleMenu } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
    required: true
  },
  editable: {
    type: Boolean,
    default: true
  }
})

const editor = ref(null);

watch(()=> props.modelValue, (value) => {
  const isSame = editor.value.getHTML() === value
  if (isSame) {
    return
  }
  editor.value.commands.setContent(value, false)
})

watch(() => props.editable, (newValue) => {
  if (editor.value) {
    editor.value.setEditable(newValue);
  }
}, { immediate: true });

onMounted(()=> {
  editor.value = new Editor({
    editable: props.editable,
    content: props.modelValue,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: true,
        validate: href => /^https?:\/\//.test(href),
        autolink: false,
      }),
      Placeholder.configure({
        placeholder: 'type somthing ...',
        showOnlyWhenEditable: false,
      })
    ],
    onUpdate: () => {
      emit('update:modelValue', editor.value?.getHTML())
    }
  })
})

onBeforeUnmount(() => {
  editor.value?.destroy();
  editor.value = null;
})
</script>

<style lang="scss">
.tiptap p.is-editor-empty::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>