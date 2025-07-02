const RenderedInfo = (props) => {
  console.log(props.infoData);
  return (
    <>
      {props.infoData.map((info, index) => (
        <tr key={index}>
          <td>
            {info.label}: {info.value}
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderedInfo;
