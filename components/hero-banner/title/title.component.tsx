import theme from '../../../common/styles/default/theme';

const HeroBannerTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h1>{title}</h1>
      <style jsx>
        {`
          h1 {
            color: ${theme.colors.mineShaft};
            font-size: ${theme.fonts.size.xxxxxLarge};
            font-weight: ${theme.fonts.weight.regular};
            margin: 0;
          }
        `}
      </style>
    </>
  );
};

export default HeroBannerTitle;
