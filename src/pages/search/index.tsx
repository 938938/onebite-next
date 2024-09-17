import SearchableLayout from '@/components/searchable-layout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;

  return <div>Search {q}</div>;
};

export default SearchPage;

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
