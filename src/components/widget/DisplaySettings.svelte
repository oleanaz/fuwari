import { i18n } from '@i18n/translation'
import I18nKey from '@i18n/i18nKey'
import { getDefaultHue, getHue, setHue } from '@utils/setting-utils'

let hue = getHue()
const defaultHue = getDefaultHue()

function resetHue() {
  hue = getDefaultHue()
}

if (hue || hue === 0) {
  setHue(hue)
}
