import React from "react"; // ← Обов’язково для старіших Babel-конфігурацій
import s from './Question.module.scss';
import CustomBlock from '../CustomBlock/CustomBlock';

function Question() {
  return (
    <div className={s.question}>
      <div className={s.header}>
        <CustomBlock
          description="Frequently asked questions"
          highlight="Choose any questions you need"
        />
      </div>
    </div>
  );
}

export default Question;
