import { toast } from 'react-toastify';
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToclipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        // toastify library
        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error('Failed to copy to clipboard');
      }
    } else {
      toast.error('Clipboard access is not available');
    }
  };
  return (
    <article
      onClick={saveToclipboard}
      className={index > 10 ? 'color color-light' : 'color '}
      style={{ background: `#${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex.toUpperCase()}</p>
    </article>
  );
};
export default SingleColor;
