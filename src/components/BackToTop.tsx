import Icon from "../core/Icon";

const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button type='button' className='back-to-top' onClick={() => handleClick()}>
      <Icon name={"arrow-up"} size={1.2} color='#222'></Icon>
    </button>
  );
};

export default BackToTop;
