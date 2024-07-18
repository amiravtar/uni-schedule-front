/**
 * Create aliases for the paths
 */
const aliases = (prefix = `src`) => ({
  '@fuse': `${prefix}/@fuse`,
  '@history': `${prefix}/@history`,
  '@lodash': `${prefix}/@lodash`,
  '@schema': `${prefix}/@schema`,
  'app/store': `${prefix}/app/store`,
  'app/services': `${prefix}/app/services`,
  'app/constants': `${prefix}/app/constants`,
  'app/shared-components': `${prefix}/app/shared-components`,
  'app/configs': `${prefix}/app/configs`,
  'app/theme-layouts': `${prefix}/app/theme-layouts`,
  'app/AppContext': `${prefix}/app/AppContext`,
});

module.exports = aliases;
