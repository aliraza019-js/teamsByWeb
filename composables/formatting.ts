import { useLocale } from "vuetify/lib/framework.mjs"

export const tsDate = (dateString: Date) => {
  const { t } = useI18n()
  const locale = useLocale()
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('default', { dateStyle: 'short' }).format(date)
}