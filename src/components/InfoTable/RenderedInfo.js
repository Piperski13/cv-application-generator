const RenderedInfo = (props) => {
  return (
    <>
      {props.infoData.map((info, index) => (
        <tr key={index} className="text-base/8">
          <td className="w-[170px]">{info.label}:</td>
          <td>{info.value}</td>
        </tr>
      ))}
    </>
  );
};

export default RenderedInfo;
