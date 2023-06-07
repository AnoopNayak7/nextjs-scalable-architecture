import { ReactNode } from 'react';
import { AppBarProps } from '@mui/material';
import { Theme, SxProps, PaletteMode } from '@mui/material';

export type Skin = 'default' | 'bordered'

export type Mode = PaletteMode | 'semi-dark'

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export VwerticalNavToggle = 'accordian' | 'collapse'

export type HorizontalMenuToggle = 'hover' | 'click'

export type BlankLayoutProps = {
    children : ReactNode
}

export type NavSectionTitle = {
    action?: string
    subject?: string
    sectionTitle: string
}

export type NavGroup = {
    icon?: string
    title: string
    action?:string
    subject?: string
    badgeContent?: string
    children?: (NavGroup | NavLink)[]
    badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

export type NavLink = {
    icon?: string
    path?: string
    title: string
    action?: string
    subject?: string
    disabled?: boolean
    badgeContent?: string
    externalLink?: boolean
    openInNewTab?: boolean
    badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  }