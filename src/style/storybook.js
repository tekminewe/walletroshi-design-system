import { createGlobalStyle } from 'styled-components';

export const StorybookStyle = createGlobalStyle`
  .horizontal-box {
    display: flex;
    justify-content: space-between;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .full-width {
    display: flex;
    align-items: flex-end;
  }
`;
