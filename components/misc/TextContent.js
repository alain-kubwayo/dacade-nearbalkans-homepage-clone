const TextContent = ({ style, text }) => {
  return (
    <p
      className={`text-primary-100 text-lg lg:text-[22px] leading-[28px] ${style}`}
    >
      {text}
    </p>
  );
};

export default TextContent;
