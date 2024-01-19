<template lang="pug">
div.flex-flex-column
  bubble-menu(:editor="editor" :tippy-options="{ duration: 100 }" v-if="editor")
    // Heading
    v-btn.mr-1(variant="elevated" size="small" :color="editor.isActive('heading') ? 'secondary' : ''" @click="editor.chain().focus().toggleHeading({Level: 2}).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }")
      //- v-icon(size="small") mdi-format-h2
      span.bold H
    // Format
    v-btn.mr-1(variant="elevated" size="small" :color="editor.isActive('bold') ? 'secondary' : ''" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }")
      v-icon(size="small") mdi-format-bold
    v-btn.mr-1(variant="elevated" size="small" :color="editor.isActive('italic') ? 'secondary' : ''" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }")
      v-icon(size="small") mdi-format-italic
    // Lists
    v-btn.mr-1(variant="elevated" size="small" :color="editor.isActive('bulletList') ? 'secondary' : ''" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }")
      v-icon(size="small") mdi-format-list-bulleted
    v-btn.mr-1(variant="elevated" size="small" :color="editor.isActive('orderedList') ? 'secondary' : ''" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }")
      v-icon(size="small") mdi-numeric
    // Rules
    v-btn.mr-1(variant="elevated" size="small" @click="editor.chain().focus().setHorizontalRule().run()")
      //- v-icon(size="small") mdi-horizontal-rule
      span.bold ---

  editor-content(:editor="editor")
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
// import Document from '@tiptap/extension-document'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'
// import Heading from '@tiptap/extension-heading'
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
        // Document,
        // Paragraph,
        // Text,
        // Heading.configure({
        //   levels: [1, 2, 3],
        // }),
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