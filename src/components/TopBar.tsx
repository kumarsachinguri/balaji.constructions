import Icon from "../core/Icon";

const TopBar = () => {
  return (
    <div className='w-full flex items-center flex-wrap justify-center gap-4 bg-amber-400 text-sm p-2'>
      <a href='tel:+91 83075 29392' className='flex items-center gap-1'>
        <Icon name={"smartphone"} size={1}></Icon>
        83075-29392
      </a>
      <a
        href='mailTo:sales@balajiconstructions.org.in'
        className='flex items-center gap-1'
      >
        <Icon name={"mail"} size={1}></Icon>
        sales@balajiconstructions.org.in
      </a>
    </div>
  );
};

export default TopBar;
