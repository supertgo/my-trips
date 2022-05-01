import Link from 'next/link';
import * as S from './styles';

type LinkWrapperPropś = {
  href: string;
  children: React.ReactNode;
};

const LinkWrapper = ({ href, children }: LinkWrapperPropś) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
);

export default LinkWrapper;
