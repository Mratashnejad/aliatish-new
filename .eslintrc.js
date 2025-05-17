module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    // Disable rules for unescaped entities since they're common in text content
    'react/no-unescaped-entities': 'off',
    
    // Turn off warnings for unused variables during development
    '@typescript-eslint/no-unused-vars': ['warn', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_'
    }],
    
    // Temporarily allow 'any' type during development
    '@typescript-eslint/no-explicit-any': 'warn',
    
    // Allow img elements for now, but consider replacing with next/image later
    '@next/next/no-img-element': 'warn',
    
    // Disable exhaustive deps rule temporarily
    'react-hooks/exhaustive-deps': 'warn',
  }
}; 