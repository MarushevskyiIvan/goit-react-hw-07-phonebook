import { Puff } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Puff
      height="80"
      width="80"
      radius={1}
      color="#3f78b9"
      ariaLabel="puff-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '340px',
        left: 'calc(50% - 40px)',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
