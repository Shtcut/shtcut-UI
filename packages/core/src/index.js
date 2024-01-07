const plugin = require('tailwindcss/plugin');

const colors = require('./colors');
const withOpacity = require('./with-opacity');

const Alert = require('./components/alert');

const components = [Alert];

const defaultColors = ['primary'];

module.exports = plugin.withOptions(
  function (options = { colors: [], cssBase: true }) {
    return ({ addComponents, addVariant, addBase, variants, e, theme, addUtilities }) => {
      const optionColors = [...defaultColors, ...(options.colors || [])];
      active({ addVariant, variants, e, theme, addUtilities });
      selected({ addVariant, variants, e, theme, addUtilities });
      disabled({ addVariant, variants, e, theme, addUtilities });

      addComponents(
        components.map((comp) => comp(optionColors)),
        {
          respectPrefix: true,
        },
      );
      if (options.cssBase) {
        addBase({
          html: {
            '@apply text-foreground antialiased borer-neutral-200 dark:border-neutral-700': {},
            lineHeight: '1.5',
            textRendering: 'optimizeLegibility',
            textSizeAdjust: '100%',
            touchAction: 'manipulation',
          },
          body: {
            position: 'relative',
            minHeight: '100%',
            fontFeatureSettings: "'kern'",
          },
        });
      }
    };
  },
  function () {
    return {
      theme: {
        extend: {
          colors,
          cursor: {
            base: 'var(--sht-cursor)',
          },
          opacity: {
            15: '0.15',
          },
          backgroundColor: {
            base: withOpacity('--sht-colors-bg-base'),
            fill: withOpacity('--sht-colors-bg-fill'),
          },
          textColor: {
            foreground: withOpacity('--sht-colors-text-foreground'),
            muted: withOpacity('--sht-colors-text-muted'),
          },
          borderRadius: {
            base: 'var(--sht-rounded)',
          },
          zIndex: {
            hide: -1,
            none: 0,
            base: 1,
            docked: 10,
            dropdown: 1000,
            sticky: 1100,
            banner: 1200,
            overlay: 1300,
            modal: 1400,
            popover: 1500,
            skipLink: 1600,
            toast: 1700,
            tooltip: 1800,
          },
        },
      },
      variants: {
        extend: {
          boxShadow: ['disabled'],
          cursor: ['disabled'],
          opacity: ['active', 'disabled'],
          textColor: ['active', 'disabled:hover'],
          textDecoration: ['disabled'],
          backgroundColor: ['disabled'],
          borderColor: ['disabled'],
        },
      },
    };
  },
);

const active = ({ addVariant, e }) => {
  addVariant('active', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`active${separator}${className}`)}:active, .${e(
        `active${separator}${className}`,
      )}[data-active=true]`;
    });
  });
};

const selected = ({ addVariant, e }) => {
  addVariant('selected', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`selected${separator}${className}`)}[aria-selected=true]`;
    });
  });
};

const disabled = ({ addVariant, e }) => {
  addVariant('disabled', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`selected${separator}${className}`)}[aria-disabled=true]`;
    });
  });
  addVariant('disabled:hover', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`disabled:hover${separator}${className}`)}[aria-disabled=true]`;
    });
  });
};
