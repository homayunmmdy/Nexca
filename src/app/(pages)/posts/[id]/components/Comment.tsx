'use client';
import { DeleteBtn } from '@/components/molecules';
import { checkMaster } from '@/util/Util';
import { FaRegComment } from 'react-icons/fa6';

interface Props {
   _id: string;
   name: string;
   email: string;
   message: string;
}

const Comment = ({ comment }: { comment: Props }) => {
   let master = checkMaster();

   return (
      <>
         <section className="my-5 rounded-xl bg-base-200 p-6">
            <header className="flex gap-4">
               <span className="font-bold">{comment.name}</span>
               <span>{comment.email}</span>
            </header>
            <p className="flex gap-3 pt-2">
               <FaRegComment
                  color="#6366F1"
                  size={32}
                  className="rounded-full p-2"
               />{' '}
               {comment.message}
               {master && <DeleteBtn path="comments" id={comment._id} />}
            </p>
         </section>
      </>
   );
};

export default Comment;
