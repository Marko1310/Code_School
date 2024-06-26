import { ReactNode } from 'react';

type CardInfoType = {
  title: string;
  children: ReactNode;
};
function CardInfo({ title, children }: CardInfoType) {
  const isArrayChildren = Array.isArray(children);

  return (
    <div className="flex flex-col gap-1 md:flex-row">
      <p className="font-semibold">{title}:</p>
      <div className={`flex ${isArrayChildren ? 'flex-wrap' : ''}`}>
        {typeof children === 'string' ? (
          <p className="md:break-words">{children}</p>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export default CardInfo;
