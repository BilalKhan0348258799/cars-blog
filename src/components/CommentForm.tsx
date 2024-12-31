import { useState } from 'react';

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={handleCommentChange}
        className="p-2 border border-gray-300 mb-2"
        placeholder="Add a comment..."
      />
      <button
        onClick={handleCommentSubmit}
        className="bg-blue-600 text-white px-4 py-2"
      >
        Submit
      </button>
      <div className="mt-4">
        <h3 className="font-semibold">Comments:</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="mb-2">{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentForm;
