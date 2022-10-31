const SecondaryBtn = ({ style, text }) => {
  return (
    <button
      className={`leading-[17.6px] text-base border focus:outline-none cursor-pointer w-fit border-solid rounded-full px-5 py-3 border-primary-200 ${style}`}
    >
      {text}
    </button>
  );
};

export default SecondaryBtn;
