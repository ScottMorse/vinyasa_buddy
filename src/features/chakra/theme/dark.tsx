import {
  createSystem,
  mergeConfigs,
  defaultConfig,
  defineTextStyles,
  defineSlotRecipe,
  defineRecipe,
} from '@chakra-ui/react';

export const DARK_THEME = createSystem(
  mergeConfigs(defaultConfig, {
    globalCss: {
      html: {
        fontSize: '62.5%',
        backgroundColor: 'var(--chakra-colors-backgroundDark)',
      },
      body: {
        fontSize: '1.6rem',
        backgroundColor: 'var(--chakra-colors-background)',
        color: 'var(--chakra-colors-textPrimary)',
        fontFamily: 'var(--font-default)',
        padding: '0',
        margin: '0',
        overflowX: 'hidden',
      },
      'h1,h2,h3,h4,h5,h6': {
        fontFamily: 'var(--font-heading)',
      },
    },
    theme: {
      textStyles: defineTextStyles({
        body: {
          value: { fontSize: '2rem', lineHeight: '1.15' },
        },
        sm: {
          value: { fontSize: '1.6rem', lineHeight: '1' },
        },
        md: {
          value: { fontSize: '2rem', lineHeight: '1' },
        },
        lg: {
          value: { fontSize: '2.4rem', lineHeight: '1' },
        },
        xl: {
          value: { fontSize: '4rem', lineHeight: '1' },
        },
      }),
      tokens: {
        colors: {
          primary: { value: '#FF8D85' },
          secondary: { value: '#898BF9' },
          success: { value: '#14CC92' },
          manilla: { value: '#F6D0B1' },
          background: { value: '#10151e ' },
          backgroundSecondary: { value: '#18212f' },
          backgroundDark: { value: '#0e1116' },
          textPrimary: { value: '#cdd6e5' },
          textContrast: { value: '#121212' },
          textSecondary: { value: '#98abca' },
          textDisabled: { value: '#888' },
          stickHead: { value: '#FF8D85' },
          stickNeck: { value: '#FF8D85' },
          stickChest: { value: '#15d89a' },
          stickAbdomen: { value: '#27eaad' },
          stickRightUpperArm: { value: '#7678ED' },
          stickRightLowerArm: { value: '#8e90f0' },
          stickLeftUpperArm: { value: '#7678ED' },
          stickLeftLowerArm: { value: '#8e90f0' },
          stickRightUpperLeg: { value: '#ed7e00' },
          stickRightLowerLeg: { value: '#ffc480' },
          stickLeftUpperLeg: { value: '#ed7e00' },
          stickLeftLowerLeg: { value: '#ffc480' },
          stickFloor: { value: '#1a2332' },
        },
      },
      recipes: {
        text: defineRecipe({
          base: {
            color: 'textPrimary',
          },
        }),
        button: defineRecipe({
          base: {
            color: 'textPrimary',
            px: '4rem',
            py: '2rem',
            borderRadius: 'xl',
            fontWeight: 'bold',
          },
          compoundVariants: [
            {
              color: 'primary',
              variant: 'outline',
              css: {
                borderColor: 'primary',
                color: 'primary',
                bgColor: 'transparent',
                _hover: {
                  bgColor: 'primary',
                  color: 'background',
                },
              },
            } as never,
            {
              color: 'secondary',
              variant: 'outline',
              css: {
                borderColor: 'secondary',
                color: 'secondary',
                bgColor: 'transparent',
                _hover: {
                  bgColor: 'secondary',
                  color: 'background',
                },
              },
            } as never,
            {
              color: 'success',
              variant: 'outline',
              css: {
                borderColor: 'success',
                color: 'success',
                bgColor: 'transparent',
                _hover: {
                  bgColor: 'success',
                  color: 'background',
                },
              },
            } as never,
          ],
          variants: {
            color: {
              primary: {
                bgColor: 'primary',
                color: 'background',
                border: '2px solid',
                _hover: {
                  bgColor: 'background',
                  color: 'primary',
                  borderColor: 'primary',
                },
              },
              secondary: {
                bgColor: 'secondary',
                color: 'background',
                border: '2px solid',
                _hover: {
                  bgColor: 'background',
                  color: 'secondary',
                  borderColor: 'secondary',
                },
              },
              success: {
                bgColor: 'success',
                color: 'background',
                border: '2px solid',
                _hover: {
                  bgColor: 'background',
                  color: 'success',
                  borderColor: 'success',
                },
              },
            },
            size: {
              sm: {
                fontSize: '1.6rem',
                px: '1.5rem',
              },
              md: {
                fontSize: '2.25rem',
                px: '2rem',
                py: '2.5rem',
              },
              lg: {
                fontSize: '2.4rem',
                px: '3rem',
              },
            },
          },
        }),
      },
      slotRecipes: {
        dialog: defineSlotRecipe({
          slots: [],
          ...defaultConfig.theme?.slotRecipes?.dialog,
          base: {
            backdrop: {
              bgColor: 'rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(3px)',
            },
            content: {
              borderRadius: 'xl',
              margin: 'auto',
              bgColor: 'var(--chakra-colors-background)',
              p: '2rem',
            },
          },
        }),
      },
    },
  }),
);
