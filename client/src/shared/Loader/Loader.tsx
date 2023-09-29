import { FC } from 'react';

import { classNames } from '../../helpers/classNames';

import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className = '' }) => (
  <div className={classNames('loader', [className])}>
    <div />
    <div />
  </div>
);