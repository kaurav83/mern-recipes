import { memo } from 'react';

import { classNames } from '../../helpers/classNames';

import './NotFoundPage.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className = '' }: NotFoundPageProps) => {
  return (
    <div className={classNames('not-found-page', [className])}>
      Страница не найдена
    </div>
  );
});
