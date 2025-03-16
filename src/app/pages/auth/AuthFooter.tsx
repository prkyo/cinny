import React from 'react';
import { Box, Text } from 'folds';
import * as css from './styles.css';

export function AuthFooter() {
  return (
    <Box className={css.AuthFooter} justifyContent="Center" gap="400" wrap="Wrap">
      <Text as="a" size="T300" href="https://cinny.in" target="_blank" rel="noreferrer">
        About
      </Text>
      <Text
        as="a"
        size="T300"
        href="https://github.com/ajbura/cinny/releases"
        target="_blank"
        rel="noreferrer"
      >
        v4.5.1
      </Text>
      <Text as="a" size="T300" href="https://twitter.com/cinnyapp" target="_blank" rel="noreferrer">
        Twitter
      </Text>
      <Text as="a" size="T300" href="https://matrix.org" target="_blank" rel="noreferrer">
        Powered by Matrix
      </Text>

      <Text as="a" size="T300" href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          滇ICP备2021008056号
      </Text>
      <Text as="a" size="T300" href="https://beian.mps.gov.cn/#/query/webSearch?code=53080202000441" target="_blank" rel="noreferrer">
          滇公网安备53080202000441
      </Text>
    </Box>
  );
}
