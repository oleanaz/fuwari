import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'JustNaz',
  subtitle: 'Demo Site',
  lang: 'en',
  themeHue: 265,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    // LinkPreset.Archive,
    LinkPreset.About,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/saicaca/fuwari',
    //   external: true,
    // },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',
  name: 'Nazir Sapar',
  bio: 'Qurt & Besh Lover',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: '',
    },
    {
      name: 'Linkedin',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/nazir-sapar-3b3288121/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: '',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: '',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
