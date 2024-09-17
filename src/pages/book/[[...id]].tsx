import { useRouter } from 'next/router';

const BookPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>BookPage {id}</div>;
};

export default BookPage;
