export const Tag = ({ data }) => {
  return data.map((tag) => {
    return (
      <>
        {tag.text}
        {/* {tag.icon} */}
      </>
    );
  });
};
