import SearchableLayout from '@/components/searchable-layout';
import { ReactNode } from 'react';
import BookItem from '@/components/book-item';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // ssr로 동작하도록 자동으로 설정(getServerSideProps)
  const q = context.query.q;
  const books = await fetchBooks(q as string);
  return {
    props: { books },
  };
  // 반드시 객체타입의 props가 들어있어야만 함.
};

export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
