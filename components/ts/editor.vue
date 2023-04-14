<template lang="pug">
div.flex-flex-column
  bubble-menu(:editor="editor" :tippy-options="{ duration: 100 }" v-if="editor")
    v-btn.mr-1(variant="elevated" size="small" :color="editor.isActive('bold') ? 'secondary' : ''" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }")
      v-icon(size="small") mdi-format-bold
    v-btn.mr-1(variant="elevated" size="small" :color="editor.isActive('italic') ? 'secondary' : ''" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }")
      v-icon(size="small") mdi-format-italic

  editor-content(:editor="editor")
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { BubbleMenu, Editor, EditorContent } from '@tiptap/vue-3'

export default {
  components: {
    EditorContent,
    BubbleMenu
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      editor: null,
    }
  },

  watch: {
    modelValue(value) {
      // HTML
      const isSame = this.editor.getHTML() === value
      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)
      if (isSame) {
        return
      }
      this.editor.commands.setContent(value, false)
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
      ],
      content: this.modelValue,
      onUpdate: () => {
        // HTML
        this.$emit('update:modelValue', this.editor.getHTML())
        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss" scoped>
.ProseMirror {
  >*+* {
    margin-top: 0.75em;
  }
}

.is-active {
  i {
    font-weight: bold;
  }
}
</style>