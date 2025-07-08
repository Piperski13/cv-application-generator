const RenderedInfo = (props) => {
  return (
    <>
      {props.infoData.map((info, index) => (
        <tr key={index} className="text-base/8">
          <td className="w-[170px] underline decoration-2 font-bold block sm:inline-block sm:font-normal sm:no-underline">
            {info.label} :
          </td>
          <td className="block sm:inline-block">{info.value}</td>
        </tr>
      ))}
    </>
  );
};

export default RenderedInfo;
