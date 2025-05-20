const Header = ({ as: Tag = 'h1', children, className }) => {
  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
};

export default Header;
