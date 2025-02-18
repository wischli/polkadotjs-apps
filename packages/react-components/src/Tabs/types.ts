// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IconName } from '@fortawesome/fontawesome-svg-core';
import type React from 'react';

export interface TabItem {
  alias?: string;
  count?: number;
  hasParams?: boolean;
  isExact?: boolean;
  isHidden?: boolean;
  isRoot?: boolean;
  name: string;
  text: React.ReactNode;
}

export interface SectionType {
  icon?: IconName;
  text?: string;
}
