import defaultTheme from 'tailwindcss/defaultTheme'
import { colors } from './colors'
import type { ThemeConfig } from 'tailwindcss/types/config';

const gradient = (from: string, to: string) => `linear-gradient(to bottom right, var(--tw-gradient-from, ${from}), var(--tw-gradient-to, ${to}))`

export const backgroundImage: ThemeConfig["backgroundImage"] = {
    // Default Tailwind gradient
    ...defaultTheme.backgroundImage,

    // Gradient backgrounds based on the previously defined theme colors
    'gradient-white': gradient(colors.snow, colors.white),
    'gradient-fog': gradient("#EAE9EA", colors.fog),
    'gradient-gold': gradient("#EC991C", colors.gold.DEFAULT),
    'gradient-honey': gradient("#E58A1B", colors.honey.DEFAULT),
    // TODO Missing carrot
    'gradient-pumpkin': gradient("#FD6216", colors.pumpkin.DEFAULT),
    'gradient-cherry': gradient("#CC3047", colors.cherry.DEFAULT),
    'gradient-tomato': gradient("#BF2D46", colors.tomato.DEFAULT),
    'gradient-salmon': gradient("#CC3047", colors.salmon.DEFAULT),
    'gradient-flamingo': gradient("#E0516B", colors.flamingo.DEFAULT),
    // TODO Missing mint
    'gradient-pistachio': gradient("#70B069", colors.pistachio.DEFAULT),
    'gradient-algae': gradient("#41A38E", colors.algae.DEFAULT),
    'gradient-keppel': gradient("#3D9988", colors.keppel.DEFAULT),
    'gradient-sky': gradient("#265DD7", colors.sky.DEFAULT),
    // TODO Missing ocean
    'gradient-space': gradient("#260133", colors.space.DEFAULT),
    'gradient-grape': gradient("#4D4C96", colors.grape.DEFAULT),
    'gradient-soil': gradient("#724147", colors.soil.DEFAULT),

    // 'gradient-blue-dark-darkened':
    //     'gradient-gradient(100% 100% at 100% 100%, #180021, #0E99EC)'
    // 'gradient-blue-light-darkened':
    //     'gradient-gradient(100% 100% at 100% 100%, #2355C4, #0071C3)',
}