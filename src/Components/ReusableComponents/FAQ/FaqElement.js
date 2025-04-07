import { useState } from 'react';

export default function FaqElement(props) {
  const { ques, ans, isOpen, index = '', setSelectedIndex } = props;
  const [openFaq, setOpenFaq] = useState(false);
  const handleClick = (index) => {
    if (typeof index == 'number') {
      setSelectedIndex(index);
    } else {
      setOpenFaq(!openFaq);
    }
  };
  return (
    <>
      <div className="border" onClick={() => handleClick(index)}>
        {ques}
      </div>
      <div className={`${isOpen || openFaq ? 'block' : 'hidden'} bg-green-50 border`}>{ans}</div>
    </>
  );
}
