import { ThemeProvider } from './ThemeProvider';

export default {
  title: 'Core/ThemeProvider',
  component: ThemeProvider,
};

export const Default = () => (
  <ThemeProvider>
    <div style={{ padding: '2rem' }}>
      <h1>Zone UI Theme Provider</h1>
      <p>This is a test of the theme provider</p>
    </div>
  </ThemeProvider>
);
