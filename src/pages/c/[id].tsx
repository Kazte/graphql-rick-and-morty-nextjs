import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CharacterPage() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.id);
  }, [router.query.id]);

  return (
    <div>
      Id: {router.query.id}
    </div>
  );
}