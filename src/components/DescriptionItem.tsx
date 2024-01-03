'use client'
interface Props {
  title: string;
  content: string;
}

export default function DescriptionItem({ title, content }: Props) {

  if (content === '')
    return null;

  return (
    <div className='flex flex-row gap-3 justify-between'>
      <p className='font-semibold'>{title}</p>
      <p className='text-right'>{content}</p>
    </div>
  );
}