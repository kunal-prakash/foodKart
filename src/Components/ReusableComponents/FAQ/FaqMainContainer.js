import { useEffect, useState } from 'react';
import FaqElement from './FaqElement';

export default function FaqMainContainer({ type = 'allOpen', data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (type !== 'allOpen' || type !== 'oneOpen') {
      console.log('Please provide a valid FAQ design type');
    }
  }, []);

  return (
    <>
      {data?.map((item, index) => {
        if (type === 'allOpen') {
          return <FaqElement key={item.key || index} ques={item.ques} ans={item.ans} />;
        } else if (type === 'oneOpen') {
          return (
            <FaqElement
              key={item.key || index}
              ques={item.ques}
              ans={item.ans}
              index={index}
              isOpen={index === selectedIndex ? true : false}
              setSelectedIndex={setSelectedIndex}
            />
          );
        }
      })}
    </>
  );
}
